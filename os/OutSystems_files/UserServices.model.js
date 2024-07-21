define("UserServices.model$Post_UserConfirmationRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var Post_UserConfirmationRec = (function (_super) {
__extends(Post_UserConfirmationRec, _super);
function Post_UserConfirmationRec(defaults) {
_super.apply(this, arguments);
}
Post_UserConfirmationRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Token", "tokenAttr", "Token", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsConfirmed", "isConfirmedAttr", "IsConfirmed", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("EmailSentOn", "emailSentOnAttr", "EmailSentOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Email", "emailAttr", "Email", true, false, OS.Types.Email, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsProcessed", "isProcessedAttr", "IsProcessed", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Post_UserConfirmationRec.init();
return Post_UserConfirmationRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.Post_UserConfirmationRec = Post_UserConfirmationRec;

});
define("UserServices.model$UserDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var UserDetailsRec = (function (_super) {
__extends(UserDetailsRec, _super);
function UserDetailsRec(defaults) {
_super.apply(this, arguments);
}
UserDetailsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.Types.Integer, function () {
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
this.attr("MarketingComAcceptanceStatus", "marketingComAcceptanceStatusAttr", "MarketingComAcceptanceStatus", false, false, OS.Types.Integer, function () {
return OS.BuiltinFunctions.integerToIdentifier(1);
}, true), 
this.attr("IdentityServiceUserGUID", "identityServiceUserGUIDAttr", "IdentityServiceUserGUID", false, false, OS.Types.Text, function () {
return "";
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
this.attr("UserSignupPageId", "userSignupPageIdAttr", "UserSignupPageId", false, false, OS.Types.Integer, function () {
return 0;
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
}, true), 
this.attr("JobTitle", "jobTitleAttr", "JobTitle", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsJobTitleFromZoomInfo", "isJobTitleFromZoomInfoAttr", "IsJobTitleFromZoomInfo", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserDetailsRec.init();
return UserDetailsRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.UserDetailsRec = UserDetailsRec;

});
define("UserServices.model$Post_UserResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Portal_Utils.model", "UserServices.model$UserDetailsRec", "Portal_Utils.model$ErrorRec", "UserServices.referencesHealth", "UserServices.referencesHealth$Portal_Utils"], function (exports, OutSystems, UserServicesModel, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var Post_UserResponseRec = (function (_super) {
__extends(Post_UserResponseRec, _super);
function Post_UserResponseRec(defaults) {
_super.apply(this, arguments);
}
Post_UserResponseRec.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.UserDetailsRec());
}, true, UserServicesModel.UserDetailsRec), 
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_UtilsModel.ErrorRec());
}, true, Portal_UtilsModel.ErrorRec), 
this.attr("RedirectURL", "redirectURLAttr", "RedirectURL", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Post_UserResponseRec.init();
return Post_UserResponseRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.Post_UserResponseRec = Post_UserResponseRec;

});
define("UserServices.model$UTM_ValuesRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var UTM_ValuesRec = (function (_super) {
__extends(UTM_ValuesRec, _super);
function UTM_ValuesRec(defaults) {
_super.apply(this, arguments);
}
UTM_ValuesRec.attributesToDeclare = function () {
return [
this.attr("ppcSource", "ppcSourceAttr", "ppcSource", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ppcMedium", "ppcMediumAttr", "ppcMedium", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ppcCampaign", "ppcCampaignAttr", "ppcCampaign", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ppcAdGroup", "ppcAdGroupAttr", "ppcAdGroup", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ppcKeyword", "ppcKeywordAttr", "ppcKeyword", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ppcContent", "ppcContentAttr", "ppcContent", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ppcGCLID", "ppcGCLIDAttr", "ppcGCLID", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ppcPartner", "ppcPartnerAttr", "ppcPartner", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ppcCampaignTeam", "ppcCampaignTeamAttr", "ppcCampaignTeam", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ppcAdid", "ppcAdidAttr", "ppcAdid", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UTM_ValuesRec.init();
return UTM_ValuesRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.UTM_ValuesRec = UTM_ValuesRec;

});
define("UserServices.model$Put_User_ExtendedRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var Put_User_ExtendedRec = (function (_super) {
__extends(Put_User_ExtendedRec, _super);
function Put_User_ExtendedRec(defaults) {
_super.apply(this, arguments);
}
Put_User_ExtendedRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", true, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("OnboardDismiss", "onboardDismissAttr", "OnboardDismiss", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IdentityServiceUserGUID", "identityServiceUserGUIDAttr", "IdentityServiceUserGUID", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("StateId", "stateIdAttr", "StateId", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Company", "companyAttr", "Company", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TryingOSReason", "tryingOSReasonAttr", "TryingOSReason", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TraceId", "traceIdAttr", "TraceId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("UserSignupPageId", "userSignupPageIdAttr", "UserSignupPageId", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("isSSInstalled", "isSSInstalledAttr", "isSSInstalled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("OnboardExtended", "onboardExtendedAttr", "OnboardExtended", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("PartnerId", "partnerIdAttr", "PartnerId", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("JobTitle", "jobTitleAttr", "JobTitle", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Put_User_ExtendedRec.init();
return Put_User_ExtendedRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.Put_User_ExtendedRec = Put_User_ExtendedRec;

});
define("UserServices.model$MarketoEventsRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var MarketoEventsRec = (function (_super) {
__extends(MarketoEventsRec, _super);
function MarketoEventsRec(defaults) {
_super.apply(this, arguments);
}
MarketoEventsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Text, function () {
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
MarketoEventsRec.init();
return MarketoEventsRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.MarketoEventsRec = MarketoEventsRec;

});
define("UserServices.model$UserLoginTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var UserLoginTypeRec = (function (_super) {
__extends(UserLoginTypeRec, _super);
function UserLoginTypeRec(defaults) {
_super.apply(this, arguments);
}
UserLoginTypeRec.attributesToDeclare = function () {
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
UserLoginTypeRec.init();
return UserLoginTypeRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.UserLoginTypeRec = UserLoginTypeRec;

});
define("UserServices.model$Post_User_BasicResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model", "UserServices.model", "Portal_Utils.model$ErrorRec", "UserServices.referencesHealth", "UserServices.referencesHealth$Portal_Utils"], function (exports, OutSystems, Portal_UtilsModel, UserServicesModel) {
var OS = OutSystems.Internal;
var Post_User_BasicResponseRec = (function (_super) {
__extends(Post_User_BasicResponseRec, _super);
function Post_User_BasicResponseRec(defaults) {
_super.apply(this, arguments);
}
Post_User_BasicResponseRec.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_UtilsModel.ErrorRec());
}, true, Portal_UtilsModel.ErrorRec), 
this.attr("IsSuccess", "isSuccessAttr", "IsSuccess", false, false, OS.Types.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Post_User_BasicResponseRec.init();
return Post_User_BasicResponseRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.Post_User_BasicResponseRec = Post_User_BasicResponseRec;

});
define("UserServices.model$UserConfirmationResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "User_CS.model", "Portal_Utils.model", "UserServices.model", "User_CS.model$UserConfirmationRec", "UserServices.referencesHealth", "UserServices.referencesHealth$User_CS", "Portal_Utils.model$ErrorRec", "UserServices.referencesHealth$Portal_Utils"], function (exports, OutSystems, User_CSModel, Portal_UtilsModel, UserServicesModel) {
var OS = OutSystems.Internal;
var UserConfirmationResponseRec = (function (_super) {
__extends(UserConfirmationResponseRec, _super);
function UserConfirmationResponseRec(defaults) {
_super.apply(this, arguments);
}
UserConfirmationResponseRec.attributesToDeclare = function () {
return [
this.attr("UserConfirmation", "userConfirmationAttr", "UserConfirmation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new User_CSModel.UserConfirmationRec());
}, true, User_CSModel.UserConfirmationRec), 
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_UtilsModel.ErrorRec());
}, true, Portal_UtilsModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
UserConfirmationResponseRec.init();
return UserConfirmationResponseRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.UserConfirmationResponseRec = UserConfirmationResponseRec;

});
define("UserServices.model$Post_User_BasicRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var Post_User_BasicRec = (function (_super) {
__extends(Post_User_BasicRec, _super);
function Post_User_BasicRec(defaults) {
_super.apply(this, arguments);
}
Post_User_BasicRec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("email", "emailAttr", "email", false, false, OS.Types.Email, function () {
return "";
}, true), 
this.attr("IdentityServiceUserGUID", "identityServiceUserGUIDAttr", "IdentityServiceUserGUID", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("GUID", "gUIDAttr", "GUID", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Post_User_BasicRec.init();
return Post_User_BasicRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.Post_User_BasicRec = Post_User_BasicRec;

});
define("UserServices.model$UserConfirmationDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var UserConfirmationDetailsRec = (function (_super) {
__extends(UserConfirmationDetailsRec, _super);
function UserConfirmationDetailsRec(defaults) {
_super.apply(this, arguments);
}
UserConfirmationDetailsRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsConfirmed", "isConfirmedAttr", "IsConfirmed", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("EmailSentOn", "emailSentOnAttr", "EmailSentOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Token", "tokenAttr", "Token", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsProcessed", "isProcessedAttr", "IsProcessed", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("Success", "successAttr", "Success", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserConfirmationDetailsRec.init();
return UserConfirmationDetailsRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.UserConfirmationDetailsRec = UserConfirmationDetailsRec;

});
define("UserServices.model$Post_UserRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var Post_UserRec = (function (_super) {
__extends(Post_UserRec, _super);
function Post_UserRec(defaults) {
_super.apply(this, arguments);
}
Post_UserRec.attributesToDeclare = function () {
return [
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
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("StateCode", "stateCodeAttr", "StateCode", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Company", "companyAttr", "Company", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TryingOSReason", "tryingOSReasonAttr", "TryingOSReason", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IdentityServiceUserGUID", "identityServiceUserGUIDAttr", "IdentityServiceUserGUID", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MarketingComAcceptanceStatus", "marketingComAcceptanceStatusAttr", "MarketingComAcceptanceStatus", false, false, OS.Types.Integer, function () {
return UserServicesModel.staticEntities.acceptanceStatus.pending;
}, true), 
this.attr("Origin", "originAttr", "Origin", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Uc_LandingPage", "uc_LandingPageAttr", "Uc_LandingPage", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("PartnerId", "partnerIdAttr", "PartnerId", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("OnboardExtended", "onboardExtendedAttr", "OnboardExtended", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("HasCustomerPortal", "hasCustomerPortalAttr", "HasCustomerPortal", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("OldExtranetUserId", "oldExtranetUserIdAttr", "OldExtranetUserId", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("JobTitle", "jobTitleAttr", "JobTitle", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsJobTitleFromZoomInfo", "isJobTitleFromZoomInfoAttr", "IsJobTitleFromZoomInfo", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Post_UserRec.init();
return Post_UserRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.Post_UserRec = Post_UserRec;

});
define("UserServices.model$UserType_ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model", "UserServices.model", "Portal_Utils.model$ErrorRec", "UserServices.referencesHealth", "UserServices.referencesHealth$Portal_Utils"], function (exports, OutSystems, Portal_UtilsModel, UserServicesModel) {
var OS = OutSystems.Internal;
var UserType_ResultRec = (function (_super) {
__extends(UserType_ResultRec, _super);
function UserType_ResultRec(defaults) {
_super.apply(this, arguments);
}
UserType_ResultRec.attributesToDeclare = function () {
return [
this.attr("UserLoginTypeId", "userLoginTypeIdAttr", "UserLoginTypeId", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_UtilsModel.ErrorRec());
}, true, Portal_UtilsModel.ErrorRec), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserType_ResultRec.init();
return UserType_ResultRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.UserType_ResultRec = UserType_ResultRec;

});
define("UserServices.model$Put_UserRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model"], function (exports, OutSystems, UserServicesModel) {
var OS = OutSystems.Internal;
var Put_UserRec = (function (_super) {
__extends(Put_UserRec, _super);
function Put_UserRec(defaults) {
_super.apply(this, arguments);
}
Put_UserRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.Types.Email, function () {
return "";
}, true), 
this.attr("isActive", "isActiveAttr", "isActive", false, false, OS.Types.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Put_UserRec.init();
return Put_UserRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.Put_UserRec = Put_UserRec;

});
define("UserServices.model$Put_UserResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Portal_Utils.model", "UserServices.model$UserDetailsRec", "Portal_Utils.model$ErrorRec", "UserServices.referencesHealth", "UserServices.referencesHealth$Portal_Utils"], function (exports, OutSystems, UserServicesModel, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var Put_UserResponseRec = (function (_super) {
__extends(Put_UserResponseRec, _super);
function Put_UserResponseRec(defaults) {
_super.apply(this, arguments);
}
Put_UserResponseRec.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.UserDetailsRec());
}, true, UserServicesModel.UserDetailsRec), 
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_UtilsModel.ErrorRec());
}, true, Portal_UtilsModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
Put_UserResponseRec.init();
return Put_UserResponseRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.Put_UserResponseRec = Put_UserResponseRec;

});
define("UserServices.model$User_Extended_ResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Portal_Utils.model", "UserServices.model", "Portal_Utils.model$ErrorRec", "UserServices.referencesHealth", "UserServices.referencesHealth$Portal_Utils"], function (exports, OutSystems, Portal_UtilsModel, UserServicesModel) {
var OS = OutSystems.Internal;
var User_Extended_ResponseRec = (function (_super) {
__extends(User_Extended_ResponseRec, _super);
function User_Extended_ResponseRec(defaults) {
_super.apply(this, arguments);
}
User_Extended_ResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", true, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("OnboardDismiss", "onboardDismissAttr", "OnboardDismiss", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IdentityServiceUserGUID", "identityServiceUserGUIDAttr", "IdentityServiceUserGUID", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MarketingQstAcceptanceStatus", "marketingQstAcceptanceStatusAttr", "MarketingQstAcceptanceStatus", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("StateId", "stateIdAttr", "StateId", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Company", "companyAttr", "Company", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TryingOSReason", "tryingOSReasonAttr", "TryingOSReason", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TraceId", "traceIdAttr", "TraceId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_UtilsModel.ErrorRec());
}, true, Portal_UtilsModel.ErrorRec), 
this.attr("UserSignupPageId", "userSignupPageIdAttr", "UserSignupPageId", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("isSSInstalled", "isSSInstalledAttr", "isSSInstalled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("OnboardExtended", "onboardExtendedAttr", "OnboardExtended", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("PartnerId", "partnerIdAttr", "PartnerId", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HasCustomerPortal", "hasCustomerPortalAttr", "HasCustomerPortal", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
User_Extended_ResponseRec.init();
return User_Extended_ResponseRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.User_Extended_ResponseRec = User_Extended_ResponseRec;

});
define("UserServices.model$Get_UserResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "UserServices.model", "Portal_Utils.model", "UserServices.model$UserDetailsRec", "Portal_Utils.model$ErrorRec", "UserServices.referencesHealth", "UserServices.referencesHealth$Portal_Utils"], function (exports, OutSystems, UserServicesModel, Portal_UtilsModel) {
var OS = OutSystems.Internal;
var Get_UserResponseRec = (function (_super) {
__extends(Get_UserResponseRec, _super);
function Get_UserResponseRec(defaults) {
_super.apply(this, arguments);
}
Get_UserResponseRec.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UserServicesModel.UserDetailsRec());
}, true, UserServicesModel.UserDetailsRec), 
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Portal_UtilsModel.ErrorRec());
}, true, Portal_UtilsModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
Get_UserResponseRec.init();
return Get_UserResponseRec;
})(OS.DataTypes.GenericRecord);
UserServicesModel.Get_UserResponseRec = Get_UserResponseRec;

});
define("UserServices.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UserServicesModel = exports;
});
