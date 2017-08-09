import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QueryBuilderComponent } from './query-builder.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RuleBuilderComponent } from './rule-builder';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    QueryBuilderComponent,
    RuleBuilderComponent
  ],
  exports: [
  ]
})
export class QueryBuilderModule { }
