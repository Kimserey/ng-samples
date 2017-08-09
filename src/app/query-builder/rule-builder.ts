import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectionField, CheckboxField, Field, NumberField, SELECTION_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE, TEXT_FIELD_TYPE } from './query-builder.model';
import { QueryRule } from './query-rule.model';

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
  operations: string[] | null;
  values: string[] | null;

  formModel: QueryRule;

  get diagnostic() { return JSON.stringify(this.formModel); }

  ngOnInit() {
    if (!!this.rule) {
      this.formModel = {
        field: this.fields[0],
        operation: null,
        value: null
      };
    } else {
      this.formModel = Object.assign({}, this.rule);
    }

    this.updateOperationsAndValues();
  }

  submit() {
    this.result.emit(Object.assign({}, this.formModel));
    this.edit = false;
  }

  cancel() {
    this.edit = false;
  }

  deleteRule() {
    this.delete.emit();
  }

  updateOperationsAndValues() {
    switch (this.formModel.field.type) {
      case TEXT_FIELD_TYPE:
        this.operations = ['is', 'is not', 'match'];
        this.values = [];
        break;

      case CHECKBOX_FIELD_TYPE:
        this.operations = ['is', 'is not'];
        this.values = ['True', 'False'];
        break;

      case NUMBER_FIELD_TYPE:
        this.operations = ['=', '<', '<=', '>', '>='];
        this.values = [];
        break;

      case SELECTION_FIELD_TYPE:
        this.operations = ['is', 'is not'];
        this.values = ['SSS-SEA-1', 'SSS-SEA-2'];
        break;

      default:
        this.operations = null;
        this.values = null;
        break;
    }
  }
}
