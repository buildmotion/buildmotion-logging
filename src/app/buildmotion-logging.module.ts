

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loggingServiceConfig } from './index'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class BuildMotionLoggingModule { 

  static forRoot(config: loggingServiceConfig): ModuleWithProviders {
    return {
      ngModule: BuildMotionLoggingModule,
      providers: [
        {provide: loggingServiceConfig, useValue: config }
      ]
    };
  }
}
