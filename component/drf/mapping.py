# -*- coding: utf-8 -*-
from blueapps.core.exceptions import ParamValidationError, ResourceNotFound
from component.utils.exceptions import (AuthenticationError, NotAuthenticatedError,
                                        PermissionDeniedError, MethodNotAllowedError,
                                        NotAcceptableError, UnsupportedMediaTypeError,
                                        ThrottledError)

# drf exception to blueapps exception
exception_mapping = {
    "ValidationError": ParamValidationError,
    "AuthenticationFailed": AuthenticationError,
    "NotAuthenticated": NotAuthenticatedError,
    "PermissionDenied": PermissionDeniedError,
    "NotFound": ResourceNotFound,
    "MethodNotAllowed": MethodNotAllowedError,
    "NotAcceptable": NotAcceptableError,
    "UnsupportedMediaType": UnsupportedMediaTypeError,
    "Throttled": ThrottledError
}
