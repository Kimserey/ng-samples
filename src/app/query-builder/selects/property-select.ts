import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SelectionField, CheckboxField, Field, NumberField, SELECTION_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE } from '../models/query-builder.model';
import { QueryRule } from '../models/query-rule.model';

@Component({
  selector: 'app-property-select',
  template: `
    <select class="form-control" [ngModel]="initialValue" (ngModelChange)="select($event)">
      <option *ngFor="let field of fields" [value]="field.label">{{field.label}}</option>
    </select>
  `
})
export class PropertySelectComponent {
  @Input() fields: Field[];
  @Input() initialValue: string;
  @Output() selection = new EventEmitter<Field>();

  select(value) {
    if (this.fields.some(f => f.label === value)) {
      const field = this.fields.find(f => f.label === value);
      this.selection.emit(field);
    }
  }
}
