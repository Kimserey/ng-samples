import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QueryBuilderComponent } from './query-builder';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RuleBuilderComponent } from './rule-builder';
import { BrowserModule } from '@angular/platform-browser';
import { MainQueryBuilderComponent } from './main';
import { OperationSelectComponent } from './operation-select';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    QueryBuilderComponent,
    RuleBuilderComponent,
    MainQueryBuilderComponent,
    OperationSelectComponent
  ],
  exports: [
  ]
})
export class QueryBuilderModule { }
