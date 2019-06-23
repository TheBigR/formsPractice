import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FuelingModuleModule } from './modules/fueling-module/fueling-module.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FuelingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
