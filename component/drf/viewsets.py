# -*- coding: utf-8 -*-
"""
views相关模块代码
"""
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.views import APIView as _APIView
from django.db import transaction
from django.contrib.auth.models import Group

from blueapps.account.models import User, UserProperty
from blueking.component.shortcuts import get_client_by_user

from component.drf.mixins import ApiGenericMixin
from component.drf.serializers import UserSerializer, GroupSerializer
from component.utils.exceptions import BkEsbReturnError


class APIView(ApiGenericMixin, _APIView):
    """APIView"""

    pass


class ModelViewSet(ApiGenericMixin, viewsets.ModelViewSet):
    """按需改造DRF默认的ModelViewSet类"""

    def perform_create(self, serializer):
        """创建时补充基础Model中的字段"""
        user = serializer.context.get("request").user
        username = getattr(user, "username", "guest")
        serializer.save(creator=username, updated_by=username)

    def perform_update(self, serializer):
        """更新时补充基础Model中的字段"""
        user = serializer.context.get("request").user
        username = getattr(user, "username", "guest")
        serializer.save(updated_by=username)


class ReadOnlyModelViewSet(ApiGenericMixin, viewsets.ReadOnlyModelViewSet):
    """按需改造DRF默认的ModelViewSet类"""

    pass


class ViewSet(ApiGenericMixin, viewsets.ViewSet):
    """按需改造DRF默认的ViewSet类"""

    pass


class GenericViewSet(ApiGenericMixin, viewsets.GenericViewSet):
    """按需改造DRF默认的GenericViewSet类"""

    pass


class UserViewSet(viewsets.ModelViewSet):
    """系统用户管理"""

    queryset = User.objects.all()
    serializer_class = UserSerializer
    search_fields = ["username", "properties__value"]
    ordering_fields = ["date_joined", "username"]
    ordering = ["-date_joined"]

    @action(methods=["get"], detail=False)
    def bk_user(self, request=None):
        """获取蓝鲸所有的用户"""
        client = get_client_by_user(request.user.username)
        result_dict = client.bk_login.get_all_users()
        if not result_dict["result"]:
            raise BkEsbReturnError("获取蓝鲸用户出错: %s" % result_dict.get("message", ""))

        user_list = result_dict["data"]
        # 去掉已加入到系统中的用户
        bk_username_user_dict = {i["bk_username"]: i for i in user_list}
        system_bk_username_list = User.objects.filter(username__in=bk_username_user_dict.keys()).values_list(
            "username", flat=True
        )

        return_list = [
            bk_username_user_dict[username]
            for username in set(bk_username_user_dict.keys()) - set(system_bk_username_list)
        ]

        return Response(return_list, status=status.HTTP_200_OK)

    @transaction.atomic()
    def create(self, request, *args, **kwargs):
        """批量添加用户"""
        params = request.data
        user_list = params.get("user_list", [])
        group_id_list = params.get("group_id_list", [])

        username_userinfo_mapping = {i["bk_username"]: i for i in user_list}
        User.objects.bulk_create([User(username=i) for i in username_userinfo_mapping.keys()])
        username_userinstance_mapping = {
            u.username: u for u in User.objects.filter(username__in=username_userinfo_mapping.keys())
        }

        user_property_create_list = []
        for username, userinstance in username_userinstance_mapping.items():
            userinfo = username_userinfo_mapping.get(username, {})
            user_property_create_list.append(
                UserProperty(user_id=userinstance.id, key="phone", value=userinfo.get("phone", ""))
            )  # noqa
            user_property_create_list.append(
                UserProperty(user_id=userinstance.id, key="email", value=userinfo.get("email", ""))
            )  # noqa
            user_property_create_list.append(
                UserProperty(user_id=userinstance.id, key="chname", value=userinfo.get("chname", username))
            )  # noqa

            if group_id_list:
                userinstance.groups.add(*group_id_list)

        UserProperty.objects.bulk_create(user_property_create_list)

        return Response(status=status.HTTP_201_CREATED)


class GroupViewSet(viewsets.ModelViewSet):
    """系统用户组管理"""

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    search_fields = ["name"]
    ordering_fields = ["name"]
    ordering = ["name"]
