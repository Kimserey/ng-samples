import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SelectionField, CheckboxField, Field, NumberField, SELECTION_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE, TEXT_FIELD_TYPE } from './models/query-builder.model';
import { QueryRule } from './models/query-rule.model';

@Component({
  selector: 'app-operation-select',
  template: `
    <select class="form-control" (change)="selectOperation($event.target.value)">
      <option *ngFor="let operation of operations" [value]="operation">{{operation}}</option>
    </select>
  `,
})
export class OperationSelectComponent implements OnChanges {
  @Input() fieldType: string;
  @Output() selection = new EventEmitter<string>();

  operations: string[];

  selectOperation(operation) {
    this.selection.emit(operation);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fieldType']) {
      this.operations = this.getOperations(changes['fieldType'].currentValue);
      this.selectOperation(this.operations[0]);
    }
  }

  getOperations(type) {
    switch (this.fieldType) {
      case TEXT_FIELD_TYPE:
        return [
          'is',
          'is not',
          'match'
        ];

      case CHECKBOX_FIELD_TYPE:
        return [
          'is',
          'is not'
        ];

      case NUMBER_FIELD_TYPE:
        return [
          '=',
          '<',
          '<=',
          '>',
          '>='
        ];

      case SELECTION_FIELD_TYPE:
        return [
          'is',
          'is not'
        ];

      default:
        throw new TypeError(`Field type ${this.fieldType} not supported`);
    }
  }
}

