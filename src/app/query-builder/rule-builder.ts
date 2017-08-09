import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectionField, CheckboxField, Field, NumberField, SELECTION_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE, TEXT_FIELD_TYPE } from './models/query-builder.model';
import { QueryRule } from './models/query-rule.model';

@Component({
  selector: 'app-rule-builder',
  templateUrl: 'rule-builder.html',
})
export class RuleBuilderComponent implements OnInit {
  @Input() fields: Field[];
  @Input() rule: QueryRule;
  @Output() result = new EventEmitter<QueryRule>();
  @Output() delete = new EventEmitter<void>();

  edit = false;
  newModel = false;
  operations: string[] | null;
  values: string[] | null;
  backupModel: QueryRule;
  model: QueryRule;

  ngOnInit() {
    if (!this.rule) {
      this.model = {
        field: null,
        operation: null,
        value: null
      };
      this.edit = true;
      this.newModel = true;
    } else {
      this.model = Object.assign({}, this.rule);
      this.edit = false;
      this.newModel = false;
    }
  }

  submit() {
    this.result.emit(Object.assign({}, this.model));
    this.edit = false;
  }

  modify() {
    this.backupModel = Object.assign({}, this.model);
    this.edit = true;
  }

  cancel() {
    this.model = Object.assign({}, this.backupModel);
    this.edit = false;

    if (this.newModel) {
      this.deleteRule();
    }
  }

  deleteRule() {
    this.delete.emit();
  }

  resetValue() {
    this.model.operation = null;
    this.model.value = null;
  }

  selectOperation(operation) {
    this.model.operation = operation;
  }

  selectValue(value) {
    this.model.value = value;
  }
}
