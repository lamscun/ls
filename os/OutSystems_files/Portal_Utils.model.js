define("Portal_Utils.model$StatusCodeRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model"], function (exports, OutSystems, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var StatusCodeRec = (function (_super) {
__extends(StatusCodeRec, _super);
function StatusCodeRec(defaults) {
_super.apply(this, arguments);
}
StatusCodeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StatusCodeRec.init();
return StatusCodeRec;
})(OS.DataTypes.GenericRecord);
Portal_UtilsModel.StatusCodeRec = StatusCodeRec;

});
define("Portal_Utils.model$ResourceResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model"], function (exports, OutSystems, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var ResourceResponseRec = (function (_super) {
__extends(ResourceResponseRec, _super);
function ResourceResponseRec(defaults) {
_super.apply(this, arguments);
}
ResourceResponseRec.attributesToDeclare = function () {
return [
this.attr("ResourceId", "resourceIdAttr", "ResourceId", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ResourceTypeId", "resourceTypeIdAttr", "ResourceTypeId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Data", "dataAttr", "Data", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ResourceResponseRec.init();
return ResourceResponseRec;
})(OS.DataTypes.GenericRecord);
Portal_UtilsModel.ResourceResponseRec = ResourceResponseRec;

});
define("Portal_Utils.model$TimerTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model"], function (exports, OutSystems, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var TimerTypeRec = (function (_super) {
__extends(TimerTypeRec, _super);
function TimerTypeRec(defaults) {
_super.apply(this, arguments);
}
TimerTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TimerTypeRec.init();
return TimerTypeRec;
})(OS.DataTypes.GenericRecord);
Portal_UtilsModel.TimerTypeRec = TimerTypeRec;

});
define("Portal_Utils.model$ErrorMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model"], function (exports, OutSystems, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var ErrorMessageRec = (function (_super) {
__extends(ErrorMessageRec, _super);
function ErrorMessageRec(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("HttpResponseCode", "httpResponseCodeAttr", "HttpResponseCode", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRec.init();
return ErrorMessageRec;
})(OS.DataTypes.GenericRecord);
Portal_UtilsModel.ErrorMessageRec = ErrorMessageRec;

});
define("Portal_Utils.model$ErrorRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model"], function (exports, OutSystems, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var ErrorRec = (function (_super) {
__extends(ErrorRec, _super);
function ErrorRec(defaults) {
_super.apply(this, arguments);
}
ErrorRec.attributesToDeclare = function () {
return [
this.attr("HttpCode", "httpCodeAttr", "HttpCode", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRec.init();
return ErrorRec;
})(OS.DataTypes.GenericRecord);
Portal_UtilsModel.ErrorRec = ErrorRec;

});
define("Portal_Utils.model$ResourceTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model"], function (exports, OutSystems, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var ResourceTypeRec = (function (_super) {
__extends(ResourceTypeRec, _super);
function ResourceTypeRec(defaults) {
_super.apply(this, arguments);
}
ResourceTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ResourceTypeRec.init();
return ResourceTypeRec;
})(OS.DataTypes.GenericRecord);
Portal_UtilsModel.ResourceTypeRec = ResourceTypeRec;

});
define("Portal_Utils.model$TimerControlsRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model"], function (exports, OutSystems, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var TimerControlsRec = (function (_super) {
__extends(TimerControlsRec, _super);
function TimerControlsRec(defaults) {
_super.apply(this, arguments);
}
TimerControlsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TimerTyped", "timerTypedAttr", "TimerTyped", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("LastRecordProcessed", "lastRecordProcessedAttr", "LastRecordProcessed", false, false, OS.Types.Text, function () {
return "0";
}, true), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TimerControlsRec.init();
return TimerControlsRec;
})(OS.DataTypes.GenericRecord);
Portal_UtilsModel.TimerControlsRec = TimerControlsRec;

});
define("Portal_Utils.model$ResourceRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model"], function (exports, OutSystems, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var ResourceRec = (function (_super) {
__extends(ResourceRec, _super);
function ResourceRec(defaults) {
_super.apply(this, arguments);
}
ResourceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ResourceTypeId", "resourceTypeIdAttr", "ResourceTypeId", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ResourceData", "resourceDataAttr", "ResourceData", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TimeStamp", "timeStampAttr", "TimeStamp", false, false, OS.Types.DateTime, function () {
return OS.BuiltinFunctions.currDateTime();
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.Types.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ResourceRec.init();
return ResourceRec;
})(OS.DataTypes.GenericRecord);
Portal_UtilsModel.ResourceRec = ResourceRec;

});
define("Portal_Utils.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Portal_UtilsModel = exports;
});
