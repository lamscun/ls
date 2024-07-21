require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "Login.appDefinition", "OutSystems/ClientRuntime/NullDebugger"], function (OutSystems, LoginAppDefinition, NullDebugger) {
var OS = OutSystems.Internal;
OS.Settings.setPlatformSettings({
IndexedDBOffline: false,
UseNewWebSQLImpl: false,
SendEnvParamOnManifestRequest: true
});
if(OS.Navigation.ensureRequestSecurity()) {
return;
}

OS.Application.initialize(LoginAppDefinition, OS.Interfaces.Application.InitializationType.Full, new OS.Format.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new OS.Format.NumberFormatInfo(".", "")).then(function (success) {
function initViewPromise() {
return OS.Flow.promise(function (resolve, reject) {
require(["OutSystems/ReactView/Main"], function (OSView) {
try {OSView.Router.load(OS.Application);
resolve();
} catch (error) {
reject(error);
}

});
});
};
if(success) {
return initViewPromise();
}


}).catch(function (error) {
OS.ErrorHandling.handleError(error);
});
});
});

