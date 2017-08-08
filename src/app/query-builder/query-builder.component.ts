import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export const TEXT_FIELD_TYPE = 'Text Field';
export const CHECKBOX_FIELD_TYPE = 'Checkbox Field';
export const NUMBER_FIELD_TYPE = 'Number Field';
export const SELECTION_FIELD_TYPE = 'Selection Field';

export interface TextField {
  label: string;
  type: string;
}

export interface CheckboxField {
  label: string;
  type: string;
}

export interface NumberField {
  label: string;
  type: string;
}

export interface SelectionField {
  label: string;
  entity: string;
  type: string;
}

export type Field =
  TextField
  | NumberField
  | CheckboxField
  | SelectionField;

export interface QueryRule {
  label: string;
  operation: string;
  value: string;
}

@Component({
  selector: 'app-query-builder',
  templateUrl: 'query-builder.component.html',
})
export class QueryBuilderComponent implements OnInit {
  fields$: Observable<Field[]>;
  rules: QueryRule[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fields$ = of([
      <SelectionField>{ label: 'MEMBER SITE', type: SELECTION_FIELD_TYPE, entity: 'MEMBERSITE' },
      <NumberField>{ label: 'NUMBER OF VIP', type: NUMBER_FIELD_TYPE },
      <CheckboxField>{ label: 'IS ENABLED', type: CHECKBOX_FIELD_TYPE }
    ]);
  }

  addRule() {
    this.rules.push({
      label: '',
      operation: '',
      value: ''
    });
  }

  updateResult(i, result) {
    const rule = this.rules[i];
    rule.label = result.label;
    rule.operation = result.operation;
    rule.value = result.value;
  }
}

