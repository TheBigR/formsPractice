import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FuelingModuleModule } from './modules/fueling-module/fueling-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FuelingModuleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
