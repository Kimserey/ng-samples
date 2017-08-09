import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SelectionField, CheckboxField, Field, NumberField, SELECTION_FIELD_TYPE, CHECKBOX_FIELD_TYPE, NUMBER_FIELD_TYPE } from './models/query-builder.model';
import { QueryRule } from './models/query-rule.model';

@Component({
  selector: 'app-query-builder',
  templateUrl: 'query-builder.html',
  styles: [
    `.condition-clause {
        border-bottom: .15em solid black;
    }`
  ]
})
export class QueryBuilderComponent {
  @Input() fields: Field[];
  @Input() rules: QueryRule[];
  @Output() result = new EventEmitter<QueryRule[]>();

  addRule() {
    this.rules.push(null);
  }

  updateResult(i, result) {
    this.rules[i] = result;
    this.result.emit(this.rules);
  }

  deleteRule(i) {
    this.rules = this.rules.filter((x, index) => index !== i);
    this.result.emit(this.rules);
  }
}

