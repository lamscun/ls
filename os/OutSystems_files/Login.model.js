define("Login.model$TextText1Record", ["exports", "OutSystems/ClientRuntime/Main", "Login.model"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextText1Record = (function (_super) {
__extends(TextText1Record, _super);
function TextText1Record(defaults) {
_super.apply(this, arguments);
}
TextText1Record.attributesToDeclare = function () {
return [
this.attr("Key", "keyAttr", "Key", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextText1Record._isAnonymousRecord = true;
TextText1Record.UniqueId = "2825ecd7-c0cd-fd81-3512-8e95c9d6dd61";
TextText1Record.init();
return TextText1Record;
})(OS.DataTypes.GenericRecord);
LoginModel.TextText1Record = TextText1Record;

});
define("Login.model$TextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$TextText1Record"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextRecordList = (function (_super) {
__extends(TextTextRecordList, _super);
function TextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextRecordList.itemType = LoginModel.TextText1Record;
return TextTextRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.TextTextRecordList = TextTextRecordList;

});
define("Login.model$Bot_profileRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$Bot_profileRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var Bot_profileRecord = (function (_super) {
__extends(Bot_profileRecord, _super);
function Bot_profileRecord(defaults) {
_super.apply(this, arguments);
}
Bot_profileRecord.attributesToDeclare = function () {
return [
this.attr("Bot_profile", "bot_profileAttr", "Bot_profile", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.Bot_profileRec());
}, true, Slack_ISModel.Bot_profileRec)
].concat(_super.attributesToDeclare.call(this));
};
Bot_profileRecord.fromStructure = function (str) {
return new Bot_profileRecord(new Bot_profileRecord.RecordClass({
bot_profileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Bot_profileRecord._isAnonymousRecord = true;
Bot_profileRecord.UniqueId = "00980545-0f0a-361e-7333-a38e56829fb4";
Bot_profileRecord.init();
return Bot_profileRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.Bot_profileRecord = Bot_profileRecord;

});
define("Login.model$ResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "SNSPublisher_RnD_IS.model", "Login.model", "SNSPublisher_RnD_IS.model$ResponseRec", "Login.referencesHealth", "Login.referencesHealth$SNSPublisher_RnD_IS"], function (exports, OutSystems, SNSPublisher_RnD_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var ResponseRecord = (function (_super) {
__extends(ResponseRecord, _super);
function ResponseRecord(defaults) {
_super.apply(this, arguments);
}
ResponseRecord.attributesToDeclare = function () {
return [
this.attr("Response", "responseAttr", "Response", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new SNSPublisher_RnD_ISModel.ResponseRec());
}, true, SNSPublisher_RnD_ISModel.ResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
ResponseRecord.fromStructure = function (str) {
return new ResponseRecord(new ResponseRecord.RecordClass({
responseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResponseRecord._isAnonymousRecord = true;
ResponseRecord.UniqueId = "b7ee0d77-6c43-73a6-85f1-5f6728371790";
ResponseRecord.init();
return ResponseRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.ResponseRecord = ResponseRecord;

});
define("Login.model$ResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$ResponseRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var ResponseRecordList = (function (_super) {
__extends(ResponseRecordList, _super);
function ResponseRecordList(defaults) {
_super.apply(this, arguments);
}
ResponseRecordList.itemType = LoginModel.ResponseRecord;
return ResponseRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.ResponseRecordList = ResponseRecordList;

});
define("Login.model$SegmentEventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Events_Lib.model", "Login.model", "Events_Lib.model$SegmentEventsRec", "Login.referencesHealth", "Login.referencesHealth$Events_Lib"], function (exports, OutSystems, Events_LibModel, LoginModel) {
var OS = OutSystems.Internal;
var SegmentEventsRecord = (function (_super) {
__extends(SegmentEventsRecord, _super);
function SegmentEventsRecord(defaults) {
_super.apply(this, arguments);
}
SegmentEventsRecord.attributesToDeclare = function () {
return [
this.attr("SegmentEvents", "segmentEventsAttr", "SegmentEvents", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Events_LibModel.SegmentEventsRec());
}, true, Events_LibModel.SegmentEventsRec)
].concat(_super.attributesToDeclare.call(this));
};
SegmentEventsRecord.fromStructure = function (str) {
return new SegmentEventsRecord(new SegmentEventsRecord.RecordClass({
segmentEventsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SegmentEventsRecord._isAnonymousRecord = true;
SegmentEventsRecord.UniqueId = "037821b9-7c53-d4b5-db47-7d155c83747a";
SegmentEventsRecord.init();
return SegmentEventsRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.SegmentEventsRecord = SegmentEventsRecord;

});
define("Login.model$TextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Login.model"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextRecord = (function (_super) {
__extends(TextTextRecord, _super);
function TextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextRecord.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("value", "valueAttr", "value", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextRecord._isAnonymousRecord = true;
TextTextRecord.UniqueId = "03f34009-4a4e-5e36-74ef-9f36938dcf71";
TextTextRecord.init();
return TextTextRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.TextTextRecord = TextTextRecord;

});
define("Login.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model", "Login.model", "Portal_Utils.model$ErrorMessageRec", "Login.referencesHealth", "Login.referencesHealth$Portal_Utils"], function (exports, OutSystems, Portal_UtilsModel, LoginModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = Portal_UtilsModel.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
LoginModel.ErrorMessageList = ErrorMessageList;

});
define("Login.model$Bot_profileList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$Bot_profileRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var Bot_profileList = (function (_super) {
__extends(Bot_profileList, _super);
function Bot_profileList(defaults) {
_super.apply(this, arguments);
}
Bot_profileList.itemType = Slack_ISModel.Bot_profileRec;
return Bot_profileList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Bot_profileList = Bot_profileList;

});
define("Login.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model", "Login.model", "Portal_Utils.model$ErrorMessageRec", "Login.referencesHealth", "Login.referencesHealth$Portal_Utils"], function (exports, OutSystems, Portal_UtilsModel, LoginModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecord = (function (_super) {
__extends(ErrorMessageRecord, _super);
function ErrorMessageRecord(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecord.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_UtilsModel.ErrorMessageRec());
}, true, Portal_UtilsModel.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRecord.fromStructure = function (str) {
return new ErrorMessageRecord(new ErrorMessageRecord.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessageRecord._isAnonymousRecord = true;
ErrorMessageRecord.UniqueId = "1d30dbb8-0819-22b3-02a9-9d9ecd1e3e67";
ErrorMessageRecord.init();
return ErrorMessageRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("Login.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$ErrorMessageRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = LoginModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("Login.model$fieldsList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$fieldsRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var fieldsList = (function (_super) {
__extends(fieldsList, _super);
function fieldsList(defaults) {
_super.apply(this, arguments);
}
fieldsList.itemType = Slack_ISModel.fieldsRec;
return fieldsList;
})(OS.DataTypes.GenericRecordList);
LoginModel.fieldsList = fieldsList;

});
define("Login.model$UserDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Login.model"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserDetailsRec = (function (_super) {
__extends(UserDetailsRec, _super);
function UserDetailsRec(defaults) {
_super.apply(this, arguments);
}
UserDetailsRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.Types.Email, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("LastLogin", "lastLoginAttr", "LastLogin", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Creation_Date", "creation_DateAttr", "Creation_Date", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsConfirmed", "isConfirmedAttr", "IsConfirmed", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("EmailSentOn", "emailSentOnAttr", "EmailSentOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UserLoginTypeId", "userLoginTypeIdAttr", "UserLoginTypeId", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("UserConfirmationToken", "userConfirmationTokenAttr", "UserConfirmationToken", false, false, OS.Types.Email, function () {
return "";
}, true), 
this.attr("IdentityServiceUserGUID", "identityServiceUserGUIDAttr", "IdentityServiceUserGUID", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MarketingComAcceptanceStatus", "marketingComAcceptanceStatusAttr", "MarketingComAcceptanceStatus", false, false, OS.Types.Integer, function () {
return OS.BuiltinFunctions.integerToIdentifier(1);
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("StateCode", "stateCodeAttr", "StateCode", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Company", "companyAttr", "Company", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Uc_LandingPage", "uc_LandingPageAttr", "Uc_LandingPage", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("HasCustomerPortal", "hasCustomerPortalAttr", "HasCustomerPortal", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("OldExtranetUserId", "oldExtranetUserIdAttr", "OldExtranetUserId", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserConfirmationGUID", "userConfirmationGUIDAttr", "UserConfirmationGUID", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserDetailsRec.init();
return UserDetailsRec;
})(OS.DataTypes.GenericRecord);
LoginModel.UserDetailsRec = UserDetailsRec;

});
define("Login.model$UserDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserDetailsRec"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserDetailsRecord = (function (_super) {
__extends(UserDetailsRecord, _super);
function UserDetailsRecord(defaults) {
_super.apply(this, arguments);
}
UserDetailsRecord.attributesToDeclare = function () {
return [
this.attr("UserDetails", "userDetailsAttr", "UserDetails", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LoginModel.UserDetailsRec());
}, true, LoginModel.UserDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
UserDetailsRecord.fromStructure = function (str) {
return new UserDetailsRecord(new UserDetailsRecord.RecordClass({
userDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserDetailsRecord._isAnonymousRecord = true;
UserDetailsRecord.UniqueId = "0d593202-a323-f740-19bd-378f4ef1908b";
UserDetailsRecord.init();
return UserDetailsRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UserDetailsRecord = UserDetailsRecord;

});
define("Login.model$IconRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$IconRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var IconRecord = (function (_super) {
__extends(IconRecord, _super);
function IconRecord(defaults) {
_super.apply(this, arguments);
}
IconRecord.attributesToDeclare = function () {
return [
this.attr("Icon", "iconAttr", "Icon", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.IconRec());
}, true, Slack_ISModel.IconRec)
].concat(_super.attributesToDeclare.call(this));
};
IconRecord.fromStructure = function (str) {
return new IconRecord(new IconRecord.RecordClass({
iconAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IconRecord._isAnonymousRecord = true;
IconRecord.UniqueId = "0f4c6ee3-0afe-9fc0-d535-19f5b646cb31";
IconRecord.init();
return IconRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.IconRecord = IconRecord;

});
define("Login.model$actionsList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$actionsRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var actionsList = (function (_super) {
__extends(actionsList, _super);
function actionsList(defaults) {
_super.apply(this, arguments);
}
actionsList.itemType = Slack_ISModel.actionsRec;
return actionsList;
})(OS.DataTypes.GenericRecordList);
LoginModel.actionsList = actionsList;

});
define("Login.model$attachmentsList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$attachmentsRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var attachmentsList = (function (_super) {
__extends(attachmentsList, _super);
function attachmentsList(defaults) {
_super.apply(this, arguments);
}
attachmentsList.itemType = Slack_ISModel.attachmentsRec;
return attachmentsList;
})(OS.DataTypes.GenericRecordList);
LoginModel.attachmentsList = attachmentsList;

});
define("Login.model$", ["exports", "OutSystems/ClientRuntime/Main", "Login.model"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.Types.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
LoginModel.TextList = TextList;

});
define("Login.model$PostChatResponseList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$PostChatResponseRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var PostChatResponseList = (function (_super) {
__extends(PostChatResponseList, _super);
function PostChatResponseList(defaults) {
_super.apply(this, arguments);
}
PostChatResponseList.itemType = Slack_ISModel.PostChatResponseRec;
return PostChatResponseList;
})(OS.DataTypes.GenericRecordList);
LoginModel.PostChatResponseList = PostChatResponseList;

});
define("Login.model$textRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$textRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var textRecord = (function (_super) {
__extends(textRecord, _super);
function textRecord(defaults) {
_super.apply(this, arguments);
}
textRecord.attributesToDeclare = function () {
return [
this.attr("text", "textAttr", "text", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.textRec());
}, true, Slack_ISModel.textRec)
].concat(_super.attributesToDeclare.call(this));
};
textRecord.fromStructure = function (str) {
return new textRecord(new textRecord.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
textRecord._isAnonymousRecord = true;
textRecord.UniqueId = "3fe23c59-53b9-7631-1548-e0c8cf3acc9d";
textRecord.init();
return textRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.textRecord = textRecord;

});
define("Login.model$textRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$textRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var textRecordList = (function (_super) {
__extends(textRecordList, _super);
function textRecordList(defaults) {
_super.apply(this, arguments);
}
textRecordList.itemType = LoginModel.textRecord;
return textRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.textRecordList = textRecordList;

});
define("Login.model$AttributeList", ["exports", "OutSystems/ClientRuntime/Main", "Digital_IS.model", "Login.model", "Digital_IS.model$AttributeRec", "Login.referencesHealth", "Login.referencesHealth$Digital_IS"], function (exports, OutSystems, Digital_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var AttributeList = (function (_super) {
__extends(AttributeList, _super);
function AttributeList(defaults) {
_super.apply(this, arguments);
}
AttributeList.itemType = Digital_ISModel.AttributeRec;
return AttributeList;
})(OS.DataTypes.GenericRecordList);
LoginModel.AttributeList = AttributeList;

});
define("Login.model$UserUserConfirmationUserPasswordRecoveryRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "User_CS.model", "Login.model", "ServiceCenter.model$UserRec", "Login.referencesHealth", "Login.referencesHealth$ServiceCenter", "User_CS.model$UserConfirmationRec", "Login.referencesHealth$User_CS", "User_CS.model$UserPasswordRecoveryRec"], function (exports, OutSystems, ServiceCenterModel, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var UserUserConfirmationUserPasswordRecoveryRecord = (function (_super) {
__extends(UserUserConfirmationUserPasswordRecoveryRecord, _super);
function UserUserConfirmationUserPasswordRecoveryRecord(defaults) {
_super.apply(this, arguments);
}
UserUserConfirmationUserPasswordRecoveryRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec), 
this.attr("UserConfirmation", "userConfirmationAttr", "UserConfirmation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new User_CSModel.UserConfirmationRec());
}, true, User_CSModel.UserConfirmationRec), 
this.attr("UserPasswordRecovery", "userPasswordRecoveryAttr", "UserPasswordRecovery", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new User_CSModel.UserPasswordRecoveryRec());
}, true, User_CSModel.UserPasswordRecoveryRec)
].concat(_super.attributesToDeclare.call(this));
};
UserUserConfirmationUserPasswordRecoveryRecord._isAnonymousRecord = true;
UserUserConfirmationUserPasswordRecoveryRecord.UniqueId = "16eed2ff-b0f9-6ac9-ffa6-f30603ac1d6a";
UserUserConfirmationUserPasswordRecoveryRecord.init();
return UserUserConfirmationUserPasswordRecoveryRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UserUserConfirmationUserPasswordRecoveryRecord = UserUserConfirmationUserPasswordRecoveryRecord;

});
define("Login.model$UserUserPasswordRecoveryRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "User_CS.model", "Login.model", "ServiceCenter.model$UserRec", "Login.referencesHealth", "Login.referencesHealth$ServiceCenter", "User_CS.model$UserPasswordRecoveryRec", "Login.referencesHealth$User_CS"], function (exports, OutSystems, ServiceCenterModel, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var UserUserPasswordRecoveryRecord = (function (_super) {
__extends(UserUserPasswordRecoveryRecord, _super);
function UserUserPasswordRecoveryRecord(defaults) {
_super.apply(this, arguments);
}
UserUserPasswordRecoveryRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec), 
this.attr("UserPasswordRecovery", "userPasswordRecoveryAttr", "UserPasswordRecovery", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new User_CSModel.UserPasswordRecoveryRec());
}, true, User_CSModel.UserPasswordRecoveryRec)
].concat(_super.attributesToDeclare.call(this));
};
UserUserPasswordRecoveryRecord._isAnonymousRecord = true;
UserUserPasswordRecoveryRecord.UniqueId = "1758792d-7c3d-bc21-5b7a-a84d6916ece1";
UserUserPasswordRecoveryRecord.init();
return UserUserPasswordRecoveryRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UserUserPasswordRecoveryRecord = UserUserPasswordRecoveryRecord;

});
define("Login.model$MessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$MessageRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var MessageRecord = (function (_super) {
__extends(MessageRecord, _super);
function MessageRecord(defaults) {
_super.apply(this, arguments);
}
MessageRecord.attributesToDeclare = function () {
return [
this.attr("Message", "messageAttr", "Message", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.MessageRec());
}, true, Slack_ISModel.MessageRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageRecord.fromStructure = function (str) {
return new MessageRecord(new MessageRecord.RecordClass({
messageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageRecord._isAnonymousRecord = true;
MessageRecord.UniqueId = "739bdd9e-ea86-5f15-0b6b-efe4f02c0237";
MessageRecord.init();
return MessageRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.MessageRecord = MessageRecord;

});
define("Login.model$MessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$MessageRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var MessageRecordList = (function (_super) {
__extends(MessageRecordList, _super);
function MessageRecordList(defaults) {
_super.apply(this, arguments);
}
MessageRecordList.itemType = LoginModel.MessageRecord;
return MessageRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.MessageRecordList = MessageRecordList;

});
define("Login.model$UserConfirmationRecord", ["exports", "OutSystems/ClientRuntime/Main", "User_CS.model", "Login.model", "User_CS.model$UserConfirmationRec", "Login.referencesHealth", "Login.referencesHealth$User_CS"], function (exports, OutSystems, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var UserConfirmationRecord = (function (_super) {
__extends(UserConfirmationRecord, _super);
function UserConfirmationRecord(defaults) {
_super.apply(this, arguments);
}
UserConfirmationRecord.attributesToDeclare = function () {
return [
this.attr("UserConfirmation", "userConfirmationAttr", "UserConfirmation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new User_CSModel.UserConfirmationRec());
}, true, User_CSModel.UserConfirmationRec)
].concat(_super.attributesToDeclare.call(this));
};
UserConfirmationRecord.fromStructure = function (str) {
return new UserConfirmationRecord(new UserConfirmationRecord.RecordClass({
userConfirmationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserConfirmationRecord._isAnonymousRecord = true;
UserConfirmationRecord.UniqueId = "1db2e744-6db4-81bd-a9d8-bc3a7b211c22";
UserConfirmationRecord.init();
return UserConfirmationRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UserConfirmationRecord = UserConfirmationRecord;

});
define("Login.model$attachmentsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$attachmentsRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var attachmentsRecord = (function (_super) {
__extends(attachmentsRecord, _super);
function attachmentsRecord(defaults) {
_super.apply(this, arguments);
}
attachmentsRecord.attributesToDeclare = function () {
return [
this.attr("attachments", "attachmentsAttr", "attachments", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.attachmentsRec());
}, true, Slack_ISModel.attachmentsRec)
].concat(_super.attributesToDeclare.call(this));
};
attachmentsRecord.fromStructure = function (str) {
return new attachmentsRecord(new attachmentsRecord.RecordClass({
attachmentsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
attachmentsRecord._isAnonymousRecord = true;
attachmentsRecord.UniqueId = "221b001c-36d5-e579-044e-106fa793ff26";
attachmentsRecord.init();
return attachmentsRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.attachmentsRecord = attachmentsRecord;

});
define("Login.model$Response_metadata2Record", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$Response_metadata2Rec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var Response_metadata2Record = (function (_super) {
__extends(Response_metadata2Record, _super);
function Response_metadata2Record(defaults) {
_super.apply(this, arguments);
}
Response_metadata2Record.attributesToDeclare = function () {
return [
this.attr("Response_metadata2", "response_metadata2Attr", "Response_metadata2", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.Response_metadata2Rec());
}, true, Slack_ISModel.Response_metadata2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Response_metadata2Record.fromStructure = function (str) {
return new Response_metadata2Record(new Response_metadata2Record.RecordClass({
response_metadata2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Response_metadata2Record._isAnonymousRecord = true;
Response_metadata2Record.UniqueId = "b1ceeaf2-fe2b-1aa9-6b62-ead2f1134d88";
Response_metadata2Record.init();
return Response_metadata2Record;
})(OS.DataTypes.GenericRecord);
LoginModel.Response_metadata2Record = Response_metadata2Record;

});
define("Login.model$Response_metadata2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$Response_metadata2Record"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var Response_metadata2RecordList = (function (_super) {
__extends(Response_metadata2RecordList, _super);
function Response_metadata2RecordList(defaults) {
_super.apply(this, arguments);
}
Response_metadata2RecordList.itemType = LoginModel.Response_metadata2Record;
return Response_metadata2RecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Response_metadata2RecordList = Response_metadata2RecordList;

});
define("Login.model$TextTextBoolean1Record", ["exports", "OutSystems/ClientRuntime/Main", "Login.model"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextBoolean1Record = (function (_super) {
__extends(TextTextBoolean1Record, _super);
function TextTextBoolean1Record(defaults) {
_super.apply(this, arguments);
}
TextTextBoolean1Record.attributesToDeclare = function () {
return [
this.attr("Experiment_id", "experiment_idAttr", "Experiment_id", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("variation_group_Event", "variation_group_EventAttr", "variation_group_Event", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsEnable", "isEnableAttr", "IsEnable", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextBoolean1Record._isAnonymousRecord = true;
TextTextBoolean1Record.UniqueId = "e97abf8c-f287-6cd1-db34-71f2b7c57981";
TextTextBoolean1Record.init();
return TextTextBoolean1Record;
})(OS.DataTypes.GenericRecord);
LoginModel.TextTextBoolean1Record = TextTextBoolean1Record;

});
define("Login.model$TextTextBooleanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$TextTextBoolean1Record"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextBooleanRecordList = (function (_super) {
__extends(TextTextBooleanRecordList, _super);
function TextTextBooleanRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextBooleanRecordList.itemType = LoginModel.TextTextBoolean1Record;
return TextTextBooleanRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.TextTextBooleanRecordList = TextTextBooleanRecordList;

});
define("Login.model$TextTextTextDateTimeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Login.model"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextTextDateTimeRecord = (function (_super) {
__extends(TextTextTextDateTimeRecord, _super);
function TextTextTextDateTimeRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextDateTimeRecord.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("operation", "operationAttr", "operation", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("password", "passwordAttr", "password", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("timestamp", "timestampAttr", "timestamp", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextDateTimeRecord._isAnonymousRecord = true;
TextTextTextDateTimeRecord.UniqueId = "4a4a9510-1aa6-0c29-3a13-b576c23b72c2";
TextTextTextDateTimeRecord.init();
return TextTextTextDateTimeRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.TextTextTextDateTimeRecord = TextTextTextDateTimeRecord;

});
define("Login.model$TextTextTextDateTimeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$TextTextTextDateTimeRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextTextDateTimeRecordList = (function (_super) {
__extends(TextTextTextDateTimeRecordList, _super);
function TextTextTextDateTimeRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextDateTimeRecordList.itemType = LoginModel.TextTextTextDateTimeRecord;
return TextTextTextDateTimeRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.TextTextTextDateTimeRecordList = TextTextTextDateTimeRecordList;

});
define("Login.model$UserLoginTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$UserLoginTypeRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var UserLoginTypeRecord = (function (_super) {
__extends(UserLoginTypeRecord, _super);
function UserLoginTypeRecord(defaults) {
_super.apply(this, arguments);
}
UserLoginTypeRecord.attributesToDeclare = function () {
return [
this.attr("UserLoginType", "userLoginTypeAttr", "UserLoginType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.UserLoginTypeRec());
}, true, UserServicesModel.UserLoginTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
UserLoginTypeRecord.fromStructure = function (str) {
return new UserLoginTypeRecord(new UserLoginTypeRecord.RecordClass({
userLoginTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserLoginTypeRecord._isAnonymousRecord = true;
UserLoginTypeRecord.UniqueId = "2ca75e4a-73d8-13bd-7295-1c80785b911a";
UserLoginTypeRecord.init();
return UserLoginTypeRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UserLoginTypeRecord = UserLoginTypeRecord;

});
define("Login.model$blocksList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$blocksRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var blocksList = (function (_super) {
__extends(blocksList, _super);
function blocksList(defaults) {
_super.apply(this, arguments);
}
blocksList.itemType = Slack_ISModel.blocksRec;
return blocksList;
})(OS.DataTypes.GenericRecordList);
LoginModel.blocksList = blocksList;

});
define("Login.model$PostChatRequestRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$PostChatRequestRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var PostChatRequestRecord = (function (_super) {
__extends(PostChatRequestRecord, _super);
function PostChatRequestRecord(defaults) {
_super.apply(this, arguments);
}
PostChatRequestRecord.attributesToDeclare = function () {
return [
this.attr("PostChatRequest", "postChatRequestAttr", "PostChatRequest", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.PostChatRequestRec());
}, true, Slack_ISModel.PostChatRequestRec)
].concat(_super.attributesToDeclare.call(this));
};
PostChatRequestRecord.fromStructure = function (str) {
return new PostChatRequestRecord(new PostChatRequestRecord.RecordClass({
postChatRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostChatRequestRecord._isAnonymousRecord = true;
PostChatRequestRecord.UniqueId = "75df2964-004b-bcfe-9148-4a891b713971";
PostChatRequestRecord.init();
return PostChatRequestRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.PostChatRequestRecord = PostChatRequestRecord;

});
define("Login.model$PostChatRequestRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$PostChatRequestRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var PostChatRequestRecordList = (function (_super) {
__extends(PostChatRequestRecordList, _super);
function PostChatRequestRecordList(defaults) {
_super.apply(this, arguments);
}
PostChatRequestRecordList.itemType = LoginModel.PostChatRequestRecord;
return PostChatRequestRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.PostChatRequestRecordList = PostChatRequestRecordList;

});
define("Login.model$AttributeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Digital_IS.model", "Login.model", "Digital_IS.model$AttributeRec", "Login.referencesHealth", "Login.referencesHealth$Digital_IS"], function (exports, OutSystems, Digital_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var AttributeRecord = (function (_super) {
__extends(AttributeRecord, _super);
function AttributeRecord(defaults) {
_super.apply(this, arguments);
}
AttributeRecord.attributesToDeclare = function () {
return [
this.attr("Attribute", "attributeAttr", "Attribute", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Digital_ISModel.AttributeRec());
}, true, Digital_ISModel.AttributeRec)
].concat(_super.attributesToDeclare.call(this));
};
AttributeRecord.fromStructure = function (str) {
return new AttributeRecord(new AttributeRecord.RecordClass({
attributeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AttributeRecord._isAnonymousRecord = true;
AttributeRecord.UniqueId = "2f59f234-2c17-f798-01d3-c0b03282e973";
AttributeRecord.init();
return AttributeRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.AttributeRecord = AttributeRecord;

});
define("Login.model$AttributeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$AttributeRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var AttributeRecordList = (function (_super) {
__extends(AttributeRecordList, _super);
function AttributeRecordList(defaults) {
_super.apply(this, arguments);
}
AttributeRecordList.itemType = LoginModel.AttributeRecord;
return AttributeRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.AttributeRecordList = AttributeRecordList;

});
define("Login.model$UserPasswordRecoveryRecord", ["exports", "OutSystems/ClientRuntime/Main", "User_CS.model", "Login.model", "User_CS.model$UserPasswordRecoveryRec", "Login.referencesHealth", "Login.referencesHealth$User_CS"], function (exports, OutSystems, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var UserPasswordRecoveryRecord = (function (_super) {
__extends(UserPasswordRecoveryRecord, _super);
function UserPasswordRecoveryRecord(defaults) {
_super.apply(this, arguments);
}
UserPasswordRecoveryRecord.attributesToDeclare = function () {
return [
this.attr("UserPasswordRecovery", "userPasswordRecoveryAttr", "UserPasswordRecovery", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new User_CSModel.UserPasswordRecoveryRec());
}, true, User_CSModel.UserPasswordRecoveryRec)
].concat(_super.attributesToDeclare.call(this));
};
UserPasswordRecoveryRecord.fromStructure = function (str) {
return new UserPasswordRecoveryRecord(new UserPasswordRecoveryRecord.RecordClass({
userPasswordRecoveryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserPasswordRecoveryRecord._isAnonymousRecord = true;
UserPasswordRecoveryRecord.UniqueId = "c3fd9dd2-309d-a7ca-251f-746ce1d58be6";
UserPasswordRecoveryRecord.init();
return UserPasswordRecoveryRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UserPasswordRecoveryRecord = UserPasswordRecoveryRecord;

});
define("Login.model$UserPasswordRecoveryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserPasswordRecoveryRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserPasswordRecoveryRecordList = (function (_super) {
__extends(UserPasswordRecoveryRecordList, _super);
function UserPasswordRecoveryRecordList(defaults) {
_super.apply(this, arguments);
}
UserPasswordRecoveryRecordList.itemType = LoginModel.UserPasswordRecoveryRecord;
return UserPasswordRecoveryRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserPasswordRecoveryRecordList = UserPasswordRecoveryRecordList;

});
define("Login.model$Post_UserResponseList", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$Post_UserResponseRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var Post_UserResponseList = (function (_super) {
__extends(Post_UserResponseList, _super);
function Post_UserResponseList(defaults) {
_super.apply(this, arguments);
}
Post_UserResponseList.itemType = UserServicesModel.Post_UserResponseRec;
return Post_UserResponseList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Post_UserResponseList = Post_UserResponseList;

});
define("Login.model$PostChatResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$PostChatResponseRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var PostChatResponseRecord = (function (_super) {
__extends(PostChatResponseRecord, _super);
function PostChatResponseRecord(defaults) {
_super.apply(this, arguments);
}
PostChatResponseRecord.attributesToDeclare = function () {
return [
this.attr("PostChatResponse", "postChatResponseAttr", "PostChatResponse", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.PostChatResponseRec());
}, true, Slack_ISModel.PostChatResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
PostChatResponseRecord.fromStructure = function (str) {
return new PostChatResponseRecord(new PostChatResponseRecord.RecordClass({
postChatResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostChatResponseRecord._isAnonymousRecord = true;
PostChatResponseRecord.UniqueId = "36f0f24b-6dee-5176-27ce-91585f2d9a5e";
PostChatResponseRecord.init();
return PostChatResponseRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.PostChatResponseRecord = PostChatResponseRecord;

});
define("Login.model$UserLoginTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserLoginTypeRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserLoginTypeRecordList = (function (_super) {
__extends(UserLoginTypeRecordList, _super);
function UserLoginTypeRecordList(defaults) {
_super.apply(this, arguments);
}
UserLoginTypeRecordList.itemType = LoginModel.UserLoginTypeRecord;
return UserLoginTypeRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserLoginTypeRecordList = UserLoginTypeRecordList;

});
define("Login.model$UserUserConfirmationUserPasswordRecoveryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserUserConfirmationUserPasswordRecoveryRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserUserConfirmationUserPasswordRecoveryRecordList = (function (_super) {
__extends(UserUserConfirmationUserPasswordRecoveryRecordList, _super);
function UserUserConfirmationUserPasswordRecoveryRecordList(defaults) {
_super.apply(this, arguments);
}
UserUserConfirmationUserPasswordRecoveryRecordList.itemType = LoginModel.UserUserConfirmationUserPasswordRecoveryRecord;
return UserUserConfirmationUserPasswordRecoveryRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserUserConfirmationUserPasswordRecoveryRecordList = UserUserConfirmationUserPasswordRecoveryRecordList;

});
define("Login.model$UserDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserDetailsRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserDetailsRecordList = (function (_super) {
__extends(UserDetailsRecordList, _super);
function UserDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
UserDetailsRecordList.itemType = LoginModel.UserDetailsRecord;
return UserDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserDetailsRecordList = UserDetailsRecordList;

});
define("Login.model$SegmentEventsList", ["exports", "OutSystems/ClientRuntime/Main", "Events_Lib.model", "Login.model", "Events_Lib.model$SegmentEventsRec", "Login.referencesHealth", "Login.referencesHealth$Events_Lib"], function (exports, OutSystems, Events_LibModel, LoginModel) {
var OS = OutSystems.Internal;
var SegmentEventsList = (function (_super) {
__extends(SegmentEventsList, _super);
function SegmentEventsList(defaults) {
_super.apply(this, arguments);
}
SegmentEventsList.itemType = Events_LibModel.SegmentEventsRec;
return SegmentEventsList;
})(OS.DataTypes.GenericRecordList);
LoginModel.SegmentEventsList = SegmentEventsList;

});
define("Login.model$TextTextBooleanRecord", ["exports", "OutSystems/ClientRuntime/Main", "Login.model"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextBooleanRecord = (function (_super) {
__extends(TextTextBooleanRecord, _super);
function TextTextBooleanRecord(defaults) {
_super.apply(this, arguments);
}
TextTextBooleanRecord.attributesToDeclare = function () {
return [
this.attr("key", "keyAttr", "key", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("String", "stringAttr", "String", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Boolean", "booleanAttr", "Boolean", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextBooleanRecord._isAnonymousRecord = true;
TextTextBooleanRecord.UniqueId = "aace26ca-f774-c5d8-0a0f-c415a80f4f7b";
TextTextBooleanRecord.init();
return TextTextBooleanRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.TextTextBooleanRecord = TextTextBooleanRecord;

});
define("Login.model$TextTextBoolean1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$TextTextBooleanRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextBoolean1RecordList = (function (_super) {
__extends(TextTextBoolean1RecordList, _super);
function TextTextBoolean1RecordList(defaults) {
_super.apply(this, arguments);
}
TextTextBoolean1RecordList.itemType = LoginModel.TextTextBooleanRecord;
return TextTextBoolean1RecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.TextTextBoolean1RecordList = TextTextBoolean1RecordList;

});
define("Login.model$confirmList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$confirmRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var confirmList = (function (_super) {
__extends(confirmList, _super);
function confirmList(defaults) {
_super.apply(this, arguments);
}
confirmList.itemType = Slack_ISModel.confirmRec;
return confirmList;
})(OS.DataTypes.GenericRecordList);
LoginModel.confirmList = confirmList;

});
define("Login.model$UserLoginTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$UserLoginTypeRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var UserLoginTypeList = (function (_super) {
__extends(UserLoginTypeList, _super);
function UserLoginTypeList(defaults) {
_super.apply(this, arguments);
}
UserLoginTypeList.itemType = UserServicesModel.UserLoginTypeRec;
return UserLoginTypeList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserLoginTypeList = UserLoginTypeList;

});
define("Login.model$blocksRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$blocksRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var blocksRecord = (function (_super) {
__extends(blocksRecord, _super);
function blocksRecord(defaults) {
_super.apply(this, arguments);
}
blocksRecord.attributesToDeclare = function () {
return [
this.attr("blocks", "blocksAttr", "blocks", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.blocksRec());
}, true, Slack_ISModel.blocksRec)
].concat(_super.attributesToDeclare.call(this));
};
blocksRecord.fromStructure = function (str) {
return new blocksRecord(new blocksRecord.RecordClass({
blocksAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
blocksRecord._isAnonymousRecord = true;
blocksRecord.UniqueId = "53181594-95b3-8e22-a8ea-eabae5b8c59e";
blocksRecord.init();
return blocksRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.blocksRecord = blocksRecord;

});
define("Login.model$UserType_ResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$UserType_ResultRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var UserType_ResultRecord = (function (_super) {
__extends(UserType_ResultRecord, _super);
function UserType_ResultRecord(defaults) {
_super.apply(this, arguments);
}
UserType_ResultRecord.attributesToDeclare = function () {
return [
this.attr("UserType_Result", "userType_ResultAttr", "UserType_Result", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.UserType_ResultRec());
}, true, UserServicesModel.UserType_ResultRec)
].concat(_super.attributesToDeclare.call(this));
};
UserType_ResultRecord.fromStructure = function (str) {
return new UserType_ResultRecord(new UserType_ResultRecord.RecordClass({
userType_ResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserType_ResultRecord._isAnonymousRecord = true;
UserType_ResultRecord.UniqueId = "a83d69a9-7946-b4d6-9a31-c3fc19af0677";
UserType_ResultRecord.init();
return UserType_ResultRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UserType_ResultRecord = UserType_ResultRecord;

});
define("Login.model$UserType_ResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserType_ResultRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserType_ResultRecordList = (function (_super) {
__extends(UserType_ResultRecordList, _super);
function UserType_ResultRecordList(defaults) {
_super.apply(this, arguments);
}
UserType_ResultRecordList.itemType = LoginModel.UserType_ResultRecord;
return UserType_ResultRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserType_ResultRecordList = UserType_ResultRecordList;

});
define("Login.model$AcceptanceStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "User_CS.model", "Login.model", "User_CS.model$AcceptanceStatusRec", "Login.referencesHealth", "Login.referencesHealth$User_CS"], function (exports, OutSystems, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var AcceptanceStatusRecord = (function (_super) {
__extends(AcceptanceStatusRecord, _super);
function AcceptanceStatusRecord(defaults) {
_super.apply(this, arguments);
}
AcceptanceStatusRecord.attributesToDeclare = function () {
return [
this.attr("AcceptanceStatus", "acceptanceStatusAttr", "AcceptanceStatus", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new User_CSModel.AcceptanceStatusRec());
}, true, User_CSModel.AcceptanceStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
AcceptanceStatusRecord.fromStructure = function (str) {
return new AcceptanceStatusRecord(new AcceptanceStatusRecord.RecordClass({
acceptanceStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AcceptanceStatusRecord._isAnonymousRecord = true;
AcceptanceStatusRecord.UniqueId = "57d04027-35b8-c963-5212-81dddd31b465";
AcceptanceStatusRecord.init();
return AcceptanceStatusRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.AcceptanceStatusRecord = AcceptanceStatusRecord;

});
define("Login.model$AcceptanceStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$AcceptanceStatusRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var AcceptanceStatusRecordList = (function (_super) {
__extends(AcceptanceStatusRecordList, _super);
function AcceptanceStatusRecordList(defaults) {
_super.apply(this, arguments);
}
AcceptanceStatusRecordList.itemType = LoginModel.AcceptanceStatusRecord;
return AcceptanceStatusRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.AcceptanceStatusRecordList = AcceptanceStatusRecordList;

});
define("Login.model$UTM_ValuesRecord", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$UTM_ValuesRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var UTM_ValuesRecord = (function (_super) {
__extends(UTM_ValuesRecord, _super);
function UTM_ValuesRecord(defaults) {
_super.apply(this, arguments);
}
UTM_ValuesRecord.attributesToDeclare = function () {
return [
this.attr("UTM_Values", "uTM_ValuesAttr", "UTM_Values", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.UTM_ValuesRec());
}, true, UserServicesModel.UTM_ValuesRec)
].concat(_super.attributesToDeclare.call(this));
};
UTM_ValuesRecord.fromStructure = function (str) {
return new UTM_ValuesRecord(new UTM_ValuesRecord.RecordClass({
uTM_ValuesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UTM_ValuesRecord._isAnonymousRecord = true;
UTM_ValuesRecord.UniqueId = "cd13564b-845d-0d45-ba77-3d549ea26c30";
UTM_ValuesRecord.init();
return UTM_ValuesRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UTM_ValuesRecord = UTM_ValuesRecord;

});
define("Login.model$UTM_ValuesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UTM_ValuesRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UTM_ValuesRecordList = (function (_super) {
__extends(UTM_ValuesRecordList, _super);
function UTM_ValuesRecordList(defaults) {
_super.apply(this, arguments);
}
UTM_ValuesRecordList.itemType = LoginModel.UTM_ValuesRecord;
return UTM_ValuesRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UTM_ValuesRecordList = UTM_ValuesRecordList;

});
define("Login.model$PostChatRequestList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$PostChatRequestRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var PostChatRequestList = (function (_super) {
__extends(PostChatRequestList, _super);
function PostChatRequestList(defaults) {
_super.apply(this, arguments);
}
PostChatRequestList.itemType = Slack_ISModel.PostChatRequestRec;
return PostChatRequestList;
})(OS.DataTypes.GenericRecordList);
LoginModel.PostChatRequestList = PostChatRequestList;

});
define("Login.model$UserType_ResultList", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$UserType_ResultRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var UserType_ResultList = (function (_super) {
__extends(UserType_ResultList, _super);
function UserType_ResultList(defaults) {
_super.apply(this, arguments);
}
UserType_ResultList.itemType = UserServicesModel.UserType_ResultRec;
return UserType_ResultList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserType_ResultList = UserType_ResultList;

});
define("Login.model$PartnerRecord", ["exports", "OutSystems/ClientRuntime/Main", "User_CS.model", "Login.model", "User_CS.model$PartnerRec", "Login.referencesHealth", "Login.referencesHealth$User_CS"], function (exports, OutSystems, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var PartnerRecord = (function (_super) {
__extends(PartnerRecord, _super);
function PartnerRecord(defaults) {
_super.apply(this, arguments);
}
PartnerRecord.attributesToDeclare = function () {
return [
this.attr("Partner", "partnerAttr", "Partner", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new User_CSModel.PartnerRec());
}, true, User_CSModel.PartnerRec)
].concat(_super.attributesToDeclare.call(this));
};
PartnerRecord.fromStructure = function (str) {
return new PartnerRecord(new PartnerRecord.RecordClass({
partnerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PartnerRecord._isAnonymousRecord = true;
PartnerRecord.UniqueId = "5f08d3de-a941-adf8-9ad0-09533949ab16";
PartnerRecord.init();
return PartnerRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.PartnerRecord = PartnerRecord;

});
define("Login.model$UserDetails2Record", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$UserDetailsRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var UserDetails2Record = (function (_super) {
__extends(UserDetails2Record, _super);
function UserDetails2Record(defaults) {
_super.apply(this, arguments);
}
UserDetails2Record.attributesToDeclare = function () {
return [
this.attr("UserDetails", "userDetailsAttr", "UserDetails2", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.UserDetailsRec());
}, true, UserServicesModel.UserDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
UserDetails2Record.fromStructure = function (str) {
return new UserDetails2Record(new UserDetails2Record.RecordClass({
userDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserDetails2Record._isAnonymousRecord = true;
UserDetails2Record.UniqueId = "e018bf36-5b67-7e2e-5015-7f2054c71c92";
UserDetails2Record.init();
return UserDetails2Record;
})(OS.DataTypes.GenericRecord);
LoginModel.UserDetails2Record = UserDetails2Record;

});
define("Login.model$UserDetails2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserDetails2Record"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserDetails2RecordList = (function (_super) {
__extends(UserDetails2RecordList, _super);
function UserDetails2RecordList(defaults) {
_super.apply(this, arguments);
}
UserDetails2RecordList.itemType = LoginModel.UserDetails2Record;
return UserDetails2RecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserDetails2RecordList = UserDetails2RecordList;

});
define("Login.model$AuthenticateResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommunityAuthentication.model", "Login.model", "CommunityAuthentication.model$AuthenticateResponseRec", "Login.referencesHealth", "Login.referencesHealth$CommunityAuthentication"], function (exports, OutSystems, CommunityAuthenticationModel, LoginModel) {
var OS = OutSystems.Internal;
var AuthenticateResponseRecord = (function (_super) {
__extends(AuthenticateResponseRecord, _super);
function AuthenticateResponseRecord(defaults) {
_super.apply(this, arguments);
}
AuthenticateResponseRecord.attributesToDeclare = function () {
return [
this.attr("AuthenticateResponse", "authenticateResponseAttr", "AuthenticateResponse", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommunityAuthenticationModel.AuthenticateResponseRec());
}, true, CommunityAuthenticationModel.AuthenticateResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
AuthenticateResponseRecord.fromStructure = function (str) {
return new AuthenticateResponseRecord(new AuthenticateResponseRecord.RecordClass({
authenticateResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AuthenticateResponseRecord._isAnonymousRecord = true;
AuthenticateResponseRecord.UniqueId = "b873b986-79cc-e1a2-aa52-4dadeb329a54";
AuthenticateResponseRecord.init();
return AuthenticateResponseRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.AuthenticateResponseRecord = AuthenticateResponseRecord;

});
define("Login.model$AuthenticateResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$AuthenticateResponseRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var AuthenticateResponseRecordList = (function (_super) {
__extends(AuthenticateResponseRecordList, _super);
function AuthenticateResponseRecordList(defaults) {
_super.apply(this, arguments);
}
AuthenticateResponseRecordList.itemType = LoginModel.AuthenticateResponseRecord;
return AuthenticateResponseRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.AuthenticateResponseRecordList = AuthenticateResponseRecordList;

});
define("Login.model$Error2List", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model", "Login.model", "Portal_Utils.model$ErrorRec", "Login.referencesHealth", "Login.referencesHealth$Portal_Utils"], function (exports, OutSystems, Portal_UtilsModel, LoginModel) {
var OS = OutSystems.Internal;
var Error2List = (function (_super) {
__extends(Error2List, _super);
function Error2List(defaults) {
_super.apply(this, arguments);
}
Error2List.itemType = Portal_UtilsModel.ErrorRec;
return Error2List;
})(OS.DataTypes.GenericRecordList);
LoginModel.Error2List = Error2List;

});
define("Login.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommunityAuthentication.model", "Login.model", "CommunityAuthentication.model$ErrorRec", "Login.referencesHealth", "Login.referencesHealth$CommunityAuthentication"], function (exports, OutSystems, CommunityAuthenticationModel, LoginModel) {
var OS = OutSystems.Internal;
var ErrorRecord = (function (_super) {
__extends(ErrorRecord, _super);
function ErrorRecord(defaults) {
_super.apply(this, arguments);
}
ErrorRecord.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommunityAuthenticationModel.ErrorRec());
}, true, CommunityAuthenticationModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRecord.fromStructure = function (str) {
return new ErrorRecord(new ErrorRecord.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorRecord._isAnonymousRecord = true;
ErrorRecord.UniqueId = "6ee4c373-466e-6ab5-14f7-b1158f3b7e7e";
ErrorRecord.init();
return ErrorRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.ErrorRecord = ErrorRecord;

});
define("Login.model$Post_UserResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$Post_UserResponseRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var Post_UserResponseRecord = (function (_super) {
__extends(Post_UserResponseRecord, _super);
function Post_UserResponseRecord(defaults) {
_super.apply(this, arguments);
}
Post_UserResponseRecord.attributesToDeclare = function () {
return [
this.attr("Post_UserResponse", "post_UserResponseAttr", "Post_UserResponse", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.Post_UserResponseRec());
}, true, UserServicesModel.Post_UserResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
Post_UserResponseRecord.fromStructure = function (str) {
return new Post_UserResponseRecord(new Post_UserResponseRecord.RecordClass({
post_UserResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Post_UserResponseRecord._isAnonymousRecord = true;
Post_UserResponseRecord.UniqueId = "70604f9d-9d5f-38b2-e308-46ad19dc7256";
Post_UserResponseRecord.init();
return Post_UserResponseRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.Post_UserResponseRecord = Post_UserResponseRecord;

});
define("Login.model$actionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$actionsRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var actionsRecord = (function (_super) {
__extends(actionsRecord, _super);
function actionsRecord(defaults) {
_super.apply(this, arguments);
}
actionsRecord.attributesToDeclare = function () {
return [
this.attr("actions", "actionsAttr", "actions", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.actionsRec());
}, true, Slack_ISModel.actionsRec)
].concat(_super.attributesToDeclare.call(this));
};
actionsRecord.fromStructure = function (str) {
return new actionsRecord(new actionsRecord.RecordClass({
actionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
actionsRecord._isAnonymousRecord = true;
actionsRecord.UniqueId = "dbdea281-2794-52b4-cb52-6340d74d4c1e";
actionsRecord.init();
return actionsRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.actionsRecord = actionsRecord;

});
define("Login.model$actionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$actionsRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var actionsRecordList = (function (_super) {
__extends(actionsRecordList, _super);
function actionsRecordList(defaults) {
_super.apply(this, arguments);
}
actionsRecordList.itemType = LoginModel.actionsRecord;
return actionsRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.actionsRecordList = actionsRecordList;

});
define("Login.model$UserUserConfirmationRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "User_CS.model", "Login.model", "ServiceCenter.model$UserRec", "Login.referencesHealth", "Login.referencesHealth$ServiceCenter", "User_CS.model$UserConfirmationRec", "Login.referencesHealth$User_CS"], function (exports, OutSystems, ServiceCenterModel, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var UserUserConfirmationRecord = (function (_super) {
__extends(UserUserConfirmationRecord, _super);
function UserUserConfirmationRecord(defaults) {
_super.apply(this, arguments);
}
UserUserConfirmationRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec), 
this.attr("UserConfirmation", "userConfirmationAttr", "UserConfirmation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new User_CSModel.UserConfirmationRec());
}, true, User_CSModel.UserConfirmationRec)
].concat(_super.attributesToDeclare.call(this));
};
UserUserConfirmationRecord._isAnonymousRecord = true;
UserUserConfirmationRecord.UniqueId = "cbef2d33-e7a3-01fd-409e-0a2456656caa";
UserUserConfirmationRecord.init();
return UserUserConfirmationRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UserUserConfirmationRecord = UserUserConfirmationRecord;

});
define("Login.model$UserUserConfirmationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserUserConfirmationRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserUserConfirmationRecordList = (function (_super) {
__extends(UserUserConfirmationRecordList, _super);
function UserUserConfirmationRecordList(defaults) {
_super.apply(this, arguments);
}
UserUserConfirmationRecordList.itemType = LoginModel.UserUserConfirmationRecord;
return UserUserConfirmationRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserUserConfirmationRecordList = UserUserConfirmationRecordList;

});
define("Login.model$UserUserPasswordRecoveryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserUserPasswordRecoveryRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserUserPasswordRecoveryRecordList = (function (_super) {
__extends(UserUserPasswordRecoveryRecordList, _super);
function UserUserPasswordRecoveryRecordList(defaults) {
_super.apply(this, arguments);
}
UserUserPasswordRecoveryRecordList.itemType = LoginModel.UserUserPasswordRecoveryRecord;
return UserUserPasswordRecoveryRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserUserPasswordRecoveryRecordList = UserUserPasswordRecoveryRecordList;

});
define("Login.model$IconRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$IconRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var IconRecordList = (function (_super) {
__extends(IconRecordList, _super);
function IconRecordList(defaults) {
_super.apply(this, arguments);
}
IconRecordList.itemType = LoginModel.IconRecord;
return IconRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.IconRecordList = IconRecordList;

});
define("Login.model$Post_UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$Post_UserRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var Post_UserRecord = (function (_super) {
__extends(Post_UserRecord, _super);
function Post_UserRecord(defaults) {
_super.apply(this, arguments);
}
Post_UserRecord.attributesToDeclare = function () {
return [
this.attr("Post_User", "post_UserAttr", "Post_User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.Post_UserRec());
}, true, UserServicesModel.Post_UserRec)
].concat(_super.attributesToDeclare.call(this));
};
Post_UserRecord.fromStructure = function (str) {
return new Post_UserRecord(new Post_UserRecord.RecordClass({
post_UserAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Post_UserRecord._isAnonymousRecord = true;
Post_UserRecord.UniqueId = "82a69a80-7bbe-802e-1b56-a060edfd5130";
Post_UserRecord.init();
return Post_UserRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.Post_UserRecord = Post_UserRecord;

});
define("Login.model$Post_UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$Post_UserRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var Post_UserRecordList = (function (_super) {
__extends(Post_UserRecordList, _super);
function Post_UserRecordList(defaults) {
_super.apply(this, arguments);
}
Post_UserRecordList.itemType = LoginModel.Post_UserRecord;
return Post_UserRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Post_UserRecordList = Post_UserRecordList;

});
define("Login.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommunityAuthentication.model", "Login.model", "CommunityAuthentication.model$ErrorRec", "Login.referencesHealth", "Login.referencesHealth$CommunityAuthentication"], function (exports, OutSystems, CommunityAuthenticationModel, LoginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommunityAuthenticationModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
LoginModel.ErrorList = ErrorList;

});
define("Login.model$Error2Record", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model", "Login.model", "Portal_Utils.model$ErrorRec", "Login.referencesHealth", "Login.referencesHealth$Portal_Utils"], function (exports, OutSystems, Portal_UtilsModel, LoginModel) {
var OS = OutSystems.Internal;
var Error2Record = (function (_super) {
__extends(Error2Record, _super);
function Error2Record(defaults) {
_super.apply(this, arguments);
}
Error2Record.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error2", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_UtilsModel.ErrorRec());
}, true, Portal_UtilsModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
Error2Record.fromStructure = function (str) {
return new Error2Record(new Error2Record.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Error2Record._isAnonymousRecord = true;
Error2Record.UniqueId = "81ee0858-0018-de46-8595-ddcd64d5ffc1";
Error2Record.init();
return Error2Record;
})(OS.DataTypes.GenericRecord);
LoginModel.Error2Record = Error2Record;

});
define("Login.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Login.model", "ServiceCenter.model$UserRec", "Login.referencesHealth", "Login.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, LoginModel) {
var OS = OutSystems.Internal;
var UserRecord = (function (_super) {
__extends(UserRecord, _super);
function UserRecord(defaults) {
_super.apply(this, arguments);
}
UserRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
UserRecord.fromStructure = function (str) {
return new UserRecord(new UserRecord.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserRecord._isAnonymousRecord = true;
UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
UserRecord.init();
return UserRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.UserRecord = UserRecord;

});
define("Login.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = LoginModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserRecordList = UserRecordList;

});
define("Login.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$ErrorRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = LoginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.ErrorRecordList = ErrorRecordList;

});
define("Login.model$blocksRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$blocksRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var blocksRecordList = (function (_super) {
__extends(blocksRecordList, _super);
function blocksRecordList(defaults) {
_super.apply(this, arguments);
}
blocksRecordList.itemType = LoginModel.blocksRecord;
return blocksRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.blocksRecordList = blocksRecordList;

});
define("Login.model$UserDetails2List", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$UserDetailsRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var UserDetails2List = (function (_super) {
__extends(UserDetails2List, _super);
function UserDetails2List(defaults) {
_super.apply(this, arguments);
}
UserDetails2List.itemType = UserServicesModel.UserDetailsRec;
return UserDetails2List;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserDetails2List = UserDetails2List;

});
define("Login.model$MessageType_SNSRecord", ["exports", "OutSystems/ClientRuntime/Main", "SNSShared_Lib.model", "Login.model", "SNSShared_Lib.model$MessageTypeRec", "Login.referencesHealth", "Login.referencesHealth$SNSShared_Lib"], function (exports, OutSystems, SNSShared_LibModel, LoginModel) {
var OS = OutSystems.Internal;
var MessageType_SNSRecord = (function (_super) {
__extends(MessageType_SNSRecord, _super);
function MessageType_SNSRecord(defaults) {
_super.apply(this, arguments);
}
MessageType_SNSRecord.attributesToDeclare = function () {
return [
this.attr("MessageType", "messageTypeAttr", "MessageType_SNS", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new SNSShared_LibModel.MessageTypeRec());
}, true, SNSShared_LibModel.MessageTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageType_SNSRecord.fromStructure = function (str) {
return new MessageType_SNSRecord(new MessageType_SNSRecord.RecordClass({
messageTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageType_SNSRecord._isAnonymousRecord = true;
MessageType_SNSRecord.UniqueId = "8df01064-da99-a016-d102-3d78122c8f07";
MessageType_SNSRecord.init();
return MessageType_SNSRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.MessageType_SNSRecord = MessageType_SNSRecord;

});
define("Login.model$MessageType_SNSRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$MessageType_SNSRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var MessageType_SNSRecordList = (function (_super) {
__extends(MessageType_SNSRecordList, _super);
function MessageType_SNSRecordList(defaults) {
_super.apply(this, arguments);
}
MessageType_SNSRecordList.itemType = LoginModel.MessageType_SNSRecord;
return MessageType_SNSRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.MessageType_SNSRecordList = MessageType_SNSRecordList;

});
define("Login.model$Get_UserResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$Get_UserResponseRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var Get_UserResponseRecord = (function (_super) {
__extends(Get_UserResponseRecord, _super);
function Get_UserResponseRecord(defaults) {
_super.apply(this, arguments);
}
Get_UserResponseRecord.attributesToDeclare = function () {
return [
this.attr("Get_UserResponse", "get_UserResponseAttr", "Get_UserResponse", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.Get_UserResponseRec());
}, true, UserServicesModel.Get_UserResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
Get_UserResponseRecord.fromStructure = function (str) {
return new Get_UserResponseRecord(new Get_UserResponseRecord.RecordClass({
get_UserResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Get_UserResponseRecord._isAnonymousRecord = true;
Get_UserResponseRecord.UniqueId = "e7c03fa7-8f1f-bb16-4b2a-ce62b33f5914";
Get_UserResponseRecord.init();
return Get_UserResponseRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.Get_UserResponseRecord = Get_UserResponseRecord;

});
define("Login.model$Get_UserResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$Get_UserResponseRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var Get_UserResponseRecordList = (function (_super) {
__extends(Get_UserResponseRecordList, _super);
function Get_UserResponseRecordList(defaults) {
_super.apply(this, arguments);
}
Get_UserResponseRecordList.itemType = LoginModel.Get_UserResponseRecord;
return Get_UserResponseRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Get_UserResponseRecordList = Get_UserResponseRecordList;

});
define("Login.model$UserConfirmationList", ["exports", "OutSystems/ClientRuntime/Main", "User_CS.model", "Login.model", "User_CS.model$UserConfirmationRec", "Login.referencesHealth", "Login.referencesHealth$User_CS"], function (exports, OutSystems, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var UserConfirmationList = (function (_super) {
__extends(UserConfirmationList, _super);
function UserConfirmationList(defaults) {
_super.apply(this, arguments);
}
UserConfirmationList.itemType = User_CSModel.UserConfirmationRec;
return UserConfirmationList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserConfirmationList = UserConfirmationList;

});
define("Login.model$Response_metadata2List", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$Response_metadata2Rec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var Response_metadata2List = (function (_super) {
__extends(Response_metadata2List, _super);
function Response_metadata2List(defaults) {
_super.apply(this, arguments);
}
Response_metadata2List.itemType = Slack_ISModel.Response_metadata2Rec;
return Response_metadata2List;
})(OS.DataTypes.GenericRecordList);
LoginModel.Response_metadata2List = Response_metadata2List;

});
define("Login.model$PartnerList", ["exports", "OutSystems/ClientRuntime/Main", "User_CS.model", "Login.model", "User_CS.model$PartnerRec", "Login.referencesHealth", "Login.referencesHealth$User_CS"], function (exports, OutSystems, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var PartnerList = (function (_super) {
__extends(PartnerList, _super);
function PartnerList(defaults) {
_super.apply(this, arguments);
}
PartnerList.itemType = User_CSModel.PartnerRec;
return PartnerList;
})(OS.DataTypes.GenericRecordList);
LoginModel.PartnerList = PartnerList;

});
define("Login.model$UserConfirmationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserConfirmationRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserConfirmationRecordList = (function (_super) {
__extends(UserConfirmationRecordList, _super);
function UserConfirmationRecordList(defaults) {
_super.apply(this, arguments);
}
UserConfirmationRecordList.itemType = LoginModel.UserConfirmationRecord;
return UserConfirmationRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserConfirmationRecordList = UserConfirmationRecordList;

});
define("Login.model$TextText1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$TextTextRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextText1RecordList = (function (_super) {
__extends(TextText1RecordList, _super);
function TextText1RecordList(defaults) {
_super.apply(this, arguments);
}
TextText1RecordList.itemType = LoginModel.TextTextRecord;
return TextText1RecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.TextText1RecordList = TextText1RecordList;

});
define("Login.model$TextTextTextnamevalueRecordListRecord", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$TextText1RecordList"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextTextnamevalueRecordListRecord = (function (_super) {
__extends(TextTextTextnamevalueRecordListRecord, _super);
function TextTextTextnamevalueRecordListRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextnamevalueRecordListRecord.attributesToDeclare = function () {
return [
this.attr("Environment", "environmentAttr", "Environment", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Project", "projectAttr", "Project", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("UserKey", "userKeyAttr", "UserKey", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Context", "contextAttr", "Context", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LoginModel.TextText1RecordList());
}, true, LoginModel.TextText1RecordList)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextnamevalueRecordListRecord._isAnonymousRecord = true;
TextTextTextnamevalueRecordListRecord.UniqueId = "a65252b6-7787-1bdf-9d42-a9aff0ff4390";
TextTextTextnamevalueRecordListRecord.init();
return TextTextTextnamevalueRecordListRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.TextTextTextnamevalueRecordListRecord = TextTextTextnamevalueRecordListRecord;

});
define("Login.model$confirmRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$confirmRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var confirmRecord = (function (_super) {
__extends(confirmRecord, _super);
function confirmRecord(defaults) {
_super.apply(this, arguments);
}
confirmRecord.attributesToDeclare = function () {
return [
this.attr("confirm", "confirmAttr", "confirm", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.confirmRec());
}, true, Slack_ISModel.confirmRec)
].concat(_super.attributesToDeclare.call(this));
};
confirmRecord.fromStructure = function (str) {
return new confirmRecord(new confirmRecord.RecordClass({
confirmAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
confirmRecord._isAnonymousRecord = true;
confirmRecord.UniqueId = "edfadbe0-a77a-c69d-06c6-63ef46cfee0e";
confirmRecord.init();
return confirmRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.confirmRecord = confirmRecord;

});
define("Login.model$confirmRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$confirmRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var confirmRecordList = (function (_super) {
__extends(confirmRecordList, _super);
function confirmRecordList(defaults) {
_super.apply(this, arguments);
}
confirmRecordList.itemType = LoginModel.confirmRecord;
return confirmRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.confirmRecordList = confirmRecordList;

});
define("Login.model$MessageType_SNSList", ["exports", "OutSystems/ClientRuntime/Main", "SNSShared_Lib.model", "Login.model", "SNSShared_Lib.model$MessageTypeRec", "Login.referencesHealth", "Login.referencesHealth$SNSShared_Lib"], function (exports, OutSystems, SNSShared_LibModel, LoginModel) {
var OS = OutSystems.Internal;
var MessageType_SNSList = (function (_super) {
__extends(MessageType_SNSList, _super);
function MessageType_SNSList(defaults) {
_super.apply(this, arguments);
}
MessageType_SNSList.itemType = SNSShared_LibModel.MessageTypeRec;
return MessageType_SNSList;
})(OS.DataTypes.GenericRecordList);
LoginModel.MessageType_SNSList = MessageType_SNSList;

});
define("Login.model$textList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$textRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var textList = (function (_super) {
__extends(textList, _super);
function textList(defaults) {
_super.apply(this, arguments);
}
textList.itemType = Slack_ISModel.textRec;
return textList;
})(OS.DataTypes.GenericRecordList);
LoginModel.textList = textList;

});
define("Login.model$PostChatResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$PostChatResponseRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var PostChatResponseRecordList = (function (_super) {
__extends(PostChatResponseRecordList, _super);
function PostChatResponseRecordList(defaults) {
_super.apply(this, arguments);
}
PostChatResponseRecordList.itemType = LoginModel.PostChatResponseRecord;
return PostChatResponseRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.PostChatResponseRecordList = PostChatResponseRecordList;

});
define("Login.model$AuthenticateResponseList", ["exports", "OutSystems/ClientRuntime/Main", "CommunityAuthentication.model", "Login.model", "CommunityAuthentication.model$AuthenticateResponseRec", "Login.referencesHealth", "Login.referencesHealth$CommunityAuthentication"], function (exports, OutSystems, CommunityAuthenticationModel, LoginModel) {
var OS = OutSystems.Internal;
var AuthenticateResponseList = (function (_super) {
__extends(AuthenticateResponseList, _super);
function AuthenticateResponseList(defaults) {
_super.apply(this, arguments);
}
AuthenticateResponseList.itemType = CommunityAuthenticationModel.AuthenticateResponseRec;
return AuthenticateResponseList;
})(OS.DataTypes.GenericRecordList);
LoginModel.AuthenticateResponseList = AuthenticateResponseList;

});
define("Login.model$fieldsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$fieldsRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var fieldsRecord = (function (_super) {
__extends(fieldsRecord, _super);
function fieldsRecord(defaults) {
_super.apply(this, arguments);
}
fieldsRecord.attributesToDeclare = function () {
return [
this.attr("fields", "fieldsAttr", "fields", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Slack_ISModel.fieldsRec());
}, true, Slack_ISModel.fieldsRec)
].concat(_super.attributesToDeclare.call(this));
};
fieldsRecord.fromStructure = function (str) {
return new fieldsRecord(new fieldsRecord.RecordClass({
fieldsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
fieldsRecord._isAnonymousRecord = true;
fieldsRecord.UniqueId = "b3b6f3d8-d820-5b82-241a-4ce9220123d8";
fieldsRecord.init();
return fieldsRecord;
})(OS.DataTypes.GenericRecord);
LoginModel.fieldsRecord = fieldsRecord;

});
define("Login.model$Bot_profileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$Bot_profileRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var Bot_profileRecordList = (function (_super) {
__extends(Bot_profileRecordList, _super);
function Bot_profileRecordList(defaults) {
_super.apply(this, arguments);
}
Bot_profileRecordList.itemType = LoginModel.Bot_profileRecord;
return Bot_profileRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Bot_profileRecordList = Bot_profileRecordList;

});
define("Login.model$Post_UserList", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$Post_UserRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var Post_UserList = (function (_super) {
__extends(Post_UserList, _super);
function Post_UserList(defaults) {
_super.apply(this, arguments);
}
Post_UserList.itemType = UserServicesModel.Post_UserRec;
return Post_UserList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Post_UserList = Post_UserList;

});
define("Login.model$UTM_ValuesList", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$UTM_ValuesRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var UTM_ValuesList = (function (_super) {
__extends(UTM_ValuesList, _super);
function UTM_ValuesList(defaults) {
_super.apply(this, arguments);
}
UTM_ValuesList.itemType = UserServicesModel.UTM_ValuesRec;
return UTM_ValuesList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UTM_ValuesList = UTM_ValuesList;

});
define("Login.model$TextTextTextnamevalueRecordListRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$TextTextTextnamevalueRecordListRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var TextTextTextnamevalueRecordListRecordList = (function (_super) {
__extends(TextTextTextnamevalueRecordListRecordList, _super);
function TextTextTextnamevalueRecordListRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextnamevalueRecordListRecordList.itemType = LoginModel.TextTextTextnamevalueRecordListRecord;
return TextTextTextnamevalueRecordListRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.TextTextTextnamevalueRecordListRecordList = TextTextTextnamevalueRecordListRecordList;

});
define("Login.model$fieldsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$fieldsRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var fieldsRecordList = (function (_super) {
__extends(fieldsRecordList, _super);
function fieldsRecordList(defaults) {
_super.apply(this, arguments);
}
fieldsRecordList.itemType = LoginModel.fieldsRecord;
return fieldsRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.fieldsRecordList = fieldsRecordList;

});
define("Login.model$Error2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$Error2Record"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var Error2RecordList = (function (_super) {
__extends(Error2RecordList, _super);
function Error2RecordList(defaults) {
_super.apply(this, arguments);
}
Error2RecordList.itemType = LoginModel.Error2Record;
return Error2RecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Error2RecordList = Error2RecordList;

});
define("Login.model$SegmentEventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$SegmentEventsRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var SegmentEventsRecordList = (function (_super) {
__extends(SegmentEventsRecordList, _super);
function SegmentEventsRecordList(defaults) {
_super.apply(this, arguments);
}
SegmentEventsRecordList.itemType = LoginModel.SegmentEventsRecord;
return SegmentEventsRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.SegmentEventsRecordList = SegmentEventsRecordList;

});
define("Login.model$MessageList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$MessageRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var MessageList = (function (_super) {
__extends(MessageList, _super);
function MessageList(defaults) {
_super.apply(this, arguments);
}
MessageList.itemType = Slack_ISModel.MessageRec;
return MessageList;
})(OS.DataTypes.GenericRecordList);
LoginModel.MessageList = MessageList;

});
define("Login.model$ResponseList", ["exports", "OutSystems/ClientRuntime/Main", "SNSPublisher_RnD_IS.model", "Login.model", "SNSPublisher_RnD_IS.model$ResponseRec", "Login.referencesHealth", "Login.referencesHealth$SNSPublisher_RnD_IS"], function (exports, OutSystems, SNSPublisher_RnD_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var ResponseList = (function (_super) {
__extends(ResponseList, _super);
function ResponseList(defaults) {
_super.apply(this, arguments);
}
ResponseList.itemType = SNSPublisher_RnD_ISModel.ResponseRec;
return ResponseList;
})(OS.DataTypes.GenericRecordList);
LoginModel.ResponseList = ResponseList;

});
define("Login.model$AcceptanceStatusList", ["exports", "OutSystems/ClientRuntime/Main", "User_CS.model", "Login.model", "User_CS.model$AcceptanceStatusRec", "Login.referencesHealth", "Login.referencesHealth$User_CS"], function (exports, OutSystems, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var AcceptanceStatusList = (function (_super) {
__extends(AcceptanceStatusList, _super);
function AcceptanceStatusList(defaults) {
_super.apply(this, arguments);
}
AcceptanceStatusList.itemType = User_CSModel.AcceptanceStatusRec;
return AcceptanceStatusList;
})(OS.DataTypes.GenericRecordList);
LoginModel.AcceptanceStatusList = AcceptanceStatusList;

});
define("Login.model$UserDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$UserDetailsRec"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var UserDetailsList = (function (_super) {
__extends(UserDetailsList, _super);
function UserDetailsList(defaults) {
_super.apply(this, arguments);
}
UserDetailsList.itemType = LoginModel.UserDetailsRec;
return UserDetailsList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserDetailsList = UserDetailsList;

});
define("Login.model$attachmentsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$attachmentsRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var attachmentsRecordList = (function (_super) {
__extends(attachmentsRecordList, _super);
function attachmentsRecordList(defaults) {
_super.apply(this, arguments);
}
attachmentsRecordList.itemType = LoginModel.attachmentsRecord;
return attachmentsRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.attachmentsRecordList = attachmentsRecordList;

});
define("Login.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Login.model", "ServiceCenter.model$UserRec", "Login.referencesHealth", "Login.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, LoginModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserList = UserList;

});
define("Login.model$IconList", ["exports", "OutSystems/ClientRuntime/Main", "Slack_IS.model", "Login.model", "Slack_IS.model$IconRec", "Login.referencesHealth", "Login.referencesHealth$Slack_IS"], function (exports, OutSystems, Slack_ISModel, LoginModel) {
var OS = OutSystems.Internal;
var IconList = (function (_super) {
__extends(IconList, _super);
function IconList(defaults) {
_super.apply(this, arguments);
}
IconList.itemType = Slack_ISModel.IconRec;
return IconList;
})(OS.DataTypes.GenericRecordList);
LoginModel.IconList = IconList;

});
define("Login.model$UserPasswordRecoveryList", ["exports", "OutSystems/ClientRuntime/Main", "User_CS.model", "Login.model", "User_CS.model$UserPasswordRecoveryRec", "Login.referencesHealth", "Login.referencesHealth$User_CS"], function (exports, OutSystems, User_CSModel, LoginModel) {
var OS = OutSystems.Internal;
var UserPasswordRecoveryList = (function (_super) {
__extends(UserPasswordRecoveryList, _super);
function UserPasswordRecoveryList(defaults) {
_super.apply(this, arguments);
}
UserPasswordRecoveryList.itemType = User_CSModel.UserPasswordRecoveryRec;
return UserPasswordRecoveryList;
})(OS.DataTypes.GenericRecordList);
LoginModel.UserPasswordRecoveryList = UserPasswordRecoveryList;

});
define("Login.model$Post_UserResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$Post_UserResponseRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var Post_UserResponseRecordList = (function (_super) {
__extends(Post_UserResponseRecordList, _super);
function Post_UserResponseRecordList(defaults) {
_super.apply(this, arguments);
}
Post_UserResponseRecordList.itemType = LoginModel.Post_UserResponseRecord;
return Post_UserResponseRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Post_UserResponseRecordList = Post_UserResponseRecordList;

});
define("Login.model$Get_UserResponseList", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Login.model", "UserServices.model$Get_UserResponseRec", "Login.referencesHealth", "Login.referencesHealth$UserServices"], function (exports, OutSystems, UserServicesModel, LoginModel) {
var OS = OutSystems.Internal;
var Get_UserResponseList = (function (_super) {
__extends(Get_UserResponseList, _super);
function Get_UserResponseList(defaults) {
_super.apply(this, arguments);
}
Get_UserResponseList.itemType = UserServicesModel.Get_UserResponseRec;
return Get_UserResponseList;
})(OS.DataTypes.GenericRecordList);
LoginModel.Get_UserResponseList = Get_UserResponseList;

});
define("Login.model$PartnerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.model$PartnerRecord"], function (exports, OutSystems, LoginModel) {
var OS = OutSystems.Internal;
var PartnerRecordList = (function (_super) {
__extends(PartnerRecordList, _super);
function PartnerRecordList(defaults) {
_super.apply(this, arguments);
}
PartnerRecordList.itemType = LoginModel.PartnerRecord;
return PartnerRecordList;
})(OS.DataTypes.GenericRecordList);
LoginModel.PartnerRecordList = PartnerRecordList;

});
define("Login.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var LoginModel = exports;
Object.defineProperty(LoginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["f420c475-c510-4f5d-ae38-b36b70b5399e"];
}
});

LoginModel.staticEntities = {};
LoginModel.staticEntities.errorMessage = {};
var getErrorMessageRecord = function (record) {
return OS.ApplicationInfo.getModules()["5e57707b-c473-447f-890f-ced605c3d0c1"].staticEntities["b64cbfb5-9cdf-42d9-a081-5188c0856be0"][record];
};
Object.defineProperty(LoginModel.staticEntities.errorMessage, "notFound", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getErrorMessageRecord("1f724e6b-356a-45d1-87c6-f15a1d47ece5"));
}
});

Object.defineProperty(LoginModel.staticEntities.errorMessage, "badRequest", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getErrorMessageRecord("590b2a6f-4c1f-4dfc-a904-1cbd40387b78"));
}
});

Object.defineProperty(LoginModel.staticEntities.errorMessage, "forbidden", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getErrorMessageRecord("b3613f94-56c2-495a-942b-9adcc11d7b37"));
}
});

Object.defineProperty(LoginModel.staticEntities.errorMessage, "serverError", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getErrorMessageRecord("cf5d2560-4856-47e8-9314-9c9c5c78d329"));
}
});

Object.defineProperty(LoginModel.staticEntities.errorMessage, "unauthorized", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getErrorMessageRecord("ea23adad-0b80-47d2-9732-713428f0921d"));
}
});

Object.defineProperty(LoginModel.staticEntities.errorMessage, "oK", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getErrorMessageRecord("edcb43b2-1937-41cd-b858-12b70453b469"));
}
});

LoginModel.staticEntities.messageType_SNS = {};
var getMessageType_SNSRecord = function (record) {
return OS.ApplicationInfo.getModules()["f80f651f-be4d-45f2-a6ac-bfbb0cf5bf40"].staticEntities["9933ddbb-02a1-475c-8c45-1f9d1a143a26"][record];
};
Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "signupPersonalization", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("0034fa37-5934-4b41-bd76-c98be054acce"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "createUser", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("00ead3c2-60d1-4a10-ae07-a53de2fbb851"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "createUser_Internal", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("0db8e041-7c08-4fc8-a36a-3afad393b119"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "enableAccount", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("11e3d21e-46c8-4f24-95a5-23ecca2b0d1d"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "deleteUserEnterprise", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("19bef8ed-d56a-42cc-aa48-328051cf3cdd"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "syncMarketoLead", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("1de8585a-a33e-4172-a6c3-57011a6d1b9c"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "createUserEnterprise", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("23aa445d-9cb8-4737-99a7-586e3fab5a9f"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "changeName", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("24155b7c-ada2-46d3-9e38-29fce0283f65"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "changeEmailWPass", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("6397ca68-581c-4b83-b323-6059466372e0"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "syncPassword", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("63fa5c85-8701-4c27-94b2-2ff9203e04af"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "createITUser", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("6e879248-3be3-43a8-87d0-12cbe568af53"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "syncMarketoCustomObject", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("71b1b256-e6c8-41b7-b67a-a0e3ab25d3c7"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "updateScripts", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("73414e59-b02f-473e-b6a9-2204929c33b0"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "mergeAccount", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("8d195285-ab29-4f9b-8846-40501d1c7550"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "disableAccount", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("9f870fa4-d6e0-4e1c-83df-2dbbbea83330"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "changeEmail", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("a21893a1-fa1e-4155-8787-b9fa2d453f20"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "changePassword", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("a606a37f-dd6a-417c-afeb-a85997bff713"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "forgotPassword", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("af1b98f5-fd30-4399-a0d2-6c147ddc00eb"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "closeAccount", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("bd2dcbe5-a36e-4ad2-950e-aa51ee44aed2"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "changeJobTitle", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("d7fece77-7984-400e-8fcf-c9ffddce2de5"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "other", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("da3eef7b-b48c-408f-a9ae-a9c28b7276ce"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "downloadRelease", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("e4cf7703-6a59-4889-a294-935360da72d5"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "migrateUserToIdentity", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("e4e431ad-b0e9-4827-9377-6b6772fdf93a"));
}
});

Object.defineProperty(LoginModel.staticEntities.messageType_SNS, "syncITUser", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageType_SNSRecord("f3e84786-dce9-47a8-8da9-47b5663a6772"));
}
});

LoginModel.staticEntities.acceptanceStatus = {};
var getAcceptanceStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["f93116d8-7701-4c35-b820-d261049b3231"].staticEntities["2edc3ebe-303a-4ecd-9909-d1f439ff9550"][record];
};
Object.defineProperty(LoginModel.staticEntities.acceptanceStatus, "pending", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getAcceptanceStatusRecord("2d8acfa0-d172-4dfb-8e50-eaab7b32893d"));
}
});

Object.defineProperty(LoginModel.staticEntities.acceptanceStatus, "accept", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getAcceptanceStatusRecord("52fc2d15-a097-4326-b80c-9ef142cf6e04"));
}
});

Object.defineProperty(LoginModel.staticEntities.acceptanceStatus, "reject", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getAcceptanceStatusRecord("7fb31af2-de0f-4368-97f7-2d5ea4eb678c"));
}
});

LoginModel.staticEntities.userLoginType = {};
var getUserLoginTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["fba49558-4b9b-4471-b662-b861e638777f"].staticEntities["3c973819-9c0c-4346-adda-61be458fc3d7"][record];
};
Object.defineProperty(LoginModel.staticEntities.userLoginType, "identityService_Extranet", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUserLoginTypeRecord("3dd57a21-10fd-4fde-88d0-8e159258c647"));
}
});

Object.defineProperty(LoginModel.staticEntities.userLoginType, "internal", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUserLoginTypeRecord("4218f190-c056-43df-af49-88dfeadf7216"));
}
});

Object.defineProperty(LoginModel.staticEntities.userLoginType, "oDC", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUserLoginTypeRecord("761a860b-9104-454f-b876-f23df12c09a9"));
}
});

Object.defineProperty(LoginModel.staticEntities.userLoginType, "extranet", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUserLoginTypeRecord("7641d385-adf1-45b1-8b63-26977667f5b2"));
}
});

Object.defineProperty(LoginModel.staticEntities.userLoginType, "invalid", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUserLoginTypeRecord("c0ba4f36-4e8a-4887-8b63-0c35d8ab2fea"));
}
});

Object.defineProperty(LoginModel.staticEntities.userLoginType, "identityService", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUserLoginTypeRecord("daa3210d-550c-47eb-8498-de06f65f1db8"));
}
});

});
