import { Injectable, Optional } from '@angular/core';
import { loggingServiceConfig } from './logging.service.config';
import { Severity } from './severity.enum';
var LoggingService = /** @class */ (function () {
    /**
     * The [LoggingService] constructor.
     */
    function LoggingService(config) {
        this.config = config;
        this.applicationName = 'AngularApplication';
        this.serviceName = 'LoggingService';
        this.log(this.serviceName, Severity.Information, "Starting logging service at: " + this.timestamp);
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
    LoggingService.prototype.log = function (source, severity, message) {
        this.source = this.applicationName + "." + source;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        var msg = "" + this.message;
        console.log(this.severity + " from " + this.source + ": " + msg + " (" + this.timestamp + ")");
    };
    LoggingService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoggingService.ctorParameters = function () { return [
        { type: loggingServiceConfig, decorators: [{ type: Optional },] },
    ]; };
    return LoggingService;
}());
export { LoggingService };
//# sourceMappingURL=logging.service.js.map