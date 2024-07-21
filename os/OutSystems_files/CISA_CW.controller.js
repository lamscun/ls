define("CISA_CW.controller$AuthenticationValidations", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller", "CISA_BL.model", "ToolsCommonUtils_Lib.model", "ToolsCommonUtils_Lib.controller", "CISA_CW.controller$GetLocalStorage", "CISA_CW.controller$SetLocalStorage", "CISA_CW.model$TextTextTextnamevalueRecordListRecord", "CISA_CW.model$TextTextBooleanRecordList", "CISA_CW.controller$ServerAction.LD_Feature_Get_v2", "CISA_CW.controller$ServerAction.ValidateUser", "CISA_CW.controller$ClearLocalStorage", "CISA_BL.model$TokenInfoRec", "CISA_CW.referencesHealth", "CISA_CW.referencesHealth$CISA_BL", "CISA_CW.controller$ServerAction.TokenValidate", "CISA_CW.controller$ServerAction.User_Logout", "ToolsCommonUtils_Lib.model$PayloadDatetimeRec", "CISA_CW.referencesHealth$ToolsCommonUtils_Lib", "ToolsCommonUtils_Lib.controller$CurrDatetimeUTCClient"], function (exports, OutSystems, CISA_CWModel, CISA_CWController, CISA_BLModel, ToolsCommonUtils_LibModel, ToolsCommonUtils_LibController) {
var OS = OutSystems.Internal;
CISA_CWController.default.authenticationValidations$Action = function (originalRedirectURLIn, traceIdIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CISA_CW.AuthenticationValidations$vars"))());
vars.value.originalRedirectURLInLocal = originalRedirectURLIn;
vars.value.traceIdInLocal = traceIdIn;
var getFeature_EnableODCUsersOnPortalVar = new OS.DataTypes.VariableHolder();
var validateUserVar = new OS.DataTypes.VariableHolder();
var tokenValidateVar = new OS.DataTypes.VariableHolder();
var logoutVar = new OS.DataTypes.VariableHolder();
var getLocalStorageVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CISA_CW.AuthenticationValidations$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetFeature_EnableODCUsersOnPortal
return controller.lD_Feature_Get_v2$ServerAction(function () {
var rec = new CISA_CWModel.TextTextTextnamevalueRecordListRecord();
return rec;
}(), "EnableODCUsersOnPortal", callContext).then(function (value) {
getFeature_EnableODCUsersOnPortalVar.value = value;
}).then(function () {
// Execute Action: GetLocalStorage
getLocalStorageVar.value = CISA_CWController.default.getLocalStorage$Action(callContext);

}).then(function () {
// No AccessToken
return OS.Flow.executeSequence(function () {
if(((getLocalStorageVar.value.accessTokenOut === ""))) {
// Execute Action: ValidateUser
return controller.validateUser$ServerAction(getFeature_EnableODCUsersOnPortalVar.value.successOut, "", callContext).then(function (value) {
validateUserVar.value = value;
}).then(function () {
// Token Empty?
return OS.Flow.executeSequence(function () {
if((!((validateUserVar.value.tokenOut === "")))) {
return OS.Flow.executeSequence(function () {
if((validateUserVar.value.isValidOut)) {
// RedirectURL
// RedirectURL = OriginalRedirectURL
outVars.value.redirectURLOut = vars.value.originalRedirectURLInLocal;
// ValidSession = True
outVars.value.validSessionOut = true;
// IdToken = ValidateUser.Token
outVars.value.idTokenOut = validateUserVar.value.tokenOut;
return OS.Flow.returnAsync(outVars.value);

} else {
// Execute Action: Logout
return controller.user_Logout$ServerAction("", callContext).then(function (value) {
logoutVar.value = value;
}).then(function () {
// RedirectURL = Logout.RedirectURL
outVars.value.redirectURLOut = logoutVar.value.redirectURLOut;
return OS.Flow.returnAsync(outVars.value);

});
}

});
}

});
});
}

});
}).then(function () {
// Execute Action: TokenValidate
return controller.tokenValidate$ServerAction(getLocalStorageVar.value.accessTokenOut, vars.value.originalRedirectURLInLocal, vars.value.traceIdInLocal, callContext).then(function (value) {
tokenValidateVar.value = value;
});
}).then(function () {
// RedirectURL Changed?
if((((vars.value.originalRedirectURLInLocal) !== (tokenValidateVar.value.redirectURLOut)))) {
// RedirectURL
// RedirectURL = TokenValidate.RedirectURL
outVars.value.redirectURLOut = tokenValidateVar.value.redirectURLOut;
// Execute Action: ClearLocalStorage
CISA_CWController.default.clearLocalStorage$Action(tokenValidateVar.value.cookieDomainOut, callContext);
} else {
// No token to set?
if(((tokenValidateVar.value.token_InfoOut.accessTokenAttr === ""))) {
// RedirectURL
// RedirectURL = TokenValidate.RedirectURL
outVars.value.redirectURLOut = tokenValidateVar.value.redirectURLOut;
// ValidSession = True
outVars.value.validSessionOut = true;
// IdToken = GetLocalStorage.IdToken
outVars.value.idTokenOut = getLocalStorageVar.value.idTokenOut;
} else {
// Execute Action: SetLocalStorage
CISA_CWController.default.setLocalStorage$Action(tokenValidateVar.value.token_InfoOut.accessTokenAttr, tokenValidateVar.value.token_InfoOut.idTokenAttr, tokenValidateVar.value.token_InfoOut.expiresInAttr, ToolsCommonUtils_LibController.default.currDatetimeUTCClient$Action(callContext).payloadDatetimeOut.datetimeUTCAttr, tokenValidateVar.value.cookieDomainOut, callContext);
// RedirectURL
// RedirectURL = TokenValidate.RedirectURL
outVars.value.redirectURLOut = tokenValidateVar.value.redirectURLOut;
// ValidSession = True
outVars.value.validSessionOut = true;
// IdToken = TokenValidate.Token_Info.IdToken
outVars.value.idTokenOut = tokenValidateVar.value.token_InfoOut.idTokenAttr;
}

}

});
}).then(function () {
return outVars.value;
});
};
var controller = CISA_CWController.default;
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW.AuthenticationValidations$vars", [{
name: "OriginalRedirectURL",
attrName: "originalRedirectURLInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "TraceId",
attrName: "traceIdInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW.AuthenticationValidations$outVars", [{
name: "RedirectURL",
attrName: "redirectURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ValidSession",
attrName: "validSessionOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IdToken",
attrName: "idTokenOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CISA_CWController.default.clientActionProxies.authenticationValidations$Action = function (originalRedirectURLIn, traceIdIn) {
originalRedirectURLIn = (originalRedirectURLIn === undefined) ? "" : originalRedirectURLIn;
traceIdIn = (traceIdIn === undefined) ? "" : traceIdIn;
return controller.executeActionInsideJSNode(CISA_CWController.default.authenticationValidations$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(originalRedirectURLIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(traceIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
RedirectURL: OS.DataConversion.JSNodeParamConverter.to(actionResults.redirectURLOut, OS.Types.Text),
ValidSession: OS.DataConversion.JSNodeParamConverter.to(actionResults.validSessionOut, OS.Types.Boolean),
IdToken: OS.DataConversion.JSNodeParamConverter.to(actionResults.idTokenOut, OS.Types.Text)
};
});
};
});

define("CISA_CW.controller$ClearLocalStorage", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller", "CISA_CW.controller$ClearLocalStorage.ClearLocalStorageJS"], function (exports, OutSystems, CISA_CWModel, CISA_CWController, CISA_CW_controller_ClearLocalStorage_ClearLocalStorageJS) {
var OS = OutSystems.Internal;
CISA_CWController.default.clearLocalStorage$Action = function (cookieDomainIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CISA_CW.ClearLocalStorage$vars"))());
vars.value.cookieDomainInLocal = cookieDomainIn;
controller.safeExecuteJSNode(CISA_CW_controller_ClearLocalStorage_ClearLocalStorageJS, "ClearLocalStorage", "ClearLocalStorage", {
CookieDomain: OS.DataConversion.JSNodeParamConverter.to(vars.value.cookieDomainInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
return ;
};
var controller = CISA_CWController.default;
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW.ClearLocalStorage$vars", [{
name: "CookieDomain",
attrName: "cookieDomainInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CISA_CWController.default.clientActionProxies.clearLocalStorage$Action = function (cookieDomainIn) {
cookieDomainIn = (cookieDomainIn === undefined) ? "" : cookieDomainIn;
return controller.executeActionInsideJSNode(CISA_CWController.default.clearLocalStorage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cookieDomainIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("CISA_CW.controller$ClearLocalStorage.ClearLocalStorageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Remove local storage
window.localStorage.removeItem('AccessToken');
window.localStorage.removeItem('IdToken');
window.localStorage.removeItem('ExpirationDate');

// Remove cookies
document.cookie = 'AccessToken' + "=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + $parameters.CookieDomain;
document.cookie = 'IdToken' + "=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + $parameters.CookieDomain;
document.cookie = 'ExpirationDate' + "=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + $parameters.CookieDomain;

};
});

define("CISA_CW.controller$GetLocalStorage", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller", "CISA_CW.controller$GetLocalStorage.GetLocalStorageJS"], function (exports, OutSystems, CISA_CWModel, CISA_CWController, CISA_CW_controller_GetLocalStorage_GetLocalStorageJS) {
var OS = OutSystems.Internal;
CISA_CWController.default.getLocalStorage$Action = function (callContext) {
callContext = controller.callContext(callContext);
var getLocalStorageJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CISA_CW.GetLocalStorage$outVars"))());
getLocalStorageJSResult.value = controller.safeExecuteJSNode(CISA_CW_controller_GetLocalStorage_GetLocalStorageJS, "GetLocalStorage", "GetLocalStorage", {
AccessToken: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text),
IdToken: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text),
ExpirationDate: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CISA_CW.GetLocalStorage$getLocalStorageJSResult"))();
jsNodeResult.accessTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AccessToken, OS.Types.Text);
jsNodeResult.idTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IdToken, OS.Types.Text);
jsNodeResult.expirationDateOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ExpirationDate, OS.Types.Text);
return jsNodeResult;
}, {}, {});
// AccessToken = GetLocalStorage.AccessToken
outVars.value.accessTokenOut = getLocalStorageJSResult.value.accessTokenOut;
// IdToken = GetLocalStorage.IdToken
outVars.value.idTokenOut = getLocalStorageJSResult.value.idTokenOut;
// ExpirationDate = TextToDateTime
outVars.value.expirationDateOut = OS.BuiltinFunctions.textToDateTime(getLocalStorageJSResult.value.expirationDateOut);
return outVars.value;
};
var controller = CISA_CWController.default;
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW.GetLocalStorage$getLocalStorageJSResult", [{
name: "AccessToken",
attrName: "accessTokenOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IdToken",
attrName: "idTokenOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExpirationDate",
attrName: "expirationDateOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW.GetLocalStorage$outVars", [{
name: "AccessToken",
attrName: "accessTokenOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IdToken",
attrName: "idTokenOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExpirationDate",
attrName: "expirationDateOut",
mandatory: false,
dataType: OS.Types.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
CISA_CWController.default.clientActionProxies.getLocalStorage$Action = function () {
return controller.executeActionInsideJSNode(CISA_CWController.default.getLocalStorage$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AccessToken: OS.DataConversion.JSNodeParamConverter.to(actionResults.accessTokenOut, OS.Types.Text),
IdToken: OS.DataConversion.JSNodeParamConverter.to(actionResults.idTokenOut, OS.Types.Text),
ExpirationDate: OS.DataConversion.JSNodeParamConverter.to(actionResults.expirationDateOut, OS.Types.DateTime)
};
});
};
});
define("CISA_CW.controller$GetLocalStorage.GetLocalStorageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.localStorage.getItem('AccessToken') !== null)
    {
        $parameters.AccessToken = window.localStorage.getItem('AccessToken');
    }
if (window.localStorage.getItem('IdToken') !== null)
    {
        $parameters.IdToken = window.localStorage.getItem('IdToken');
    }
if (window.localStorage.getItem('ExpirationDate') !== null)
    {
        $parameters.ExpirationDate = window.localStorage.getItem('ExpirationDate');
    }


};
});

define("CISA_CW.controller$LoginSetup", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller", "ReactiveUtilities.controller", "CISA_CW.controller$ServerAction.Get_IdentityService_URLLogin", "ReactiveUtilities.controller$RandomGUID", "CISA_CW.referencesHealth", "CISA_CW.referencesHealth$ReactiveUtilities"], function (exports, OutSystems, CISA_CWModel, CISA_CWController, ReactiveUtilitiesController) {
var OS = OutSystems.Internal;
CISA_CWController.default.loginSetup$Action = function (redirectURLIn, isFromLoginIn, usernameIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CISA_CW.LoginSetup$vars"))());
vars.value.redirectURLInLocal = redirectURLIn;
vars.value.isFromLoginInLocal = isFromLoginIn;
vars.value.usernameInLocal = usernameIn;
var get_IdentityService_URLLoginVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CISA_CW.LoginSetup$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Get_IdentityService_URLLogin
return controller.get_IdentityService_URLLogin$ServerAction(vars.value.redirectURLInLocal, vars.value.isFromLoginInLocal, vars.value.usernameInLocal, ReactiveUtilitiesController.default.randomGUID$Action(callContext).gUIDOut, callContext).then(function (value) {
get_IdentityService_URLLoginVar.value = value;
}).then(function () {
// IdentityService_LoginURL = Get_IdentityService_URLLogin.FinalURL
outVars.value.identityService_LoginURLOut = get_IdentityService_URLLoginVar.value.finalURLOut;
});
}).then(function () {
return outVars.value;
});
};
var controller = CISA_CWController.default;
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW.LoginSetup$vars", [{
name: "RedirectURL",
attrName: "redirectURLInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsFromLogin",
attrName: "isFromLoginInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "Username",
attrName: "usernameInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW.LoginSetup$outVars", [{
name: "IdentityService_LoginURL",
attrName: "identityService_LoginURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CISA_CWController.default.clientActionProxies.loginSetup$Action = function (redirectURLIn, isFromLoginIn, usernameIn) {
redirectURLIn = (redirectURLIn === undefined) ? "" : redirectURLIn;
isFromLoginIn = (isFromLoginIn === undefined) ? true : isFromLoginIn;
usernameIn = (usernameIn === undefined) ? "" : usernameIn;
return controller.executeActionInsideJSNode(CISA_CWController.default.loginSetup$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(redirectURLIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(isFromLoginIn, OS.Types.Boolean), OS.DataConversion.JSNodeParamConverter.from(usernameIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IdentityService_LoginURL: OS.DataConversion.JSNodeParamConverter.to(actionResults.identityService_LoginURLOut, OS.Types.Text)
};
});
};
});

define("CISA_CW.controller$SetCookie", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller", "CISA_CW.controller$SetCookie.SetCookieJS"], function (exports, OutSystems, CISA_CWModel, CISA_CWController, CISA_CW_controller_SetCookie_SetCookieJS) {
var OS = OutSystems.Internal;
CISA_CWController.default.setCookie$Action = function (cookieNameIn, cookieValueIn, cookiePathIn, cookieDomainIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CISA_CW.SetCookie$vars"))());
vars.value.cookieNameInLocal = cookieNameIn;
vars.value.cookieValueInLocal = cookieValueIn;
vars.value.cookiePathInLocal = cookiePathIn;
vars.value.cookieDomainInLocal = cookieDomainIn;
controller.safeExecuteJSNode(CISA_CW_controller_SetCookie_SetCookieJS, "SetCookie", "SetCookie", {
CookieValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.cookieValueInLocal, OS.Types.Text),
CookiePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.cookiePathInLocal, OS.Types.Text),
CookieName: OS.DataConversion.JSNodeParamConverter.to(vars.value.cookieNameInLocal, OS.Types.Text),
CookieDomain: OS.DataConversion.JSNodeParamConverter.to(vars.value.cookieDomainInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
return ;
};
var controller = CISA_CWController.default;
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW.SetCookie$vars", [{
name: "CookieName",
attrName: "cookieNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CookieValue",
attrName: "cookieValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CookiePath",
attrName: "cookiePathInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CookieDomain",
attrName: "cookieDomainInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
CISA_CWController.default.clientActionProxies.setCookie$Action = function (cookieNameIn, cookieValueIn, cookiePathIn, cookieDomainIn) {
cookieNameIn = (cookieNameIn === undefined) ? "" : cookieNameIn;
cookieValueIn = (cookieValueIn === undefined) ? "" : cookieValueIn;
cookiePathIn = (cookiePathIn === undefined) ? "" : cookiePathIn;
cookieDomainIn = (cookieDomainIn === undefined) ? "" : cookieDomainIn;
return controller.executeActionInsideJSNode(CISA_CWController.default.setCookie$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cookieNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(cookieValueIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(cookiePathIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(cookieDomainIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("CISA_CW.controller$SetCookie.SetCookieJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.cookie = $parameters.CookieName + "=" + ($parameters.CookieValue || "")  + "; path=" + $parameters.CookiePath + "; domain=" + $parameters.CookieDomain + ";secure" + ";expires=" + new Date(new Date().getTime()+60*60*1000*24*31).toGMTString();;
};
});

define("CISA_CW.controller$SetLocalStorage", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller", "CISA_CW.controller$SetLocalStorage.SetLocalStorageJS", "CISA_CW.controller$SetCookie"], function (exports, OutSystems, CISA_CWModel, CISA_CWController, CISA_CW_controller_SetLocalStorage_SetLocalStorageJS) {
var OS = OutSystems.Internal;
CISA_CWController.default.setLocalStorage$Action = function (accessTokenIn, idTokenIn, expiresInIn, baseDateTimeIn, cookieDomainIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CISA_CW.SetLocalStorage$vars"))());
vars.value.accessTokenInLocal = accessTokenIn;
vars.value.idTokenInLocal = idTokenIn;
vars.value.expiresInInLocal = expiresInIn;
vars.value.baseDateTimeInLocal = baseDateTimeIn;
vars.value.cookieDomainInLocal = cookieDomainIn;
// ExpirationDate = AddSeconds
vars.value.expirationDateVar = OS.BuiltinFunctions.addSeconds(vars.value.baseDateTimeInLocal, OS.BuiltinFunctions.longIntegerToInteger(vars.value.expiresInInLocal));
// Execute Action: SetCookie_AccessToken
CISA_CWController.default.setCookie$Action("AccessToken", vars.value.accessTokenInLocal, "/", vars.value.cookieDomainInLocal, callContext);
// Execute Action: SetCookie_IdToken
CISA_CWController.default.setCookie$Action("IdToken", vars.value.idTokenInLocal, "/", vars.value.cookieDomainInLocal, callContext);
// Execute Action: SetCookie_ExpiresIn
CISA_CWController.default.setCookie$Action("ExpirationDate", OS.BuiltinFunctions.dateTimeToText(vars.value.expirationDateVar), "/", vars.value.cookieDomainInLocal, callContext);
controller.safeExecuteJSNode(CISA_CW_controller_SetLocalStorage_SetLocalStorageJS, "SetLocalStorage", "SetLocalStorage", {
AccessToken: OS.DataConversion.JSNodeParamConverter.to(vars.value.accessTokenInLocal, OS.Types.Text),
IdToken: OS.DataConversion.JSNodeParamConverter.to(vars.value.idTokenInLocal, OS.Types.Text),
ExpirationDate: OS.DataConversion.JSNodeParamConverter.to(vars.value.expirationDateVar, OS.Types.DateTime)
}, function ($parameters) {
}, {}, {});
return ;
};
var controller = CISA_CWController.default;
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW.SetLocalStorage$vars", [{
name: "AccessToken",
attrName: "accessTokenInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IdToken",
attrName: "idTokenInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExpiresIn",
attrName: "expiresInInLocal",
mandatory: false,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "BaseDateTime",
attrName: "baseDateTimeInLocal",
mandatory: false,
dataType: OS.Types.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "CookieDomain",
attrName: "cookieDomainInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExpirationDate",
attrName: "expirationDateVar",
mandatory: false,
dataType: OS.Types.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
CISA_CWController.default.clientActionProxies.setLocalStorage$Action = function (accessTokenIn, idTokenIn, expiresInIn, baseDateTimeIn, cookieDomainIn) {
accessTokenIn = (accessTokenIn === undefined) ? "" : accessTokenIn;
idTokenIn = (idTokenIn === undefined) ? "" : idTokenIn;
expiresInIn = (expiresInIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : expiresInIn;
baseDateTimeIn = (baseDateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : baseDateTimeIn;
cookieDomainIn = (cookieDomainIn === undefined) ? "" : cookieDomainIn;
return controller.executeActionInsideJSNode(CISA_CWController.default.setLocalStorage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(accessTokenIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(idTokenIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(expiresInIn, OS.Types.LongInteger), OS.DataConversion.JSNodeParamConverter.from(baseDateTimeIn, OS.Types.DateTime), OS.DataConversion.JSNodeParamConverter.from(cookieDomainIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("CISA_CW.controller$SetLocalStorage.SetLocalStorageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.localStorage.setItem('AccessToken', $parameters.AccessToken);
window.localStorage.setItem('IdToken', $parameters.IdToken);
window.localStorage.setItem('ExpirationDate', $parameters.ExpirationDate);

};
});

define("CISA_CW.controller$ServerAction.Get_IdentityService_URLLogin", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller"], function (exports, OutSystems, CISA_CWModel, CISA_CWController) {
var OS = OutSystems.Internal;
CISA_CWController.default.get_IdentityService_URLLogin$ServerAction = function (redirectURLIn, isFromLoginIn, usernameIn, traceIdIn, callContext) {
var controller = this.controller;
var inputs = {
RedirectURL: OS.DataConversion.ServerDataConverter.to(redirectURLIn, OS.Types.Text),
IsFromLogin: OS.DataConversion.ServerDataConverter.to(isFromLoginIn, OS.Types.Boolean),
Username: OS.DataConversion.ServerDataConverter.to(usernameIn, OS.Types.Text),
TraceId: OS.DataConversion.ServerDataConverter.to(traceIdIn, OS.Types.Text)
};
return controller.callServerAction("Get_IdentityService_URLLogin", "screenservices/CISA_CW/ActionGet_IdentityService_URLLogin", "HJWgFmlF3jxhTb321rwJjA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("CISA_CW$rssespacecisa_bl_ActionGet_IdentityService_URLLogin"))();
executeServerActionResult.finalURLOut = OS.DataConversion.ServerDataConverter.from(outputs.FinalURL, OS.Types.Text);
return executeServerActionResult;
});
};
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW$rssespacecisa_bl_ActionGet_IdentityService_URLLogin", [{
name: "FinalURL",
attrName: "finalURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("CISA_CW.controller$ServerAction.LD_Feature_Get_v2", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller", "CISA_CW.model$TextTextBooleanRecordList"], function (exports, OutSystems, CISA_CWModel, CISA_CWController) {
var OS = OutSystems.Internal;
CISA_CWController.default.lD_Feature_Get_v2$ServerAction = function (requestIn, featureIn, callContext) {
var controller = this.controller;
var inputs = {
Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.Types.Record),
Feature: OS.DataConversion.ServerDataConverter.to(featureIn, OS.Types.Text)
};
return controller.callServerAction("LD_Feature_Get_v2", "screenservices/CISA_CW/ServiceAPILD_Feature_Get_v2", "spUKywgmGTLBylHWidkbFw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("CISA_CW$ServiceAPILD_Feature_Get_v2"))();
executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.Types.Boolean);
executeServerActionResult.errorMessageOut = OS.DataConversion.ServerDataConverter.from(outputs.ErrorMessage, OS.Types.Text);
executeServerActionResult.featuresOut = OS.DataConversion.ServerDataConverter.from(outputs.Features, CISA_CWModel.TextTextBooleanRecordList);
return executeServerActionResult;
});
};
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW$ServiceAPILD_Feature_Get_v2", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Features",
attrName: "featuresOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new CISA_CWModel.TextTextBooleanRecordList();
},
complexType: CISA_CWModel.TextTextBooleanRecordList
}]);
});
define("CISA_CW.controller$ServerAction.TokenValidate", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller", "CISA_BL.model", "CISA_BL.model$TokenInfoRec", "CISA_CW.referencesHealth", "CISA_CW.referencesHealth$CISA_BL"], function (exports, OutSystems, CISA_CWModel, CISA_CWController, CISA_BLModel) {
var OS = OutSystems.Internal;
CISA_CWController.default.tokenValidate$ServerAction = function (tokenIn, originalRedirectURLIn, traceIdIn, callContext) {
var controller = this.controller;
var inputs = {
Token: OS.DataConversion.ServerDataConverter.to(tokenIn, OS.Types.Text),
OriginalRedirectURL: OS.DataConversion.ServerDataConverter.to(originalRedirectURLIn, OS.Types.Text),
TraceId: OS.DataConversion.ServerDataConverter.to(traceIdIn, OS.Types.Text)
};
return controller.callServerAction("TokenValidate", "screenservices/CISA_CW/ActionTokenValidate", "4KS9IKEyM7I+X+emXAHmQQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("CISA_CW$rssespacecisa_bl_ActionTokenValidate"))();
executeServerActionResult.token_InfoOut = OS.DataConversion.ServerDataConverter.from(outputs.Token_Info, CISA_BLModel.TokenInfoRec);
executeServerActionResult.redirectURLOut = OS.DataConversion.ServerDataConverter.from(outputs.RedirectURL, OS.Types.Text);
executeServerActionResult.cookieDomainOut = OS.DataConversion.ServerDataConverter.from(outputs.CookieDomain, OS.Types.Text);
return executeServerActionResult;
});
};
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW$rssespacecisa_bl_ActionTokenValidate", [{
name: "Token_Info",
attrName: "token_InfoOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new CISA_BLModel.TokenInfoRec();
},
complexType: CISA_BLModel.TokenInfoRec
}, {
name: "RedirectURL",
attrName: "redirectURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CookieDomain",
attrName: "cookieDomainOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("CISA_CW.controller$ServerAction.User_Logout", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller"], function (exports, OutSystems, CISA_CWModel, CISA_CWController) {
var OS = OutSystems.Internal;
CISA_CWController.default.user_Logout$ServerAction = function (stateIn, callContext) {
var controller = this.controller;
var inputs = {
State: OS.DataConversion.ServerDataConverter.to(stateIn, OS.Types.Text)
};
return controller.callServerAction("User_Logout", "screenservices/CISA_CW/ActionUser_Logout", "08UJG_aIzVJeBaUyTurvhw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("CISA_CW$rssespacecisa_bl_ActionUser_Logout"))();
executeServerActionResult.redirectURLOut = OS.DataConversion.ServerDataConverter.from(outputs.RedirectURL, OS.Types.Text);
return executeServerActionResult;
});
};
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW$rssespacecisa_bl_ActionUser_Logout", [{
name: "RedirectURL",
attrName: "redirectURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("CISA_CW.controller$ServerAction.ValidateUser", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model", "CISA_CW.controller"], function (exports, OutSystems, CISA_CWModel, CISA_CWController) {
var OS = OutSystems.Internal;
CISA_CWController.default.validateUser$ServerAction = function (enableODCUsersOnPortalIn, originIn, callContext) {
var controller = this.controller;
var inputs = {
EnableODCUsersOnPortal: OS.DataConversion.ServerDataConverter.to(enableODCUsersOnPortalIn, OS.Types.Boolean),
Origin: OS.DataConversion.ServerDataConverter.to(originIn, OS.Types.Text)
};
return controller.callServerAction("ValidateUser", "screenservices/CISA_CW/ActionValidateUser", "HgnMRnEabC2mZQ03Gj3ZAg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("CISA_CW$ActionValidateUser"))();
executeServerActionResult.isValidOut = OS.DataConversion.ServerDataConverter.from(outputs.IsValid, OS.Types.Boolean);
executeServerActionResult.tokenOut = OS.DataConversion.ServerDataConverter.from(outputs.Token, OS.Types.Text);
return executeServerActionResult;
});
};
CISA_CWController.default.constructor.registerVariableGroupType("CISA_CW$ActionValidateUser", [{
name: "IsValid",
attrName: "isValidOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Token",
attrName: "tokenOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("CISA_CW.controller", ["exports", "OutSystems/ClientRuntime/Main", "CISA_CW.model"], function (exports, OutSystems, CISA_CWModel) {
var OS = OutSystems.Internal;
var CISA_CWController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 20;
Controller.prototype.getDefaultTimeout = function () {
return CISA_CWController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
CISA_CWController.default = new Controller();
});
