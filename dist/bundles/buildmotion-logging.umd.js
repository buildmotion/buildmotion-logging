(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@buildmotion/logging', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.buildmotion = global.buildmotion || {}, global.buildmotion.logging = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var BuildMotionLoggingModule = (function () {
    function BuildMotionLoggingModule() {
    }
    return BuildMotionLoggingModule;
}());
BuildMotionLoggingModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [],
                exports: [],
                schemas: [core.NO_ERRORS_SCHEMA]
            },] },
];
BuildMotionLoggingModule.ctorParameters = function () { return []; };
var LoggingService = (function () {
    function LoggingService() {
        this.applicationName = 'Angularlicio.us';
        this.serviceName = 'LoggingService';
    }
    LoggingService.prototype.log = function (source, severity, message) {
        this.source = this.applicationName + "." + source;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        var msg = "" + this.message;
        console.log(this.severity + " from " + this.source + ": " + msg + " (" + this.timestamp + ")");
    };
    return LoggingService;
}());
LoggingService.decorators = [
    { type: core.Injectable },
];
LoggingService.ctorParameters = function () { return []; };
var Severity = {
    Information: 1,
    Warning: 2,
    Error: 3,
    Critical: 4,
    Debug: 5,
};
Severity[Severity.Information] = "Information";
Severity[Severity.Warning] = "Warning";
Severity[Severity.Error] = "Error";
Severity[Severity.Critical] = "Critical";
Severity[Severity.Debug] = "Debug";

exports.BuildMotionLoggingModule = BuildMotionLoggingModule;
exports.LoggingService = LoggingService;
exports.Severity = Severity;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=buildmotion-logging.umd.js.map
