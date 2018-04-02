import { NgModule, NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BuildMotionLoggingModule {
}
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
// static forRoot(applicationName: string): ModuleWithProviders {
//   return {
//     ngModule: BuildMotionLoggingModule,
//     providers: [
//       {provide: String, useValue: applicationName }
//     ]
//   };
// }
/** @nocollapse */
BuildMotionLoggingModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoggingService {
    constructor() {
        this.applicationName = 'Angularlicio.us';
        this.serviceName = 'LoggingService';
    }
    /**
     * Use this method to send a log message with severity and source information
     * to the application's logger.
     *
     * If the application environment mode is [Production], the information will
     * be sent to a centralized repository.
     *
     * @param {?} source
     * @param {?} severity
     * @param {?} message
     * @return {?}
     */
    log(source, severity, message) {
        this.source = `${this.applicationName}.${source}`;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        const /** @type {?} */ msg = `${this.message}`;
        console.log(`${this.severity} from ${this.source}: ${msg} (${this.timestamp})`);
    }
}
LoggingService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LoggingService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const Severity = {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { BuildMotionLoggingModule, LoggingService, Severity };
//# sourceMappingURL=buildmotion-logging.js.map
