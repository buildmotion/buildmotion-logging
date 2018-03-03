import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loggingServiceConfig } from './logging.service.config';
import { LoggingService } from './logging.service';
var BuildMotionLoggingModule = /** @class */ (function () {
    function BuildMotionLoggingModule() {
    }
    BuildMotionLoggingModule.decorators = [
        {
            type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [],
                exports: [],
                schemas: [NO_ERRORS_SCHEMA],
            },]
        },
    ];
    return BuildMotionLoggingModule;
}());
export { BuildMotionLoggingModule };
//# sourceMappingURL=buildmotion-logging.module.js.map