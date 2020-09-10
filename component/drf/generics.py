# -*- coding: utf-8 -*-
"""
框架补充相关代码
"""
import traceback

from blueapps.core.exceptions import BlueException
from blueapps.utils.logger import logger
from component.constants import ResponseCodeStatus
from component.utils import format_validation_message
from django.conf import settings
from django.http import Http404
from django.utils.translation import ugettext as _
from rest_framework import status
from rest_framework.exceptions import (
    AuthenticationFailed,
    MethodNotAllowed,
    NotAuthenticated,
    PermissionDenied,
    ValidationError,
)
from rest_framework.response import Response


def exception_handler(exc, context):
    """
    分类：
        rest_framework框架内异常
        app自定义异常
    """
    data = {"result": False, "data": None}
    if isinstance(exc, (NotAuthenticated, AuthenticationFailed)):
        data = {
            "result": False,
            "code": ResponseCodeStatus.UNAUTHORIZED,
            "detail": _("用户未登录或登录态失效，请使用登录链接重新登录"),
            "login_url": "",
        }
        return Response(data, status=status.HTTP_403_FORBIDDEN)

    if isinstance(exc, PermissionDenied):
        data = {
            "result": False,
            "code": ResponseCodeStatus.PERMISSION_DENIED,
            "message": exc.detail,
        }
        return Response(data, status=status.HTTP_403_FORBIDDEN)

    else:
        if isinstance(exc, ValidationError):
            data.update(
                {
                    "code": ResponseCodeStatus.VALIDATE_ERROR,
                    "messages": exc.detail,
                    "message": format_validation_message(exc),
                }
            )

        elif isinstance(exc, MethodNotAllowed):
            data.update(
                {
                    "code": ResponseCodeStatus.METHOD_NOT_ALLOWED,
                    "message": exc.detail,
                }
            )
        elif isinstance(exc, PermissionDenied):
            data.update(
                {
                    "code": ResponseCodeStatus.PERMISSION_DENIED,
                    "message": exc.detail,
                }
            )

        elif isinstance(exc, BlueException):
            # 更改返回的状态为为自定义错误类型的状态码
            data.update(
                {
                    "code": exc.STATUS_CODE,
                    "message": exc.message,
                }
            )
        elif isinstance(exc, Http404):
            # 更改返回的状态为为自定义错误类型的状态码
            data.update(
                {
                    "code": ResponseCodeStatus.OBJECT_NOT_EXIST,
                    "message": _("当前操作的对象不存在"),
                }
            )
        else:
            # 调试模式
            logger.error(traceback.format_exc())
            print(traceback.format_exc())
            if settings.RUN_MODE != "PRODUCT":
                raise exc
            # 正式环境，屏蔽500
            data.update(
                {
                    "code": ResponseCodeStatus.SERVER_500_ERROR,
                    "message": exc.message,
                }
            )

        return Response(data, status=status.HTTP_200_OK)
