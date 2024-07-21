define("Login.LoginFlow.Login.mvc$model", ["OutSystems/ClientRuntime/Main", "Login.model", "CISA_CW.controller", "Login.controller", "ReactiveUtilities.controller", "Portal_Th.Layouts.Portal_Layout.mvc$model", "Portal_Th.Layouts.SignupLayout.mvc$model", "Login.LoginFlow.Login_Block.mvc$model", "Login.model$TextTextTextnamevalueRecordListRecord", "Login.model$TextTextBoolean1RecordList", "CISA_CW.controller$LoginSetup", "Login.referencesHealth", "Login.referencesHealth$CISA_CW", "Login.controller$UserLoginValidations", "Login.controller$CheckURL", "CISA_CW.controller$AuthenticationValidations", "ReactiveUtilities.controller$RandomGUID", "Login.referencesHealth$ReactiveUtilities"], function (OutSystems, LoginModel, CISA_CWController, LoginController, ReactiveUtilitiesController, Portal_Th_Layouts_Portal_Layout_mvcModel, Portal_Th_Layouts_SignupLayout_mvcModel, Login_LoginFlow_Login_Block_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Username_form", "username_formVar", "Username_form", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("URL", "uRLVar", "URL", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("ShowPassword", "showPasswordVar", "ShowPassword", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("ShowLogin", "showLoginVar", "ShowLogin", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("username", "usernameIn", "username", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("_usernameInDataFetchStatus", "_usernameInDataFetchStatus", "_usernameInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("redirecturl", "redirecturlIn", "redirecturl", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("_redirecturlInDataFetchStatus", "_redirecturlInDataFetchStatus", "_redirecturlInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = ((Portal_Th_Layouts_Portal_Layout_mvcModel.hasValidationWidgets || Portal_Th_Layouts_SignupLayout_mvcModel.hasValidationWidgets) || Login_LoginFlow_Login_Block_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("username" in inputs) {
this.variables.usernameIn = OS.DataConversion.ServerDataConverter.from(inputs.username, OS.Types.Text);
}

if("redirecturl" in inputs) {
this.variables.redirecturlIn = OS.DataConversion.ServerDataConverter.from(inputs.redirecturl, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Login.LoginFlow.Login.mvc$view", ["OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "CISA_CW.controller", "ReactiveUtilities.controller", "react", "OutSystems/ReactView/Main", "Login.LoginFlow.Login.mvc$model", "Login.LoginFlow.Login.mvc$controller", "Login.clientVariables", "Portal_Th.Layouts.Portal_Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Portal_Th.Layouts.SignupLayout.mvc$view", "Login.LoginFlow.Login_Block.mvc$view", "Login.model$TextTextTextnamevalueRecordListRecord", "Login.model$TextTextBoolean1RecordList", "CISA_CW.controller$LoginSetup", "Login.referencesHealth", "Login.referencesHealth$CISA_CW", "Login.controller$UserLoginValidations", "Login.controller$CheckURL", "CISA_CW.controller$AuthenticationValidations", "ReactiveUtilities.controller$RandomGUID", "Login.referencesHealth$ReactiveUtilities"], function (OutSystems, LoginModel, LoginController, CISA_CWController, ReactiveUtilitiesController, React, OSView, Login_LoginFlow_Login_mvc_model, Login_LoginFlow_Login_mvc_controller, LoginClientVariables, Portal_Th_Layouts_Portal_Layout_mvc_view, OSWidgets, Portal_Th_Layouts_SignupLayout_mvc_view, Login_LoginFlow_Login_Block_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "LoginFlow.Login";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/ProductDesignSystem.ProductDesignSystem.css", "css/ProductDesignSystem.HybridTheme.css", "css/Login.Login.css", "css/Login.Login.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Portal_Th_Layouts_Portal_Layout_mvc_view, Portal_Th_Layouts_SignupLayout_mvc_view, Login_LoginFlow_Login_Block_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Login_LoginFlow_Login_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Login_LoginFlow_Login_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Login | OutSystems";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.showLoginVar, false, this, function () {
return [React.createElement(Portal_Th_Layouts_Portal_Layout_mvc_view, {
inputs: {
IncludeMenu: false,
IncludeFooter: false,
PageType: 1,
ShowLoginInfo: false,
ValidateIdentityAuthentication: false,
ShowSearch: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-content",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Portal_Th_Layouts_SignupLayout_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h1",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "heading4",
text: ["Log in to your OutSystems account"],
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
subtitle: PlaceholderContent.Empty,
mainContent: new PlaceholderContent(function () {
return [React.createElement(Login_LoginFlow_Login_Block_mvc_view, {
inputs: {
username: model.variables.usernameIn,
ShowPassword: model.variables.showPasswordVar,
redirecturl: model.variables.redirecturlIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.redirecturlIn), asPrimitiveValue(model.variables.showPasswordVar), asPrimitiveValue(model.variables.usernameIn)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.redirecturlIn), asPrimitiveValue(model.variables.showPasswordVar), asPrimitiveValue(model.variables.usernameIn)]
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("Login.LoginFlow.Login.mvc$controller", ["OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "CISA_CW.controller", "ReactiveUtilities.controller", "Login.languageResources", "Login.clientVariables", "Login.LoginFlow.controller", "Login.LoginFlow.Login.mvc$controller.OnInitialize.ClearingCookie_UseOS11LoginJS", "Login.LoginFlow.Login.mvc$controller.OnInitialize.GetUseOS11LoginJS", "Login.model$TextTextTextnamevalueRecordListRecord", "Login.model$TextTextBoolean1RecordList", "CISA_CW.controller$LoginSetup", "Login.referencesHealth", "Login.referencesHealth$CISA_CW", "Login.controller$UserLoginValidations", "Login.controller$CheckURL", "CISA_CW.controller$AuthenticationValidations", "ReactiveUtilities.controller$RandomGUID", "Login.referencesHealth$ReactiveUtilities"], function (OutSystems, LoginModel, LoginController, CISA_CWController, ReactiveUtilitiesController, LoginLanguageResources, LoginClientVariables, Login_LoginFlowController, Login_LoginFlow_Login_mvc_controller_OnInitialize_ClearingCookie_UseOS11LoginJS, Login_LoginFlow_Login_mvc_controller_OnInitialize_GetUseOS11LoginJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.lD_Feature_Get_v2$ServerAction = function (requestIn, featureIn, callContext) {
var controller = this.controller;
var inputs = {
Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.Types.Record),
Feature: OS.DataConversion.ServerDataConverter.to(featureIn, OS.Types.Text)
};
return controller.callServerAction("LD_Feature_Get_v2", "screenservices/Login/LoginFlow/Login/ServiceAPILD_Feature_Get_v2", "Vuf0oUpacLOrWKqbD0R3Rg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Login.LoginFlow.Login$ServiceAPILD_Feature_Get_v2"))();
executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.Types.Boolean);
executeServerActionResult.errorMessageOut = OS.DataConversion.ServerDataConverter.from(outputs.ErrorMessage, OS.Types.Text);
executeServerActionResult.featuresOut = OS.DataConversion.ServerDataConverter.from(outputs.Features, LoginModel.TextTextBoolean1RecordList);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Login.LoginFlow.Login$ServiceAPILD_Feature_Get_v2", [{
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
return new LoginModel.TextTextBoolean1RecordList();
},
complexType: LoginModel.TextTextBoolean1RecordList
}]);
Controller.prototype.sP_Get_UnderMaintenanceURL$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("SP_Get_UnderMaintenanceURL", "screenservices/Login/LoginFlow/Login/ServiceAPISP_Get_UnderMaintenanceURL", "8DJRXR8kO6k_wspgwBVylw", {}, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Login.LoginFlow.Login$ServiceAPISP_Get_UnderMaintenanceURL"))();
executeServerActionResult.uRLOut = OS.DataConversion.ServerDataConverter.from(outputs.URL, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Login.LoginFlow.Login$ServiceAPISP_Get_UnderMaintenanceURL", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype.sP_Get_LoginTraditionalPath$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("SP_Get_LoginTraditionalPath", "screenservices/Login/LoginFlow/Login/ServiceAPISP_Get_LoginTraditionalPath", "6I6sRnVoKUKaKe+sZilXqg", {}, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Login.LoginFlow.Login$ServiceAPISP_Get_LoginTraditionalPath"))();
executeServerActionResult.uRLOut = OS.DataConversion.ServerDataConverter.from(outputs.URL, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Login.LoginFlow.Login$ServiceAPISP_Get_LoginTraditionalPath", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype.sP_Get_GetLoginODCURL$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("SP_Get_GetLoginODCURL", "screenservices/Login/LoginFlow/Login/ServiceAPISP_Get_GetLoginODCURL", "J+PnDUL92Ws0MiSDNIjLtA", {}, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Login.LoginFlow.Login$ServiceAPISP_Get_GetLoginODCURL"))();
executeServerActionResult.uRLOut = OS.DataConversion.ServerDataConverter.from(outputs.URL, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Login.LoginFlow.Login$ServiceAPISP_Get_GetLoginODCURL", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var lD_Feature_Get_v2Var = new OS.DataTypes.VariableHolder();
var sP_Get_UnderMaintenanceURLVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LD_Feature_Get_v2
model.flush();
return controller.lD_Feature_Get_v2$ServerAction(function () {
var rec = new LoginModel.TextTextTextnamevalueRecordListRecord();
return rec;
}(), "FTundermaintenance", callContext).then(function (value) {
lD_Feature_Get_v2Var.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((lD_Feature_Get_v2Var.value.featuresOut.getCurrent(callContext.iterationContext).booleanAttr)) {
// Execute Action: SP_Get_UnderMaintenanceURL
model.flush();
return controller.sP_Get_UnderMaintenanceURL$ServerAction(callContext).then(function (value) {
sP_Get_UnderMaintenanceURLVar.value = value;
}).then(function () {
// Destination: /Login/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(sP_Get_UnderMaintenanceURLVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
});
};
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Login.LoginFlow.Login.OnInitialize$vars"))());
var getFeature_EnableODCUsersOnPortalVar = new OS.DataTypes.VariableHolder();
var sP_Get_LoginTraditionalPathVar = new OS.DataTypes.VariableHolder();
var sP_Get_GetLoginODCURLVar = new OS.DataTypes.VariableHolder();
var loginSetupVar = new OS.DataTypes.VariableHolder();
var userLoginValidationsVar = new OS.DataTypes.VariableHolder();
var checkURLVar = new OS.DataTypes.VariableHolder();
var authenticationValidationsVar = new OS.DataTypes.VariableHolder();
var getUseOS11LoginJSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetFeature_EnableODCUsersOnPortal
model.flush();
return controller.lD_Feature_Get_v2$ServerAction(function () {
var rec = new LoginModel.TextTextTextnamevalueRecordListRecord();
return rec;
}(), "EnableODCUsersOnPortal", callContext).then(function (value) {
getFeature_EnableODCUsersOnPortalVar.value = value;
}).then(function () {
// Execute Action: CheckURL
checkURLVar.value = LoginController.default.checkURL$Action(model.variables.redirecturlIn, (((model.variables.redirecturlIn === "")) ? (false) : (true)), callContext);

// redirecturl = If
model.variables.redirecturlIn = ((checkURLVar.value.isValidOut) ? (model.variables.redirecturlIn) : (""));
// URL = redirecturl
model.variables.uRLVar = model.variables.redirecturlIn;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getFeature_EnableODCUsersOnPortalVar.value.featuresOut.getCurrent(callContext.iterationContext).booleanAttr)) {
getUseOS11LoginJSResult.value = controller.safeExecuteJSNode(Login_LoginFlow_Login_mvc_controller_OnInitialize_GetUseOS11LoginJS, "GetUseOS11Login", "OnInitialize", {
Cookie: OS.DataConversion.JSNodeParamConverter.to("UseOS11Login", OS.Types.Text),
UseOS11Login: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Login.LoginFlow.Login.OnInitialize$getUseOS11LoginJSResult"))();
jsNodeResult.useOS11LoginOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UseOS11Login, OS.Types.Text);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((((getUseOS11LoginJSResult.value.useOS11LoginOut) !== ("True")))) {
// Execute Action: SP_Get_GetLoginODCURL
model.flush();
return controller.sP_Get_GetLoginODCURL$ServerAction(callContext).then(function (value) {
sP_Get_GetLoginODCURLVar.value = value;
}).then(function () {
// Destination: /Login/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(((sP_Get_GetLoginODCURLVar.value.uRLOut + "?redirecturl=") + OS.BuiltinFunctions.encodeUrl(model.variables.redirecturlIn)), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
}

});
}).then(function () {
// Execute Action: AuthenticationValidations
model.flush();
return CISA_CWController.default.authenticationValidations$Action(OS.BuiltinFunctions.getBookmarkableURL(), ReactiveUtilitiesController.default.randomGUID$Action(callContext).gUIDOut, callContext).then(function (value) {
authenticationValidationsVar.value = value;
});
}).then(function () {
// Not valid session?
return OS.Flow.executeSequence(function () {
if((!(authenticationValidationsVar.value.validSessionOut))) {
// Username prefilled?
return OS.Flow.executeSequence(function () {
if((((model.variables.usernameIn) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set username and url
// username = If
model.variables.usernameIn = (((model.variables.usernameIn === "null")) ? ("") : (model.variables.usernameIn));
// Username_form = username
model.variables.username_formVar = model.variables.usernameIn;
// Execute Action: UserLoginValidations
model.flush();
return LoginController.default.userLoginValidations$Action(model.variables.usernameIn, callContext).then(function (value) {
userLoginValidationsVar.value = value;
}).then(function () {
// Not valid Email or user doesn't exist?
return OS.Flow.executeSequence(function () {
if(((!(userLoginValidationsVar.value.validEmailOut) || (userLoginValidationsVar.value.userLoginTypeIdOut === OS.BuiltinFunctions.nullIdentifier())))) {
// ShowLogin = True
model.variables.showLoginVar = true;
} else {
// InternalUser
return OS.Flow.executeSequence(function () {
if(((userLoginValidationsVar.value.userLoginTypeIdOut === LoginModel.staticEntities.userLoginType.internal))) {
// Execute Action: SP_Get_LoginTraditionalPath
model.flush();
return controller.sP_Get_LoginTraditionalPath$ServerAction(callContext).then(function (value) {
sP_Get_LoginTraditionalPathVar.value = value;
}).then(function () {
// AUX_RedirectURL = If
vars.value.aUX_RedirectURLVar = (((model.variables.redirecturlIn === "")) ? (sP_Get_LoginTraditionalPathVar.value.uRLOut) : (((sP_Get_LoginTraditionalPathVar.value.uRLOut + "?UserURL=") + model.variables.redirecturlIn)));
// Destination: /Login/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.aUX_RedirectURLVar, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// IdentityService?
return OS.Flow.executeSequence(function () {
if((((userLoginValidationsVar.value.userLoginTypeIdOut === LoginModel.staticEntities.userLoginType.identityService) && userLoginValidationsVar.value.isActiveOut))) {
// Execute Action: LoginSetup
model.flush();
return CISA_CWController.default.loginSetup$Action(model.variables.redirecturlIn, true, model.variables.username_formVar, callContext).then(function (value) {
loginSetupVar.value = value;
}).then(function () {
// URL = LoginSetup.IdentityService_LoginURL
model.variables.uRLVar = loginSetupVar.value.identityService_LoginURLOut;
controller.safeExecuteJSNode(Login_LoginFlow_Login_mvc_controller_OnInitialize_ClearingCookie_UseOS11LoginJS, "ClearingCookie_UseOS11Login", "OnInitialize", null, function ($parameters) {
}, {}, {});
// Destination: /Login/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(loginSetupVar.value.identityService_LoginURLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// IdentityService_Extranet?
if(((userLoginValidationsVar.value.userLoginTypeIdOut === LoginModel.staticEntities.userLoginType.identityService_Extranet))) {
// ShowLogin = True
model.variables.showLoginVar = true;
} else {
// ShowPassword = True
model.variables.showPasswordVar = true;
// ShowLogin = True
model.variables.showLoginVar = true;
}

}

});
}

});
}

});
});
} else {
// ShowLogin = True
model.variables.showLoginVar = true;
}

});
} else {
// Destination: /Login/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(((((model.variables.uRLVar) !== (""))) ? (model.variables.uRLVar) : (LoginClientVariables.getCustomerPortalURL())), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
});
};
Controller.registerVariableGroupType("Login.LoginFlow.Login.OnInitialize$vars", [{
name: "AUX_RedirectURL",
attrName: "aUX_RedirectURLVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("Login.LoginFlow.Login.OnInitialize$getUseOS11LoginJSResult", [{
name: "UseOS11Login",
attrName: "useOS11LoginOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return Login_LoginFlowController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return LoginController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, LoginLanguageResources);
});
define("Login.LoginFlow.Login.mvc$controller.OnInitialize.ClearingCookie_UseOS11LoginJS", [], function () {
return function ($actions, $roles, $public) {
//Clearing the cookie
var hostname = window.location.hostname;

hostname = hostname.replace('wwwdev.','');
hostname = hostname.replace('www.','');

document.cookie = 'UseOS11Login=; path=/; domain=' + hostname + '; max-age=0';
};
});
define("Login.LoginFlow.Login.mvc$controller.OnInitialize.GetUseOS11LoginJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var name = $parameters.Cookie + '=';
var ca = document.cookie.split(';');
for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        $parameters.UseOS11Login = c.substring(name.length, c.length);
        break;
    }
}

$parameters.UseOS11Login =  decodeURIComponent($parameters.UseOS11Login);
};
});

