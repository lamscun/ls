define("Login.controller$CheckURL", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "Login.controller$CheckURL.validateURLJS", "Login.clientVariables", "Login.controller$ModifyUrl"], function (exports, OutSystems, LoginModel, LoginController, Login_controller_CheckURL_validateURLJS, LoginClientVariables) {
var OS = OutSystems.Internal;
LoginController.default.checkURL$Action = function (urlIn, changeUrlIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.CheckURL$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.changeUrlInLocal = changeUrlIn;
var modifyUrlVar = new OS.DataTypes.VariableHolder();
var validateURLJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.CheckURL$outVars"))());
// Url = Replace
vars.value.urlInLocal = OS.BuiltinFunctions.replace(vars.value.urlInLocal, "(Not.Licensed.For.Production)", "");
validateURLJSResult.value = controller.safeExecuteJSNode(Login_controller_CheckURL_validateURLJS, "validateURL", "CheckURL", {
url: OS.DataConversion.JSNodeParamConverter.to(vars.value.urlInLocal, OS.Types.Text),
isValid: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean),
decodedUrl: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Login.CheckURL$validateURLJSResult"))();
jsNodeResult.isValidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isValid, OS.Types.Boolean);
jsNodeResult.decodedUrlOut = OS.DataConversion.JSNodeParamConverter.from($parameters.decodedUrl, OS.Types.Text);
return jsNodeResult;
}, {}, {});
// IsValid = validateURL.isValid
outVars.value.isValidOut = validateURLJSResult.value.isValidOut;
// Modify url?
if(((!(validateURLJSResult.value.isValidOut) && vars.value.changeUrlInLocal))) {
// Execute Action: ModifyUrl
modifyUrlVar.value = LoginController.default.modifyUrl$Action("redirecturl", "", callContext);

}

return outVars.value;
};
var controller = LoginController.default;
LoginController.default.constructor.registerVariableGroupType("Login.CheckURL$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ChangeUrl",
attrName: "changeUrlInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
LoginController.default.constructor.registerVariableGroupType("Login.CheckURL$validateURLJSResult", [{
name: "isValid",
attrName: "isValidOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "decodedUrl",
attrName: "decodedUrlOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
LoginController.default.constructor.registerVariableGroupType("Login.CheckURL$outVars", [{
name: "IsValid",
attrName: "isValidOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
LoginController.default.clientActionProxies.checkURL$Action = function (urlIn, changeUrlIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
changeUrlIn = (changeUrlIn === undefined) ? false : changeUrlIn;
return controller.executeActionInsideJSNode(LoginController.default.checkURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(urlIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(changeUrlIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsValid: OS.DataConversion.JSNodeParamConverter.to(actionResults.isValidOut, OS.Types.Boolean)
};
});
};
});
define("Login.controller$CheckURL.validateURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {

const isValidUrl = urlString=> {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

if($parameters.url !== '')
{
    var decodedurl = decodeURIComponent($parameters.url);
    $parameters.isValid = isValidUrl(decodedurl);
    //$parameters.decodedUrl = decodedurl;
} 
};
});

define("Login.controller$ConfirmUserEmail", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "Login.clientVariables", "Login.controller$ServerAction.ConfirmUserEmail", "Login.model$TextTextBoolean1Record"], function (exports, OutSystems, LoginModel, LoginController, LoginClientVariables) {
var OS = OutSystems.Internal;
LoginController.default.confirmUserEmail$Action = function (tokenIn, traceIdIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.ConfirmUserEmail$vars"))());
vars.value.tokenInLocal = tokenIn;
vars.value.traceIdInLocal = traceIdIn;
var confirmUserEmailVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.ConfirmUserEmail$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: ConfirmUserEmail
return controller.confirmUserEmail$ServerAction(vars.value.tokenInLocal, vars.value.traceIdInLocal, callContext).then(function (value) {
confirmUserEmailVar.value = value;
}).then(function () {
// IsConfirmed = ConfirmUserEmail.IsConfirmed
outVars.value.isConfirmedOut = confirmUserEmailVar.value.isConfirmedOut;
// Username = ConfirmUserEmail.Username
outVars.value.usernameOut = confirmUserEmailVar.value.usernameOut;
});
}).then(function () {
return outVars.value;
});
};
var controller = LoginController.default;
LoginController.default.constructor.registerVariableGroupType("Login.ConfirmUserEmail$vars", [{
name: "Token",
attrName: "tokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "TraceId",
attrName: "traceIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
LoginController.default.constructor.registerVariableGroupType("Login.ConfirmUserEmail$outVars", [{
name: "Experiment_P01",
attrName: "experiment_P01Out",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new LoginModel.TextTextBoolean1Record();
},
complexType: LoginModel.TextTextBoolean1Record
}, {
name: "IsConfirmed",
attrName: "isConfirmedOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Username",
attrName: "usernameOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
LoginController.default.clientActionProxies.confirmUserEmail$Action = function (tokenIn, traceIdIn) {
tokenIn = (tokenIn === undefined) ? "" : tokenIn;
traceIdIn = (traceIdIn === undefined) ? "" : traceIdIn;
return controller.executeActionInsideJSNode(LoginController.default.confirmUserEmail$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tokenIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(traceIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Experiment_P01: actionResults.experiment_P01Out,
IsConfirmed: OS.DataConversion.JSNodeParamConverter.to(actionResults.isConfirmedOut, OS.Types.Boolean),
Username: OS.DataConversion.JSNodeParamConverter.to(actionResults.usernameOut, OS.Types.Text)
};
});
};
});

define("Login.controller$Login_Meta_Tags", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "Login.controller$Login_Meta_Tags.AddMetaTagsJS", "Login.clientVariables"], function (exports, OutSystems, LoginModel, LoginController, Login_controller_Login_Meta_Tags_AddMetaTagsJS, LoginClientVariables) {
var OS = OutSystems.Internal;
LoginController.default.login_Meta_Tags$Action = function (callContext) {
callContext = controller.callContext(callContext);
controller.safeExecuteJSNode(Login_controller_Login_Meta_Tags_AddMetaTagsJS, "AddMetaTags", "Login_Meta_Tags", null, function ($parameters) {
}, {}, {});
return ;
};
var controller = LoginController.default;
LoginController.default.clientActionProxies.login_Meta_Tags$Action = function () {
return controller.executeActionInsideJSNode(LoginController.default.login_Meta_Tags$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Login.controller$Login_Meta_Tags.AddMetaTagsJS", [], function () {
return function ($actions, $roles, $public) {
//Add meta tags
var head = document.getElementsByTagName('head')[0];

//Description
var desc = document.createElement('meta');
desc.name = 'description';
desc.content = 'Log in to your OutSystems account';
head.appendChild(desc);

//Canonical
var can = document.createElement('link');
can.rel = 'canonical';
can.href = 'https://www.outsystems.com/Login/Login';
head.appendChild(can);

};
});

define("Login.controller$ModifyUrl", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "Login.controller$ModifyUrl.ModifyScriptJS", "Login.clientVariables"], function (exports, OutSystems, LoginModel, LoginController, Login_controller_ModifyUrl_ModifyScriptJS, LoginClientVariables) {
var OS = OutSystems.Internal;
LoginController.default.modifyUrl$Action = function (searchParamNameIn, searchParamValueIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.ModifyUrl$vars"))());
vars.value.searchParamNameInLocal = searchParamNameIn;
vars.value.searchParamValueInLocal = searchParamValueIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.ModifyUrl$outVars"))());
try {controller.safeExecuteJSNode(Login_controller_ModifyUrl_ModifyScriptJS, "ModifyScript", "ModifyUrl", {
searchParameterName: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchParamNameInLocal, OS.Types.Text),
searchParameterValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchParamValueInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
// success = True
outVars.value.successOut = true;
} catch (ex) {
(function () {
OS.Logger.trace("ModifyUrl.ModifyUrl", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
// success = False
outVars.value.successOut = false;
return outVars.value;

}

throw ex;
})();
}

return outVars.value;
};
var controller = LoginController.default;
LoginController.default.constructor.registerVariableGroupType("Login.ModifyUrl$vars", [{
name: "searchParamName",
attrName: "searchParamNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "searchParamValue",
attrName: "searchParamValueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
LoginController.default.constructor.registerVariableGroupType("Login.ModifyUrl$outVars", [{
name: "success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
LoginController.default.clientActionProxies.modifyUrl$Action = function (searchParamNameIn, searchParamValueIn) {
searchParamNameIn = (searchParamNameIn === undefined) ? "" : searchParamNameIn;
searchParamValueIn = (searchParamValueIn === undefined) ? "" : searchParamValueIn;
return controller.executeActionInsideJSNode(LoginController.default.modifyUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(searchParamNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(searchParamValueIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.Types.Boolean)
};
});
};
});
define("Login.controller$ModifyUrl.ModifyScriptJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const url = new URL(window.location.href);
const searchParams = url.searchParams;
searchParams.set($parameters.searchParameterName,$parameters.searchParameterValue);
window.history.replaceState({}, document.title, url.href);
};
});

define("Login.controller$OnApplicationReady", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "Login.controller$OnApplicationReady.InitializeVariablesJS", "Login.clientVariables", "Login.controller$SetFavicon", "Login.controller$SetClientVariables"], function (exports, OutSystems, LoginModel, LoginController, Login_controller_OnApplicationReady_InitializeVariablesJS, LoginClientVariables) {
var OS = OutSystems.Internal;
LoginController.default.onApplicationReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: SetFavicon
LoginController.default.setFavicon$Action(callContext);
controller.safeExecuteJSNode(Login_controller_OnApplicationReady_InitializeVariablesJS, "InitializeVariables", "On Application Ready", null, function ($parameters) {
}, {}, {});
// Execute Action: SetClientVariables
return LoginController.default.setClientVariables$Action(callContext);
});
};
var controller = LoginController.default;
LoginController.default.clientActionProxies.onApplicationReady$Action = function () {
return controller.executeActionInsideJSNode(LoginController.default.onApplicationReady$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Login.controller$OnApplicationReady.InitializeVariablesJS", [], function () {
return function ($actions, $roles, $public) {
// Segment Queue 
window.segmentQueue= [];

};
});

define("Login.controller$SetClientVariables", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "Login.clientVariables", "Login.controller$ServerAction.OnApplicationReady"], function (exports, OutSystems, LoginModel, LoginController, LoginClientVariables) {
var OS = OutSystems.Internal;
LoginController.default.setClientVariables$Action = function (callContext) {
callContext = controller.callContext(callContext);
var onApplicationReadyVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: OnApplicationReady
return controller.onApplicationReady$ServerAction(callContext).then(function (value) {
onApplicationReadyVar.value = value;
}).then(function () {
// GetStartedForFreeURL = OnApplicationReady.GetStartedForFreeURL
LoginClientVariables.setGetStartedForFreeURL(onApplicationReadyVar.value.getStartedForFreeURLOut);
// PortalURL = OnApplicationReady.PortalURL
LoginClientVariables.setPortalURL(onApplicationReadyVar.value.portalURLOut);
// NoPermissionsURL = OnApplicationReady.NoPermissionsURL
LoginClientVariables.setNoPermissionsURL(onApplicationReadyVar.value.noPermissionsURLOut);
// OldLoginURL = OnApplicationReady.OldLoginURL
LoginClientVariables.setOldLoginURL(onApplicationReadyVar.value.oldLoginURLOut);
// CustomerPortalURL = OnApplicationReady.CustomerPortalURL
LoginClientVariables.setCustomerPortalURL(onApplicationReadyVar.value.customerPortalURLOut);
// LoginPortalURL = OnApplicationReady.LoginPortalURL
LoginClientVariables.setLoginPortalURL(onApplicationReadyVar.value.loginPortalURLOut);
// Domain = OnApplicationReady.Domain
LoginClientVariables.setDomain(onApplicationReadyVar.value.domainOut);
});
}).then(function () {
return ;
});
};
var controller = LoginController.default;
LoginController.default.clientActionProxies.setClientVariables$Action = function () {
return controller.executeActionInsideJSNode(LoginController.default.setClientVariables$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Login.controller$SetCookie", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "Login.controller$SetCookie.SetCookieJS", "Login.clientVariables"], function (exports, OutSystems, LoginModel, LoginController, Login_controller_SetCookie_SetCookieJS, LoginClientVariables) {
var OS = OutSystems.Internal;
LoginController.default.setCookie$Action = function (cookieNameIn, cookieValueIn, cookieExpirationSpanIn, cookiePathIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.SetCookie$vars"))());
vars.value.cookieNameInLocal = cookieNameIn;
vars.value.cookieValueInLocal = cookieValueIn;
vars.value.cookieExpirationSpanInLocal = cookieExpirationSpanIn;
vars.value.cookiePathInLocal = cookiePathIn;
controller.safeExecuteJSNode(Login_controller_SetCookie_SetCookieJS, "SetCookie", "SetCookie", {
CookieValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.cookieValueInLocal, OS.Types.Text),
CookieName: OS.DataConversion.JSNodeParamConverter.to(vars.value.cookieNameInLocal, OS.Types.Text),
CookieExpirationSpan: OS.DataConversion.JSNodeParamConverter.to(vars.value.cookieExpirationSpanInLocal, OS.Types.Integer),
CookiePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.cookiePathInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
return ;
};
var controller = LoginController.default;
LoginController.default.constructor.registerVariableGroupType("Login.SetCookie$vars", [{
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
name: "CookieExpirationSpan",
attrName: "cookieExpirationSpanInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CookiePath",
attrName: "cookiePathInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
LoginController.default.clientActionProxies.setCookie$Action = function (cookieNameIn, cookieValueIn, cookieExpirationSpanIn, cookiePathIn) {
cookieNameIn = (cookieNameIn === undefined) ? "" : cookieNameIn;
cookieValueIn = (cookieValueIn === undefined) ? "" : cookieValueIn;
cookieExpirationSpanIn = (cookieExpirationSpanIn === undefined) ? 0 : cookieExpirationSpanIn;
cookiePathIn = (cookiePathIn === undefined) ? "" : cookiePathIn;
return controller.executeActionInsideJSNode(LoginController.default.setCookie$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cookieNameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(cookieValueIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(cookieExpirationSpanIn, OS.Types.Integer), OS.DataConversion.JSNodeParamConverter.from(cookiePathIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Login.controller$SetCookie.SetCookieJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var expires = "";
if ($parameters.CookieExpirationSpan) {
    var date = new Date();
    date.setTime(date.getTime() + ($parameters.CookieExpirationSpan*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
}
//console.log($parameters.CookieName + "=" + ($parameters.CookieValue || "")  + expires + "; path=" + $parameters.CookiePath);
document.cookie = $parameters.CookieName + "=" + ($parameters.CookieValue || "")  + expires + "; path=" + $parameters.CookiePath;
};
});

define("Login.controller$SetFavicon", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "OutSystemsUI.controller", "Login.clientVariables", "OutSystemsUI.controller$AddFavicon", "Login.referencesHealth", "Login.referencesHealth$OutSystemsUI"], function (exports, OutSystems, LoginModel, LoginController, OutSystemsUIController, LoginClientVariables) {
var OS = OutSystems.Internal;
LoginController.default.setFavicon$Action = function (callContext) {
callContext = controller.callContext(callContext);
// Execute Action: AddFavicon
OutSystemsUIController.default.addFavicon$Action("favicon.png", callContext);
return ;
};
var controller = LoginController.default;
LoginController.default.clientActionProxies.setFavicon$Action = function () {
return controller.executeActionInsideJSNode(LoginController.default.setFavicon$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Login.controller$UserLoginValidations", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "ReactiveUtilities.controller", "UserServices.model", "Events_Lib.controller", "Events_Lib.model", "Login.clientVariables", "ReactiveUtilities.controller$IsEmailValid", "Login.referencesHealth", "Login.referencesHealth$ReactiveUtilities", "UserServices.model$UserType_ResultRec", "Login.referencesHealth$UserServices", "Login.controller$ServerAction.Get_User_Type", "Events_Lib.controller$Track_SegmentEvent", "Login.referencesHealth$Events_Lib", "ReactiveUtilities.controller$RandomGUID", "Events_Lib.model$SegmentEventsRec", "Events_Lib.controller$GetEvents"], function (exports, OutSystems, LoginModel, LoginController, ReactiveUtilitiesController, UserServicesModel, Events_LibController, Events_LibModel, LoginClientVariables) {
var OS = OutSystems.Internal;
LoginController.default.userLoginValidations$Action = function (usernameIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.UserLoginValidations$vars"))());
vars.value.usernameInLocal = usernameIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var get_User_TypeVar = new OS.DataTypes.VariableHolder();
var isEmailValidVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.UserLoginValidations$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: IsEmailValid
isEmailValidVar.value = ReactiveUtilitiesController.default.isEmailValid$Action(vars.value.usernameInLocal, "([!#-\'*+/-9=?A-Z^-~-]+(\\.[!#-\'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \\t]|(\\\\[\\t -~]))+\")@([!#-\'*+/-9=?A-Z^-~-]+(\\.[!#-\'*+/-9=?A-Z^-~-]+)*|\\[[\\t -Z^-~]*])", callContext);

// Not valid email?
return OS.Flow.executeSequence(function () {
if((!(isEmailValidVar.value.isValidOut))) {
// Not Valid email
// ValidEmail = False
outVars.value.validEmailOut = false;
// UserLoginTypeId = Extranet
outVars.value.userLoginTypeIdOut = LoginModel.staticEntities.userLoginType.extranet;
} else {
// ValidEmail = True
outVars.value.validEmailOut = true;
// Execute Action: Get_User_Type
return controller.get_User_Type$ServerAction(vars.value.usernameInLocal, ReactiveUtilitiesController.default.randomGUID$Action(callContext).gUIDOut, callContext).then(function (value) {
get_User_TypeVar.value = value;
}).then(function () {
// Error?
if((((get_User_TypeVar.value.responseOut.errorAttr.httpCodeAttr) !== ("200")))) {
// Set Info
// UserLoginTypeId = Extranet
outVars.value.userLoginTypeIdOut = LoginModel.staticEntities.userLoginType.extranet;
// ErrorMessage = Get_User_Type.Response.Error.ErrorMessage
outVars.value.errorMessageOut = get_User_TypeVar.value.responseOut.errorAttr.errorMessageAttr;
} else {
// Set Info
// UserLoginTypeId = Get_User_Type.Response.UserLoginTypeId
outVars.value.userLoginTypeIdOut = get_User_TypeVar.value.responseOut.userLoginTypeIdAttr;
// ErrorMessage = ""
outVars.value.errorMessageOut = "";
// IsActive = Get_User_Type.Response.IsActive
outVars.value.isActiveOut = get_User_TypeVar.value.responseOut.isActiveAttr;
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("UserLoginValidations.UserLoginValidations", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
// Execute Action: Track_SegmentEvent_LoginFailure
return Events_LibController.default.track_SegmentEvent$Action(Events_LibController.default.getEvents$Action(callContext).eventsOut.loginFailureAttr, (("{\r\n  \"resource_name\" : \"Community\",\r\n  \"cause\" : \"" + allExceptionsVar.value.exceptionMessageAttr) + "\",\r\n  \"step\" : \"1\"\r\n}"), false, false, callContext).then(function () {
return OS.Flow.returnAsync(outVars.value);

});
});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = LoginController.default;
LoginController.default.constructor.registerVariableGroupType("Login.UserLoginValidations$vars", [{
name: "Username",
attrName: "usernameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
LoginController.default.constructor.registerVariableGroupType("Login.UserLoginValidations$outVars", [{
name: "ValidEmail",
attrName: "validEmailOut",
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
name: "UserLoginTypeId",
attrName: "userLoginTypeIdOut",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "IsActive",
attrName: "isActiveOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
LoginController.default.clientActionProxies.userLoginValidations$Action = function (usernameIn) {
usernameIn = (usernameIn === undefined) ? "" : usernameIn;
return controller.executeActionInsideJSNode(LoginController.default.userLoginValidations$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(usernameIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ValidEmail: OS.DataConversion.JSNodeParamConverter.to(actionResults.validEmailOut, OS.Types.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.Types.Text),
UserLoginTypeId: actionResults.userLoginTypeIdOut,
IsActive: OS.DataConversion.JSNodeParamConverter.to(actionResults.isActiveOut, OS.Types.Boolean)
};
});
};
});

define("Login.controller$ServerAction.ConfirmUserEmail", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller"], function (exports, OutSystems, LoginModel, LoginController) {
var OS = OutSystems.Internal;
LoginController.default.confirmUserEmail$ServerAction = function (tokenIn, traceIdIn, callContext) {
var controller = this.controller;
var inputs = {
Token: OS.DataConversion.ServerDataConverter.to(tokenIn, OS.Types.Text),
TraceId: OS.DataConversion.ServerDataConverter.to(traceIdIn, OS.Types.Text)
};
return controller.callServerAction("ConfirmUserEmail", "screenservices/Login/ActionConfirmUserEmail", "DRHT1nHkQ3XrYItT7NwrSA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Login$ActionConfirmUserEmail"))();
executeServerActionResult.isConfirmedOut = OS.DataConversion.ServerDataConverter.from(outputs.IsConfirmed, OS.Types.Boolean);
executeServerActionResult.usernameOut = OS.DataConversion.ServerDataConverter.from(outputs.Username, OS.Types.Text);
return executeServerActionResult;
});
};
LoginController.default.constructor.registerVariableGroupType("Login$ActionConfirmUserEmail", [{
name: "IsConfirmed",
attrName: "isConfirmedOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Username",
attrName: "usernameOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("Login.controller$ServerAction.Get_User_Type", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "UserServices.model", "UserServices.model$UserType_ResultRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, LoginModel, LoginController, UserServicesModel) {
var OS = OutSystems.Internal;
LoginController.default.get_User_Type$ServerAction = function (usernameIn, traceIdIn, callContext) {
var controller = this.controller;
var inputs = {
Username: OS.DataConversion.ServerDataConverter.to(usernameIn, OS.Types.Text),
TraceId: OS.DataConversion.ServerDataConverter.to(traceIdIn, OS.Types.Text)
};
return controller.callServerAction("Get_User_Type", "screenservices/Login/ServiceAPIGet_User_Type", "Qys1Lcrfnu95iHVgvTtj9A", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Login$ServiceAPIGet_User_Type"))();
executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, UserServicesModel.UserType_ResultRec);
return executeServerActionResult;
});
};
LoginController.default.constructor.registerVariableGroupType("Login$ServiceAPIGet_User_Type", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new UserServicesModel.UserType_ResultRec();
},
complexType: UserServicesModel.UserType_ResultRec
}]);
});
define("Login.controller$ServerAction.OnApplicationReady", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller"], function (exports, OutSystems, LoginModel, LoginController) {
var OS = OutSystems.Internal;
LoginController.default.onApplicationReady$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("OnApplicationReady", "screenservices/Login/ActionOnApplicationReady", "yrHgGoIJe87n73ld1CeENQ", {}, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Login$ActionOnApplicationReady"))();
executeServerActionResult.portalURLOut = OS.DataConversion.ServerDataConverter.from(outputs.PortalURL, OS.Types.Text);
executeServerActionResult.getStartedForFreeURLOut = OS.DataConversion.ServerDataConverter.from(outputs.GetStartedForFreeURL, OS.Types.Text);
executeServerActionResult.noPermissionsURLOut = OS.DataConversion.ServerDataConverter.from(outputs.NoPermissionsURL, OS.Types.Text);
executeServerActionResult.oldLoginURLOut = OS.DataConversion.ServerDataConverter.from(outputs.OldLoginURL, OS.Types.Text);
executeServerActionResult.customerPortalURLOut = OS.DataConversion.ServerDataConverter.from(outputs.CustomerPortalURL, OS.Types.Text);
executeServerActionResult.loginPortalURLOut = OS.DataConversion.ServerDataConverter.from(outputs.LoginPortalURL, OS.Types.Text);
executeServerActionResult.domainOut = OS.DataConversion.ServerDataConverter.from(outputs.Domain, OS.Types.Text);
return executeServerActionResult;
});
};
LoginController.default.constructor.registerVariableGroupType("Login$ActionOnApplicationReady", [{
name: "PortalURL",
attrName: "portalURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "GetStartedForFreeURL",
attrName: "getStartedForFreeURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "NoPermissionsURL",
attrName: "noPermissionsURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "OldLoginURL",
attrName: "oldLoginURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CustomerPortalURL",
attrName: "customerPortalURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LoginPortalURL",
attrName: "loginPortalURLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Domain",
attrName: "domainOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("Login.controller$ServerAction.SP_Get_ErrorHandlerURL", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller"], function (exports, OutSystems, LoginModel, LoginController) {
var OS = OutSystems.Internal;
LoginController.default.sP_Get_ErrorHandlerURL$ServerAction = function (exceptionMessageIn, callContext) {
var controller = this.controller;
var inputs = {
ExceptionMessage: OS.DataConversion.ServerDataConverter.to(exceptionMessageIn, OS.Types.Text)
};
return controller.callServerAction("SP_Get_ErrorHandlerURL", "screenservices/Login/ServiceAPISP_Get_ErrorHandlerURL", "rkyLF26Q6Z9xN0w99pwgTA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Login$ServiceAPISP_Get_ErrorHandlerURL"))();
executeServerActionResult.uRLOut = OS.DataConversion.ServerDataConverter.from(outputs.URL, OS.Types.Text);
return executeServerActionResult;
});
};
LoginController.default.constructor.registerVariableGroupType("Login$ServiceAPISP_Get_ErrorHandlerURL", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("Login.controller", ["exports", "OutSystems/ClientRuntime/Main", "Login.model"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var LoginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
this.registerOnApplicationReadyHandler("Login.controller$OnApplicationReady", "onApplicationReady$Action");
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 30;
Controller.prototype.getDefaultTimeout = function () {
return LoginController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
LoginController.default = new Controller();
});
