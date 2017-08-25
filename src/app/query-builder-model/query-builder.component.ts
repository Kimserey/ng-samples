import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Query, Group, Rule } from './models';

@Component({
  templateUrl: 'query-builder.component.html',
  selector: 'app-query'
})
export class QueryBuilderModelingComponent {
  @Input() model: Query;
  @Input() isParent: boolean;

  @Output() delete = new EventEmitter<void>();

  addRule() {
    (<Group>this.model).queries.push(<Rule>{
      field: '',
      operator: '',
      value: ''
    });
  }

  addGroup() {
    (<Group>this.model).queries.push(
      <Group>{
        condition: 'AND',
        queries: [{
          field: '',
          operator: '',
          value: ''
        }]
      }
    );
  }

  deleteQuery(index) {
    (<Group>this.model).queries = (<Group>this.model).queries.filter((q, i) => i !== index);
  }

  deleteRule() {
    this.delete.emit();
  }

  toggleCondition(condition) {
    (<Group>this.model).condition = condition;
  }
}
