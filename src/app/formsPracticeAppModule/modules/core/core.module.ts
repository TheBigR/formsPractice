import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { configFactory, DATA_KEY } from './config/app.config';
import { FEConfigCoreService } from './service/configCore.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    {provide: DATA_KEY, useValue: 'defaultData'},
    {
      provide: '',
      useFactory: configFactory,
      deps: [FEConfigCoreService, DATA_KEY]
    }
  ]
})
export class CoreModule { }
