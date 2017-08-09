import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SelectionField, CheckboxField, Field, NumberField, SELECTION_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE, TEXT_FIELD_TYPE } from './models/query-builder.model';
import { QueryRule } from './models/query-rule.model';

@Component({
  selector: 'app-value-select',
  template: `
    <select class="form-control" (change)="">
      <option disabled selected>-- select a value --</option>
      <option *ngFor="let value of values" [value]="value">{{value}}</option>
    </select>
    <input *ngIf="!!values && values.length === 0" class="form-control" type="text"/>
  `,
})
export class ValueSelectComponent implements OnChanges {
  @Input() fieldType: string;
  @Output() selection = new EventEmitter<string>();

  values: string[];

  ngOnChanges(changes: SimpleChanges) {

  }

  getValues(type) {
    switch (this.fieldType) {
      case SELECTION_FIELD_TYPE:
        return [
          'is',
          'is not'
        ];

      default: return null;
    }
  }
}

