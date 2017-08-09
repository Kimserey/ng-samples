import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SelectionField, CheckboxField, Field, NumberField, SELECTION_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE } from './query-builder.model';
import { QueryRule } from './query-rule.model';

@Component({
  selector: 'app-query-builder',
  templateUrl: 'query-builder.component.html',
})
export class QueryBuilderComponent implements OnInit {
  msField: SelectionField = { label: 'MEMBER SITE', type: SELECTION_FIELD_TYPE, entity: 'MEMBERSITE' };
  isEnField: CheckboxField = { label: 'IS ENABLED', type: CHECKBOX_FIELD_TYPE };

  fields$: Observable<Field[]>;
  rules: QueryRule[] = [{
      field: this.msField,
      operation: 'IS NOT',
      value: 'MS-1'
    },
    {
      field: this.isEnField,
      operation: 'IS',
      value: 'FALSE'
    }];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fields$ = of([
      this.msField,
      <NumberField>{ label: 'NUMBER OF VIP', type: NUMBER_FIELD_TYPE },
      this.isEnField
    ]);
  }

  addRule() {
    this.rules.push(null);
  }

  updateResult(i, result) {
    const rule = this.rules[i];
    rule.field = result.field;
    rule.operation = result.operation;
    rule.value = result.value;
  }

  deleteRule(i) {
    this.rules = this.rules.filter((x, index) => index !== i);
  }
}

