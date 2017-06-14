import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './simple-form.component';
import { NotACarrotValidatorDirective } from './name-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SimpleFormComponent,
    NotACarrotValidatorDirective
  ],
  exports: [
    SimpleFormComponent
  ]
})
export class ReactiveFormPlaygroundModule { }
