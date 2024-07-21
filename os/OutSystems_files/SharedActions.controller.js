define("SharedActions.controller$LoadGTMResourceScript", ["exports", "OutSystems/ClientRuntime/Main", "SharedActions.model", "SharedActions.controller", "ReactiveUtilities.controller", "SharedActions.controller$LoadGTMResourceScript.LoadScriptJS", "SharedActions.clientVariables", "SharedActions.model$ErrorResourceResponseListRecord", "SharedActions.controller$ServerAction.GetGTMResource", "ReactiveUtilities.controller$RandomGUID", "SharedActions.referencesHealth", "SharedActions.referencesHealth$ReactiveUtilities", "SharedActions.model$ResourceResponseList"], function (exports, OutSystems, SharedActionsModel, SharedActionsController, ReactiveUtilitiesController, SharedActions_controller_LoadGTMResourceScript_LoadScriptJS, SharedActionsClientVariables) {
var OS = OutSystems.Internal;
SharedActionsController.default.loadGTMResourceScript$Action = function (callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SharedActions.LoadGTMResourceScript$vars"))());
var getGTMResourceVar = new OS.DataTypes.VariableHolder();
var randomGUIDVar = new OS.DataTypes.VariableHolder();
var jS_URLsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: RandomGUID
randomGUIDVar.value = ReactiveUtilitiesController.default.randomGUID$Action(callContext);

// Execute Action: GetGTMResource
return controller.getGTMResource$ServerAction(randomGUIDVar.value.gUIDOut, callContext).then(function (value) {
getGTMResourceVar.value = value;
}).then(function () {
// UrlList = GetGTMResource.response.ResourceResponse
vars.value.urlListVar = OS.DataConversion.JSConversions.typeConvertRecordList(getGTMResourceVar.value.responseOut.resourceResponseAttr, new OS.DataTypes.TextList(), function (source, target) {
target = source.dataAttr;
return target;
});
// JSON Serialize: JS_URLs
jS_URLsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.urlListVar, true, false, OS.Types.Text);
controller.safeExecuteJSNode(SharedActions_controller_LoadGTMResourceScript_LoadScriptJS, "LoadScript", "LoadGTMResourceScript", {
JS_URLs: OS.DataConversion.JSNodeParamConverter.to(jS_URLsVar.value.jSONOut, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
});
}).then(function () {
return ;
});
};
var controller = SharedActionsController.default;
SharedActionsController.default.constructor.registerVariableGroupType("SharedActions.LoadGTMResourceScript$vars", [{
name: "UrlList",
attrName: "urlListVar",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
SharedActionsController.default.clientActionProxies.loadGTMResourceScript$Action = function () {
return controller.executeActionInsideJSNode(SharedActionsController.default.loadGTMResourceScript$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("SharedActions.controller$LoadGTMResourceScript.LoadScriptJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var allJS = JSON.parse($parameters.JS_URLs);
var totalCountAssets =  allJS.length;
window.all_Assets_Loaded = 0;


var checkLoaded = function() {
    window.all_Assets_Loaded += 1;

        if (window.all_Assets_Loaded === totalCountAssets ) {
             window.is_loaded = true;
            //window.document.dispatchEvent(window.fetchedEvt);
        }
        
}

allJS.forEach(function (entry, index) {
    var js_Script = document.createElement('script');
    js_Script.addEventListener('load', checkLoaded);
    js_Script.setAttribute('src', entry);
    js_Script.setAttribute('data-order', index);
    document.head.appendChild(js_Script);
});

};
});

define("SharedActions.controller$LoadResourcesScripts", ["exports", "OutSystems/ClientRuntime/Main", "SharedActions.model", "SharedActions.controller", "ReactiveUtilities.controller", "SharedActions.controller$LoadResourcesScripts.LoadScriptJS", "SharedActions.clientVariables", "SharedActions.model$ErrorResourceResponseListRecord", "SharedActions.controller$ServerAction.GetAllResources", "ReactiveUtilities.controller$RandomGUID", "SharedActions.referencesHealth", "SharedActions.referencesHealth$ReactiveUtilities", "SharedActions.model$ResourceResponseList"], function (exports, OutSystems, SharedActionsModel, SharedActionsController, ReactiveUtilitiesController, SharedActions_controller_LoadResourcesScripts_LoadScriptJS, SharedActionsClientVariables) {
var OS = OutSystems.Internal;
SharedActionsController.default.loadResourcesScripts$Action = function (callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SharedActions.LoadResourcesScripts$vars"))());
var getAllResourcesVar = new OS.DataTypes.VariableHolder();
var randomGUIDVar = new OS.DataTypes.VariableHolder();
var jS_URLsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: RandomGUID
randomGUIDVar.value = ReactiveUtilitiesController.default.randomGUID$Action(callContext);

// Execute Action: GetAllResources
return controller.getAllResources$ServerAction(randomGUIDVar.value.gUIDOut, callContext).then(function (value) {
getAllResourcesVar.value = value;
}).then(function () {
// UrlList = GetAllResources.response.ResourceResponse
vars.value.urlListVar = OS.DataConversion.JSConversions.typeConvertRecordList(getAllResourcesVar.value.responseOut.resourceResponseAttr, new OS.DataTypes.TextList(), function (source, target) {
target = source.dataAttr;
return target;
});
// JSON Serialize: JS_URLs
jS_URLsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.urlListVar, true, false, OS.Types.Text);
controller.safeExecuteJSNode(SharedActions_controller_LoadResourcesScripts_LoadScriptJS, "LoadScript", "LoadResourcesScripts", {
JS_URLs: OS.DataConversion.JSNodeParamConverter.to(jS_URLsVar.value.jSONOut, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
});
}).then(function () {
return ;
});
};
var controller = SharedActionsController.default;
SharedActionsController.default.constructor.registerVariableGroupType("SharedActions.LoadResourcesScripts$vars", [{
name: "UrlList",
attrName: "urlListVar",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
SharedActionsController.default.clientActionProxies.loadResourcesScripts$Action = function () {
return controller.executeActionInsideJSNode(SharedActionsController.default.loadResourcesScripts$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("SharedActions.controller$LoadResourcesScripts.LoadScriptJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var allJS = JSON.parse($parameters.JS_URLs);
var totalCountAssets =  allJS.length;
window.all_Assets_Loaded = 0;


var checkLoaded = function() {
    window.all_Assets_Loaded += 1;

        if (window.all_Assets_Loaded === totalCountAssets ) {
             window.is_loaded = true;
            //window.document.dispatchEvent(window.fetchedEvt);
        }
        
}

allJS.forEach(function (entry, index) {
    var js_Script = document.createElement('script');
    js_Script.addEventListener('load', checkLoaded);
    js_Script.setAttribute('src', entry);
    js_Script.setAttribute('data-order', index);
    document.head.appendChild(js_Script);
});

};
});

define("SharedActions.controller$ServerAction.GetAllResources", ["exports", "OutSystems/ClientRuntime/Main", "SharedActions.model", "SharedActions.controller", "SharedActions.model$ErrorResourceResponseListRecord"], function (exports, OutSystems, SharedActionsModel, SharedActionsController) {
var OS = OutSystems.Internal;
SharedActionsController.default.getAllResources$ServerAction = function (traceIdIn, callContext) {
var controller = this.controller;
var inputs = {
TraceId: OS.DataConversion.ServerDataConverter.to(traceIdIn, OS.Types.Text)
};
return controller.callServerAction("GetAllResources", "screenservices/SharedActions/ServiceAPIGetAllResources", "IYkPLAzNO_bX7ijOlbhRlA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("SharedActions$ServiceAPIGetAllResources"))();
executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.response, SharedActionsModel.ErrorResourceResponseListRecord);
return executeServerActionResult;
});
};
SharedActionsController.default.constructor.registerVariableGroupType("SharedActions$ServiceAPIGetAllResources", [{
name: "response",
attrName: "responseOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new SharedActionsModel.ErrorResourceResponseListRecord();
},
complexType: SharedActionsModel.ErrorResourceResponseListRecord
}]);
});
define("SharedActions.controller$ServerAction.GetGTMResource", ["exports", "OutSystems/ClientRuntime/Main", "SharedActions.model", "SharedActions.controller", "SharedActions.model$ErrorResourceResponseListRecord"], function (exports, OutSystems, SharedActionsModel, SharedActionsController) {
var OS = OutSystems.Internal;
SharedActionsController.default.getGTMResource$ServerAction = function (traceIdIn, callContext) {
var controller = this.controller;
var inputs = {
TraceId: OS.DataConversion.ServerDataConverter.to(traceIdIn, OS.Types.Text)
};
return controller.callServerAction("GetGTMResource", "screenservices/SharedActions/ServiceAPIGetGTMResource", "wY+AEU3LL6lDRfCuycv1qA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("SharedActions$ServiceAPIGetGTMResource"))();
executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.response, SharedActionsModel.ErrorResourceResponseListRecord);
return executeServerActionResult;
});
};
SharedActionsController.default.constructor.registerVariableGroupType("SharedActions$ServiceAPIGetGTMResource", [{
name: "response",
attrName: "responseOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new SharedActionsModel.ErrorResourceResponseListRecord();
},
complexType: SharedActionsModel.ErrorResourceResponseListRecord
}]);
});
define("SharedActions.controller$ServerAction.User_GetUnifiedLoginUrl", ["exports", "OutSystems/ClientRuntime/Main", "SharedActions.model", "SharedActions.controller"], function (exports, OutSystems, SharedActionsModel, SharedActionsController) {
var OS = OutSystems.Internal;
SharedActionsController.default.user_GetUnifiedLoginUrl$ServerAction = function (originalUrlIn, toolNameIn, callContext) {
var controller = this.controller;
var inputs = {
OriginalUrl: OS.DataConversion.ServerDataConverter.to(originalUrlIn, OS.Types.Text),
ToolName: OS.DataConversion.ServerDataConverter.to(toolNameIn, OS.Types.Text)
};
return controller.callServerAction("User_GetUnifiedLoginUrl", "screenservices/SharedActions/ActionUser_GetUnifiedLoginUrl", "cttvMQpQoQ_vXqICRkdvyg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("SharedActions$rssespaceusers_ActionUser_GetUnifiedLoginUrl"))();
executeServerActionResult.urlOut = OS.DataConversion.ServerDataConverter.from(outputs.Url, OS.Types.Text);
return executeServerActionResult;
});
};
SharedActionsController.default.constructor.registerVariableGroupType("SharedActions$rssespaceusers_ActionUser_GetUnifiedLoginUrl", [{
name: "Url",
attrName: "urlOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("SharedActions.controller", ["exports", "OutSystems/ClientRuntime/Main", "SharedActions.model"], function (exports, OutSystems, SharedActionsModel) {
var OS = OutSystems.Internal;
var SharedActionsController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return SharedActionsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
SharedActionsController.default = new Controller();
});
