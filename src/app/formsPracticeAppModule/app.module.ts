import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FuelingModuleModule } from './modules/fueling-module/fueling-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FuelingModuleModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
