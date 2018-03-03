(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.buildmotionLogging = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

(function (Severity) {
    Severity[Severity["Information"] = 1] = "Information";
    Severity[Severity["Warning"] = 2] = "Warning";
    Severity[Severity["Error"] = 3] = "Error";
    Severity[Severity["Critical"] = 4] = "Critical";
    Severity[Severity["Debug"] = 5] = "Debug";
})(exports.Severity || (exports.Severity = {}));

var LoggingService = /** @class */ (function () {
    function LoggingService() {
    }
    /**
     * The [LoggingService] constructor.
     */
    // constructor(
    //     // @Optional() private config: loggingServiceConfig
    //     applicationName: string
    // ) {
    //     this.log(this.serviceName, Severity.Information, `Starting logging service at: ${this.timestamp}`);
    //     if(applicationName) {
    //         this.applicationName = applicationName;
    //     }
    // }
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
         * The [LoggingService] constructor.
         */
    // constructor(
    //     // @Optional() private config: loggingServiceConfig
    //     applicationName: string
    // ) {
    //     this.log(this.serviceName, Severity.Information, `Starting logging service at: ${this.timestamp}`);
    //     if(applicationName) {
    //         this.applicationName = applicationName;
    //     }
    // }
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
         * The [LoggingService] constructor.
         */
    // constructor(
    //     // @Optional() private config: loggingServiceConfig
    //     applicationName: string
    // ) {
    //     this.log(this.serviceName, Severity.Information, `Starting logging service at: ${this.timestamp}`);
    //     if(applicationName) {
    //         this.applicationName = applicationName;
    //     }
    // }
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

var BuildMotionLoggingModule = /** @class */ (function () {
    function BuildMotionLoggingModule() {
    }
    BuildMotionLoggingModule.decorators = [
        {
            type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [],
                exports: [],
                schemas: [core.NO_ERRORS_SCHEMA],
            },]
        },
    ];
    return BuildMotionLoggingModule;
}());

exports.BuildMotionLoggingModule = BuildMotionLoggingModule;
exports.LoggingService = LoggingService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=buildmotion-logging.umd.js.map
