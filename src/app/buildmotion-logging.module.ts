import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BuildMotionLoggingModule {

  // static forRoot(applicationName: string): ModuleWithProviders {
  //   return {
  //     ngModule: BuildMotionLoggingModule,
  //     providers: [
  //       {provide: String, useValue: applicationName }
  //     ]
  //   };
  // }
}
