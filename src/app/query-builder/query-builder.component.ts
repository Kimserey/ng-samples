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
  rules: QueryRule[] = [{
      label: 'MEMBER SITE',
      operation: 'IS NOT',
      value: 'SSS-SEA-1'
    },
    {
      label: 'IS ENABLED',
      operation: 'IS',
      value: 'FALSE'
    }];
  constructor(private fb: FormBuilder) { }

    // (MEMBERSITE::IS NOT::SSS-SEA-1) AND

  ngOnInit() {
    this.fields$ = of([
      <SelectionField>{ label: 'MEMBER SITE', type: SELECTION_FIELD_TYPE, entity: 'MEMBERSITE' },
      <NumberField>{ label: 'NUMBER OF VIP', type: NUMBER_FIELD_TYPE },
      <CheckboxField>{ label: 'IS ENABLED', type: CHECKBOX_FIELD_TYPE }
    ]);
  }

  addRule() {
    this.rules.push(null);
  }

  updateResult(i, result) {
    const rule = this.rules[i];
    rule.label = result.label;
    rule.operation = result.operation;
    rule.value = result.value;
  }

  deleteRule(i) {
    this.rules = this.rules.filter((x, index) => index !== i);
  }
}

