import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './simple-form.component';
import { NotACarrotValidatorDirective } from './name-validator.directive';
import { ComplexComponent } from './complex-form';
import { CalendarModule, ColorPickerModule, DropdownModule, SliderModule } from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CalendarModule,
    ColorPickerModule,
    DropdownModule,
    SliderModule
  ],
  declarations: [
    SimpleFormComponent,
    NotACarrotValidatorDirective,
    ComplexComponent,
  ],
  exports: [
    SimpleFormComponent
  ]
})
export class ReactiveFormPlaygroundModule { }
