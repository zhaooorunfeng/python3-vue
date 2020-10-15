# -*- coding: utf-8 -*-
from django.utils.translation import ugettext as _

from blueapps.core.exceptions import ServerBlueException, ClientBlueException


class AuthenticationError(ClientBlueException):

    MESSAGE = _("认证失败")
    ERROR_CODE = "40100"
    STATUS_CODE = 401


class NotAuthenticatedError(ClientBlueException):

    MESSAGE = _("未提供身份验证凭据")
    ERROR_CODE = "40101"
    STATUS_CODE = 401


class PermissionDeniedError(ClientBlueException):

    MESSAGE = _("您无权执行此操作")
    ERROR_CODE = "40302"
    STATUS_CODE = 403


class MethodNotAllowedError(ClientBlueException):

    MESSAGE = _("请求方法不被允许")
    ERROR_CODE = "40504"
    STATUS_CODE = 405


class NotAcceptableError(ClientBlueException):

    MESSAGE = _("无法满足请求Accept头")
    ERROR_CODE = "40600"
    STATUS_CODE = 406


class UnsupportedMediaTypeError(ClientBlueException):

    MESSAGE = _("不支持的媒体类型")
    ERROR_CODE = "41500"
    STATUS_CODE = 415


class ThrottledError(ClientBlueException):

    MESSAGE = _("请求被限制")
    ERROR_CODE = "42900"
    STATUS_CODE = 429


class DeleteError(ServerBlueException):

    MESSAGE = _("数据删除失败")
    ERROR_CODE = "50001"
    STATUS_CODE = 500


class UpdateError(ServerBlueException):

    MESSAGE = _("数据更新失败")
    ERROR_CODE = "50002"
    STATUS_CODE = 500
