import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QueryBuilderComponent } from './query-builder.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QueryBuilderConditionComponent } from './query-builder-condition.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    QueryBuilderComponent,
    QueryBuilderConditionComponent
  ],
  exports: [
  ]
})
export class QueryBuilderModule { }
