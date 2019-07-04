import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FuelingModuleModule } from './modules/fueling-module/fueling-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { VehicleActionModule } from './modules/vehicle-action/vehicle-action.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FuelingModuleModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    VehicleActionModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
