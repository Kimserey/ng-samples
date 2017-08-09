import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SelectionField, CheckboxField, Field, NumberField, SELECTION_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE, TEXT_FIELD_TYPE } from '../models/query-builder.model';
import { QueryRule } from '../models/query-rule.model';

@Component({
  selector: 'app-value-select',
  template: `
    <select class="form-control" *ngIf="(values$ | async).length > 0; else textInput" [ngModel]="initialValue" (ngModelChange)="select($event)">
      <option *ngFor="let value of values$ | async" [value]="value">{{value}}</option>
    </select>
    <ng-template #textInput>
      <input class="form-control" type="text" [ngModel]="initialValue" (ngModelChange)="select($event.target.value)"/>
    </ng-template>
  `,
})
export class ValueSelectComponent implements OnChanges {
  @Input() fieldType: string;
  @Input() initialValue: string;
  @Output() selection = new EventEmitter<string>();

  values$: Observable<string[]>;

  select(value) {
    this.selection.emit(value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fieldType']) {
      this.values$ = this.getValues(changes['fieldType'].currentValue);
    }
  }

  getValues(type) {
    switch (this.fieldType) {
      case TEXT_FIELD_TYPE:
      case NUMBER_FIELD_TYPE:
        return of([]);

      case CHECKBOX_FIELD_TYPE:
        return of(['True', 'False']);

      case SELECTION_FIELD_TYPE:
        // get values from a service
        return of(['MS-1', 'MS-2']);

      default:
        return null;
    }
  }
}

