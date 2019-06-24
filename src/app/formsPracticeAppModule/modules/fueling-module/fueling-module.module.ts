import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelingFormComponent } from './components/fueling-form/fueling-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { fuelingStoreKey } from './store/fueling.selector';
import { fuelingReducer } from './store/fueling.reducer';

@NgModule({
  declarations: [
    FuelingFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    StoreModule.forFeature(fuelingStoreKey, fuelingReducer)
  ],
  exports: [
    FuelingFormComponent
  ]

})
export class FuelingModuleModule { }
