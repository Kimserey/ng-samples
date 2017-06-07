import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './simple-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SimpleFormComponent
  ],
  exports: [
    SimpleFormComponent
  ]
})
export class ReactiveFormPlaygroundModule { }
