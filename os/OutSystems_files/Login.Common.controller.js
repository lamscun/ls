define("Login.Common.controller", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "Login.clientVariables", "Login.controller$ServerAction.SP_Get_ErrorHandlerURL"], function (exports, OutSystems, LoginModel, LoginController, LoginClientVariables) {
var OS = OutSystems.Internal;
var Login_CommonController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.getDefaultTimeout = function () {
return LoginController.default.defaultTimeout;
};
Controller.prototype.handleError = function (ex, callContext) {
var controller = this.controller;
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var sP_Get_ErrorHandlerURLVar = new OS.DataTypes.VariableHolder();
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(OS.ErrorHandling.ignoreError(ex, callContext)) {
return OS.ErrorHandling.IGNORED_ERROR_RESULT;
}

return OS.Flow.tryCatch(function () {
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
if((((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
// Destination: /Login/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(LoginClientVariables.getNoPermissionsURL(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// LastRequest
// LastURL = GetBookmarkableURL
LoginClientVariables.setLastURL(OS.BuiltinFunctions.getBookmarkableURL());
// Destination: /Login/Login
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("Login", "Login", {
redirecturl: OS.DataConversion.ServerDataConverter.to("", OS.Types.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}

// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
OS.FeedbackMessageService.showFeedbackMessage(("Error: " + communicationExceptionVar.value.exceptionMessageAttr), /*Error*/ 3);
return OS.Flow.returnAsync();

});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: SP_Get_ErrorHandlerURL
return controller.sP_Get_ErrorHandlerURL$ServerAction(allExceptionsVar.value.exceptionMessageAttr, callContext).then(function (value) {
sP_Get_ErrorHandlerURLVar.value = value;
}).then(function () {
// Destination: /Login/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(sP_Get_ErrorHandlerURLVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
}, function (unhandledEx) {
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(!(OS.ErrorHandling.ignoreError(unhandledEx, callContext))) {
OS.ErrorHandling.handleError(unhandledEx, callContext);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;

}

return OS.ErrorHandling.IGNORED_ERROR_RESULT;

});


};
Controller.prototype.sP_Get_ErrorHandlerURL$ServerAction = function (exceptionMessageIn, callContext) {
var controller = this.controller;
var inputs = {
ExceptionMessage: OS.DataConversion.ServerDataConverter.to(exceptionMessageIn, OS.Types.Text)
};
return controller.callServerAction("SP_Get_ErrorHandlerURL", "screenservices/Login/ServiceAPISP_Get_ErrorHandlerURL", "rkyLF26Q6Z9xN0w99pwgTA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Login.Common$ServiceAPISP_Get_ErrorHandlerURL"))();
executeServerActionResult.uRLOut = OS.DataConversion.ServerDataConverter.from(outputs.URL, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Login.Common$ServiceAPISP_Get_ErrorHandlerURL", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
return Controller;
})(OS.Controller.BaseController);
Login_CommonController.default = new Controller();
});

