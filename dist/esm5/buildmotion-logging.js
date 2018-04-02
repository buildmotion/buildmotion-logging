import { NgModule, NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

var BuildMotionLoggingModule = (function () {
    function BuildMotionLoggingModule() {
    }
    return BuildMotionLoggingModule;
}());
BuildMotionLoggingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [],
                exports: [],
                schemas: [NO_ERRORS_SCHEMA]
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
    { type: Injectable },
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

export { BuildMotionLoggingModule, LoggingService, Severity };
//# sourceMappingURL=buildmotion-logging.js.map
