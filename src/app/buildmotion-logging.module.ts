import { ModuleWithProviders, NgModule } from '@angular/core';
import { loggingServiceConfig } from './logging.service.config'

@NgModule({
  imports: [],
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
