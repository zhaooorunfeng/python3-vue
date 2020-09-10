# -*- coding: utf-8 -*-
"""
    views相关模块代码
"""
from component.drf.mixins import ApiGenericMixin
from rest_framework import viewsets
from rest_framework.views import APIView as _APIView


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
