import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from "@angular/core";

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BuildMotionLoggingModule {

  static forRoot(applicationName: string): ModuleWithProviders {
    return {
      ngModule: BuildMotionLoggingModule,
      providers: [
        {provide: String, useValue: applicationName }
      ]
    };
  }
}
