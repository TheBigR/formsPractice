import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VActionComponent } from './components/v-action/v-action.component';
import { StoreModule } from '@ngrx/store';
import { vactionsFeatureKey } from './store/vAction.selector';
import { vActionReducer } from './store/vAction.reducer';
import { vendorsStoreKey } from './store/vendor.selector';
import { vendorReducer } from './store/vendor.reducer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { vActionConfig, vactionConfigFactory } from './config/vaction.config';
import { FEConfigCoreService } from '../core/service/configCore.service';

@NgModule({
  declarations: [VActionComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(vactionsFeatureKey, vActionReducer),
    StoreModule.forFeature(vendorsStoreKey, vendorReducer),
    DragDropModule
  ],
  providers: [
    {
      provide: vActionConfig,
      useFactory: vactionConfigFactory,
      deps: [FEConfigCoreService, 'vaction-key']
    }
  ]
})
export class VehicleActionModule { }
