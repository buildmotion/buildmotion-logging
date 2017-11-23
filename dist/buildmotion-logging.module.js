import { ModuleWithProviders, NgModule } from '@angular/core';
import { loggingServiceConfig } from './logging.service.config';
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
export { BuildMotionLoggingModule };
//# sourceMappingURL=buildmotion-logging.module.js.map