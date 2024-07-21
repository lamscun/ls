define("Portal_Th.model$TextBooleanRecord", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var TextBooleanRecord = (function (_super) {
__extends(TextBooleanRecord, _super);
function TextBooleanRecord(defaults) {
_super.apply(this, arguments);
}
TextBooleanRecord.attributesToDeclare = function () {
return [
this.attr("Url", "urlAttr", "Url", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsAsync", "isAsyncAttr", "IsAsync", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextBooleanRecord._isAnonymousRecord = true;
TextBooleanRecord.UniqueId = "a4a5931b-b9e9-a86b-fb42-5189f5ac794a";
TextBooleanRecord.init();
return TextBooleanRecord;
})(OS.DataTypes.GenericRecord);
Portal_ThModel.TextBooleanRecord = TextBooleanRecord;

});
define("Portal_Th.model$TextBooleanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$TextBooleanRecord"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var TextBooleanRecordList = (function (_super) {
__extends(TextBooleanRecordList, _super);
function TextBooleanRecordList(defaults) {
_super.apply(this, arguments);
}
TextBooleanRecordList.itemType = Portal_ThModel.TextBooleanRecord;
return TextBooleanRecordList;
})(OS.DataTypes.GenericRecordList);
Portal_ThModel.TextBooleanRecordList = TextBooleanRecordList;

});
define("Portal_Th.model$IconographySizesRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var IconographySizesRec = (function (_super) {
__extends(IconographySizesRec, _super);
function IconographySizesRec(defaults) {
_super.apply(this, arguments);
}
IconographySizesRec.attributesToDeclare = function () {
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
IconographySizesRec.init();
return IconographySizesRec;
})(OS.DataTypes.GenericRecord);
Portal_ThModel.IconographySizesRec = IconographySizesRec;

});
define("Portal_Th.model$IconographySizesRecord", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$IconographySizesRec"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var IconographySizesRecord = (function (_super) {
__extends(IconographySizesRecord, _super);
function IconographySizesRecord(defaults) {
_super.apply(this, arguments);
}
IconographySizesRecord.attributesToDeclare = function () {
return [
this.attr("IconographySizes", "iconographySizesAttr", "IconographySizes", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_ThModel.IconographySizesRec());
}, true, Portal_ThModel.IconographySizesRec)
].concat(_super.attributesToDeclare.call(this));
};
IconographySizesRecord.fromStructure = function (str) {
return new IconographySizesRecord(new IconographySizesRecord.RecordClass({
iconographySizesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IconographySizesRecord._isAnonymousRecord = true;
IconographySizesRecord.UniqueId = "44302921-fc34-1b72-774f-b42e72ad45f5";
IconographySizesRecord.init();
return IconographySizesRecord;
})(OS.DataTypes.GenericRecord);
Portal_ThModel.IconographySizesRecord = IconographySizesRecord;

});
define("Portal_Th.model$IconographySizesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$IconographySizesRecord"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var IconographySizesRecordList = (function (_super) {
__extends(IconographySizesRecordList, _super);
function IconographySizesRecordList(defaults) {
_super.apply(this, arguments);
}
IconographySizesRecordList.itemType = Portal_ThModel.IconographySizesRecord;
return IconographySizesRecordList;
})(OS.DataTypes.GenericRecordList);
Portal_ThModel.IconographySizesRecordList = IconographySizesRecordList;

});
define("Portal_Th.model$IconographyRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var IconographyRec = (function (_super) {
__extends(IconographyRec, _super);
function IconographyRec(defaults) {
_super.apply(this, arguments);
}
IconographyRec.attributesToDeclare = function () {
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
IconographyRec.init();
return IconographyRec;
})(OS.DataTypes.GenericRecord);
Portal_ThModel.IconographyRec = IconographyRec;

});
define("Portal_Th.model$IconographyList", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$IconographyRec"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var IconographyList = (function (_super) {
__extends(IconographyList, _super);
function IconographyList(defaults) {
_super.apply(this, arguments);
}
IconographyList.itemType = Portal_ThModel.IconographyRec;
return IconographyList;
})(OS.DataTypes.GenericRecordList);
Portal_ThModel.IconographyList = IconographyList;

});
define("Portal_Th.model$IconographySizesList", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$IconographySizesRec"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var IconographySizesList = (function (_super) {
__extends(IconographySizesList, _super);
function IconographySizesList(defaults) {
_super.apply(this, arguments);
}
IconographySizesList.itemType = Portal_ThModel.IconographySizesRec;
return IconographySizesList;
})(OS.DataTypes.GenericRecordList);
Portal_ThModel.IconographySizesList = IconographySizesList;

});
define("Portal_Th.model$FetchHtmlElements_V2_OutRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var FetchHtmlElements_V2_OutRec = (function (_super) {
__extends(FetchHtmlElements_V2_OutRec, _super);
function FetchHtmlElements_V2_OutRec(defaults) {
_super.apply(this, arguments);
}
FetchHtmlElements_V2_OutRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("File", "fileAttr", "File", false, false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FetchHtmlElements_V2_OutRec.init();
return FetchHtmlElements_V2_OutRec;
})(OS.DataTypes.GenericRecord);
Portal_ThModel.FetchHtmlElements_V2_OutRec = FetchHtmlElements_V2_OutRec;

});
define("Portal_Th.model$FetchHtmlElements_V2_OutRecord", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$FetchHtmlElements_V2_OutRec"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var FetchHtmlElements_V2_OutRecord = (function (_super) {
__extends(FetchHtmlElements_V2_OutRecord, _super);
function FetchHtmlElements_V2_OutRecord(defaults) {
_super.apply(this, arguments);
}
FetchHtmlElements_V2_OutRecord.attributesToDeclare = function () {
return [
this.attr("FetchHtmlElements_V2_Out", "fetchHtmlElements_V2_OutAttr", "FetchHtmlElements_V2_Out", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_ThModel.FetchHtmlElements_V2_OutRec());
}, true, Portal_ThModel.FetchHtmlElements_V2_OutRec)
].concat(_super.attributesToDeclare.call(this));
};
FetchHtmlElements_V2_OutRecord.fromStructure = function (str) {
return new FetchHtmlElements_V2_OutRecord(new FetchHtmlElements_V2_OutRecord.RecordClass({
fetchHtmlElements_V2_OutAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FetchHtmlElements_V2_OutRecord._isAnonymousRecord = true;
FetchHtmlElements_V2_OutRecord.UniqueId = "7e69668b-5cf9-065b-4951-ba5b120e310e";
FetchHtmlElements_V2_OutRecord.init();
return FetchHtmlElements_V2_OutRecord;
})(OS.DataTypes.GenericRecord);
Portal_ThModel.FetchHtmlElements_V2_OutRecord = FetchHtmlElements_V2_OutRecord;

});
define("Portal_Th.model$FetchHtmlElements_V2_OutRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$FetchHtmlElements_V2_OutRecord"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var FetchHtmlElements_V2_OutRecordList = (function (_super) {
__extends(FetchHtmlElements_V2_OutRecordList, _super);
function FetchHtmlElements_V2_OutRecordList(defaults) {
_super.apply(this, arguments);
}
FetchHtmlElements_V2_OutRecordList.itemType = Portal_ThModel.FetchHtmlElements_V2_OutRecord;
return FetchHtmlElements_V2_OutRecordList;
})(OS.DataTypes.GenericRecordList);
Portal_ThModel.FetchHtmlElements_V2_OutRecordList = FetchHtmlElements_V2_OutRecordList;

});
define("Portal_Th.model$FetchHtmlElements_V2_OutList", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$FetchHtmlElements_V2_OutRec"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var FetchHtmlElements_V2_OutList = (function (_super) {
__extends(FetchHtmlElements_V2_OutList, _super);
function FetchHtmlElements_V2_OutList(defaults) {
_super.apply(this, arguments);
}
FetchHtmlElements_V2_OutList.itemType = Portal_ThModel.FetchHtmlElements_V2_OutRec;
return FetchHtmlElements_V2_OutList;
})(OS.DataTypes.GenericRecordList);
Portal_ThModel.FetchHtmlElements_V2_OutList = FetchHtmlElements_V2_OutList;

});
define("Portal_Th.model$IconographyRecord", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$IconographyRec"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var IconographyRecord = (function (_super) {
__extends(IconographyRecord, _super);
function IconographyRecord(defaults) {
_super.apply(this, arguments);
}
IconographyRecord.attributesToDeclare = function () {
return [
this.attr("Iconography", "iconographyAttr", "Iconography", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_ThModel.IconographyRec());
}, true, Portal_ThModel.IconographyRec)
].concat(_super.attributesToDeclare.call(this));
};
IconographyRecord.fromStructure = function (str) {
return new IconographyRecord(new IconographyRecord.RecordClass({
iconographyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IconographyRecord._isAnonymousRecord = true;
IconographyRecord.UniqueId = "efe661d2-a210-c0fa-1f73-789be199517a";
IconographyRecord.init();
return IconographyRecord;
})(OS.DataTypes.GenericRecord);
Portal_ThModel.IconographyRecord = IconographyRecord;

});
define("Portal_Th.model$IconographyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Th.model", "Portal_Th.model$IconographyRecord"], function (exports, OutSystems, Portal_ThModel) {
var OS = OutSystems.Internal;
var IconographyRecordList = (function (_super) {
__extends(IconographyRecordList, _super);
function IconographyRecordList(defaults) {
_super.apply(this, arguments);
}
IconographyRecordList.itemType = Portal_ThModel.IconographyRecord;
return IconographyRecordList;
})(OS.DataTypes.GenericRecordList);
Portal_ThModel.IconographyRecordList = IconographyRecordList;

});
define("Portal_Th.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Portal_ThModel = exports;
Object.defineProperty(Portal_ThModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["5d6f0105-61f3-494d-af39-756524d2454a"];
}
});

Portal_ThModel.staticEntities = {};
Portal_ThModel.staticEntities.iconography = {};
var getIconographyRecord = function (record) {
return Portal_ThModel.module.staticEntities["0fce6b9d-f7fb-4bd8-a518-5577195e6309"][record];
};
Object.defineProperty(Portal_ThModel.staticEntities.iconography, "legacymodernization", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("0983d34c-9d5e-4da2-8f13-b44479e72175"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "enterprisearchitecture", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("0a135a36-ce17-4162-bbc1-fdca9f7c9d8b"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "customerexperiences", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("0a162a22-53e8-433c-a967-efdefaec6332"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "fieldservices", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("0e1b534d-5765-4dc9-9701-5991c31aca8e"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "evaluationguide", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("0e7b22d0-3d75-4cbe-b584-c951c0cccdf6"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "applicationmonitoring", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("104eeccc-72fd-4e19-b770-94b907a11cda"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "platformoptimization", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("11dca843-6cfd-4a54-be9f-d999ebdd2b12"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "responsive", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("1345ef1a-dec1-4c52-a6b1-c7288d9d8daf"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "productupdates", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("13de3019-6d09-474a-a474-cb37ac721917"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "compliance", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("14dd726c-d0e8-47a5-b392-64a02d241389"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "multidevice", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("15f179ff-e6a9-4668-b1a3-cdbb70014cb0"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "tryforfree", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("177a37ea-71de-4e72-8b4d-2acd80617f18"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "outsystemscloud", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("18f34461-fcd3-4c2f-a423-714e5bf9a1b6"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "automaticrefactoring", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("19459e2c-b88d-4987-9fda-b7cb01d04ef7"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "deployment", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("207bafdb-7962-4fbc-bfc0-d519653b0bef"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "casemanagement", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("20fcbac8-8d4d-40ff-a014-08e903837b8b"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "documentation", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("2e611d71-77ec-41dd-ac58-ea8dc161e548"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "platformoverview", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("3265d029-c809-4ac0-9028-4328fe50e987"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "onpremises", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("35026054-1972-4965-820a-11cf750ad19f"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "training", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("3d56f1bc-29d8-47ee-8ded-7260dd90ae66"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "sapintegration", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("3ff30d04-9ad4-426f-9578-279977b8b1bf"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "user", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("4a3745a7-0c37-4bbe-9326-7ca3be6f47bb"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "icecreamcone", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("4b4cb83a-10e1-4a03-951b-b24cfd2b0804"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "inappfeedback", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("4c5ff813-ca9e-4c30-8c08-c88fa674e0e9"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "innovationgalleryicon", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("539089a1-c72e-455d-be8b-6856f73dbce1"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "setup", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("5529f765-789c-4f0f-bd78-e9841ba684c0"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "customerlove", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("60dc7e01-7c54-4032-889b-824dbcff2b39"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "resources", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("6b0c8c8c-2e69-4139-99dd-ee8400bb6351"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "lock", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("6c8b4184-4a92-4832-9a2c-9cc4cc21957e"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "time", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("75b65700-1e10-448a-acac-463720d4161e"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "reusableextensions", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("76e63c9c-8f08-4cc7-b633-88f0b639ae66"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "processautomation", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("783e0d3a-5c01-46d2-bb04-9f1ed6ecc07c"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "adhoc", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("79ff9e4f-5f04-4d76-9601-6f15758cd212"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "events", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("8273f86e-cadf-47f7-a778-1208c6d6ffd4"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "icecreampopsicle", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("846031b6-0773-4828-92c9-d1754cdbd1af"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "integrateeverything", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("847c217f-1738-4a4a-9fb1-76d546153f6b"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "fastspeed", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("8968e4a6-40bf-43cf-9ccb-1da4215242f7"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "security", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("91d72ed1-7f5c-424a-8120-3b917b99ed4b"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "growth", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("943f3b21-5f55-43c1-9e98-9383d9f714f9"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "talktoanexpert", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("95ab38ee-f03d-480d-9be0-2c4fddce63fc"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "nolimits", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("ab35ddd1-b288-4868-ae05-66d9620b506b"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "customercentric", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("acd224bc-54f0-4c8c-9710-c83ff0893d8c"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "efficiency", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("b6a85a2f-7db3-440c-89df-5f830c1dcde5"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "fullstack", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("b814f398-bb0e-406b-be4a-1cd0b9d24664"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "nowifi", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("b97c0c6a-5ddd-4180-b44d-c9c839ba0168"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "calendar", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("bc101f29-9849-435c-99d3-b7fe68169b1f"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "datadashboards", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("bfb03b10-0ce0-4969-a818-0798b724fc5d"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "usecase", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("c81c276f-4686-4ee8-87bc-a3c9d7aba221"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "pricingedition", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("c8c4d756-0f8b-4c33-a948-185cd9d140a4"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "phone", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("cae3ff30-4084-4422-bf9d-76cb4eb5213d"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "oneclickpublish", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("cc5953b1-9041-45c4-90fd-a595de83f5d5"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "continuousdeployment", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("cebefab5-d014-4e04-b20c-b26d910f3a12"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "hybridcloud", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("d3c205d6-326c-43ac-9516-a3bdcca1cfb4"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "userexperience", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("db7c2671-17e9-4648-b917-cac7a919a4fd"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "scalability", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("e06fb9aa-1749-4ba3-a0b6-bae25c3b39fa"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "mobilemadeeasy", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("e0a30c15-6e5b-4e65-9dcf-7e1086701b43"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "highcode", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("e8c01e59-e2f5-4a80-925c-3c6d1c40527f"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "scheduleademo", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("e931e245-aed5-4870-9654-31bc0273f763"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "itbusinesscolaboration", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("ea2762c6-74ea-41d6-acf0-a124156ad3be"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "industry", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("ea3cec13-f638-4b01-a009-c3468d4e33ae"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "ideias", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("eb114d74-07b5-4d2f-8146-35a5adf38138"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "privatecloud", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("ec3a42c9-d13a-4c23-b026-f4dcbff156e3"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "personas", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("f2d58c60-2933-4c62-babf-072f78e9f1f7"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "uxui", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("f3c12f05-3dd6-4095-99d5-7df417686e4e"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "reducecost", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("f52d4d77-cd25-4255-babe-1c5914feb82b"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "users", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("f786a5fd-9c8e-4877-b2ff-eb7dc1f8d15d"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconography, "casestudypartners", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographyRecord("fc339d9b-8bb4-4d63-8577-535d1bdea378"));
}
});

Portal_ThModel.staticEntities.iconographySizes = {};
var getIconographySizesRecord = function (record) {
return Portal_ThModel.module.staticEntities["bd5c3138-fffd-4729-bf00-3f7a04d147a2"][record];
};
Object.defineProperty(Portal_ThModel.staticEntities.iconographySizes, "m", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographySizesRecord("50bf8260-c14b-4cac-b5ab-e98ae49be00d"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconographySizes, "l", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographySizesRecord("a42c1240-1ad4-4e22-96dd-c0ff65f9b434"));
}
});

Object.defineProperty(Portal_ThModel.staticEntities.iconographySizes, "s", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getIconographySizesRecord("b214d16a-a136-447f-bd02-ca6ffe80d88c"));
}
});

});
