(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.buildmotionLogging = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var loggingServiceConfig = /** @class */ (function () {
    function loggingServiceConfig(applicationName) {
        this.applicationName = applicationName;
    }
    return loggingServiceConfig;
}());

var BuildMotionLoggingModule = /** @class */ (function () {
    function BuildMotionLoggingModule() {
    }
    BuildMotionLoggingModule.forRoot = function (config) {
        return {
            ngModule: BuildMotionLoggingModule,
            providers: [
                { provide: loggingServiceConfig, useValue: config }
            ]
        };
    };
    return BuildMotionLoggingModule;
}());

(function (Severity) {
    Severity[Severity["Information"] = 1] = "Information";
    Severity[Severity["Warning"] = 2] = "Warning";
    Severity[Severity["Error"] = 3] = "Error";
    Severity[Severity["Critical"] = 4] = "Critical";
    Severity[Severity["Debug"] = 5] = "Debug";
})(exports.Severity || (exports.Severity = {}));

var LoggingService = /** @class */ (function () {
    /**
     * The [LoggingService] constructor.
     */
    function LoggingService(config) {
        this.config = config;
        this.log(this.serviceName, exports.Severity.Information, "Starting logging service at: " + this.timestamp);
        if (config && config.applicationName) {
            this.applicationName = config.applicationName;
        }
    }
    /**
     * Use this method to send a log message with severity and source information
     * to the application's logger.
     *
     * If the application environment mode is [Production], the information will
     * be sent to a centralized repository.
     *
     * @param source
     * @param severity
     * @param message
     */
    /**
         * Use this method to send a log message with severity and source information
         * to the application's logger.
         *
         * If the application environment mode is [Production], the information will
         * be sent to a centralized repository.
         *
         * @param source
         * @param severity
         * @param message
         */
    LoggingService.prototype.log = /**
         * Use this method to send a log message with severity and source information
         * to the application's logger.
         *
         * If the application environment mode is [Production], the information will
         * be sent to a centralized repository.
         *
         * @param source
         * @param severity
         * @param message
         */
    function (source, severity, message) {
        this.source = this.applicationName + "." + source;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        var msg = "" + this.message;
        console.log(this.severity + " from " + this.source + ": " + msg + " (" + this.timestamp + ")");
    };
    return LoggingService;
}());

exports.BuildMotionLoggingModule = BuildMotionLoggingModule;
exports.LoggingService = LoggingService;
exports.loggingServiceConfig = loggingServiceConfig;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=buildmotion-logging.umd.js.map
