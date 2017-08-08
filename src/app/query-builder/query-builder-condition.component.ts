import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, TEXT_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE, SELECTION_FIELD_TYPE, QueryRule } from './query-builder.component';

@Component({
  selector: 'app-query-builder-condition',
  templateUrl: 'query-builder-condition.component.html',
})
export class QueryBuilderConditionComponent {
  @Input() fields: Field[];
  @Output() result = new EventEmitter<QueryRule>();

  operations: string[] | null;
  values: string[] | null;

  field: Field;
  operation: string;
  value: string;

  updateValues() {
    this.result.emit({
      label: this.field.label,
      operation: this.operation,
      value: this.value
    });
  }

  updateOperationAndValue() {
    switch (this.field.type) {
      case TEXT_FIELD_TYPE:
        this.operations = ['IS', 'IS NOT', 'MATCH'];
        this.values = [];
        break;

      case CHECKBOX_FIELD_TYPE:
        this.operations = ['IS', 'IS NOT'];
        this.values = ['TRUE', 'FALSE'];
        break;

      case NUMBER_FIELD_TYPE:
        this.operations = ['EQUALS', 'INFERIOR', 'SUPERIOR'];
        this.values = [];
        break;

      case SELECTION_FIELD_TYPE:
        this.operations = ['IS', 'IS NOT'];
        this.values = ['SSS-SEA-1', 'SSS-SEA-2'];
        break;

      default:
        this.operations = null;
        this.values = null;
        break;
    }
  }
}
