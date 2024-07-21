define("Login.LoginFlow.controller", ["exports", "OutSystems/ClientRuntime/Main", "Login.model", "Login.controller", "Login.Common.controller", "Login.clientVariables"], function (exports, OutSystems, LoginModel, LoginController, Login_CommonController, LoginClientVariables) {
var OS = OutSystems.Internal;
var Login_LoginFlowController = exports;
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
OS.Logger.trace("LoginFlow", OS.Exceptions.getMessage(ex), ex.name);
return Login_CommonController.default.handleError(ex, callContext);


};
return Controller;
})(OS.Controller.BaseController);
Login_LoginFlowController.default = new Controller();
});

