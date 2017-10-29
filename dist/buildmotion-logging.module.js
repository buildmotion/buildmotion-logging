import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loggingServiceConfig } from './index';
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
    BuildMotionLoggingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: []
                },] },
    ];
    /** @nocollapse */
    BuildMotionLoggingModule.ctorParameters = function () { return []; };
    return BuildMotionLoggingModule;
}());
export { BuildMotionLoggingModule };
//# sourceMappingURL=buildmotion-logging.module.js.map