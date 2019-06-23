import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelingFormComponent } from './components/fueling-form/fueling-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FuelingFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FuelingFormComponent
  ]

})
export class FuelingModuleModule { }
