import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SelectionField, CheckboxField, Field, NumberField, SELECTION_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE } from './models/query-builder.model';
import { QueryRule } from './models/query-rule.model';

@Component({
  selector: 'app-query-builder-main',
  template: `
  <app-query-builder
    [fields]="fields$ | async"
    [rules]="rules$ | async"
    (result)="submit($event)"></app-query-builder>
  `,
})
export class MainQueryBuilderComponent implements OnInit {
  fields$: Observable<Field[]>;
  rules$: Observable<QueryRule[]>;

  ngOnInit() {
    const msField: SelectionField = { label: 'MEMBER SITE', type: SELECTION_FIELD_TYPE, entity: 'MEMBERSITE' };
    const isEnField: CheckboxField = { label: 'IS ENABLED', type: CHECKBOX_FIELD_TYPE };

    this.fields$ = of([
      msField,
      <NumberField>{ label: 'NUMBER OF VIP', type: NUMBER_FIELD_TYPE },
      isEnField
    ]);

    this.rules$ = of([{
      field: msField,
      operation: 'is not',
      value: 'MS-1'
    },
    {
      field: isEnField,
      operation: 'is',
      value: 'FALSE'
    }]);
  }

  submit(rules) {
    console.log(JSON.stringify(rules));
  }
}

