# -*- coding: utf-8 -*-
from rest_framework import serializers
from django.contrib.auth.models import Group
from django.db.models import ObjectDoesNotExist

from blueapps.account.models import User


class ManyToManyRelatedField(serializers.RelatedField):
    """自定义m2m关系字段, 用作既返回id, 也返回name"""

    def __init__(self, **kwargs):
        self.pk_field = kwargs.pop("pk_field", None)
        super().__init__(**kwargs)

    def to_internal_value(self, data):
        if self.pk_field is not None:
            data = self.pk_field.to_internal_value(data)
        return self.get_queryset().get(pk=data)

    def to_representation(self, value):
        return {"id": value.pk, "name": str(value)}


class UserManyToManyRelatedField(ManyToManyRelatedField):
    def __init__(self, **kwargs):
        self.pk_field = kwargs.pop("pk_field", None)
        super().__init__(**kwargs)

    def to_representation(self, value):
        try:
            name_display = value.properties.get(key="chname").value
        except ObjectDoesNotExist:
            name_display = value.username

        return {"id": value.pk, "name": name_display}


class UserSerializer(serializers.ModelSerializer):
    """框架用户分组serializer"""
    groups = serializers.StringRelatedField(many=True)

    class Meta:
        verbose_name = "系统用户"
        model = User
        fields = ("id", "username", "groups")

    def to_representation(self, instance):
        """
        Object instance -> Dict of primitive datatypes. 并且添加自定义属性
        """
        ret = super(UserSerializer, self).to_representation(instance)

        ret.update({i.key: i.value for i in instance.properties.all()})

        return ret


class GroupSerializer(serializers.ModelSerializer):
    user_set = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())

    class Meta:
        model = Group
        fields = ("id", "name", "user_set")
