import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Query, Or, And, Rule } from './query-builder.model';

@Component({
  template: `
    <pre>{{model|json}}</pre>
  `
})
export class QueryBuilderModelingComponent implements OnInit {
  model: Query;

  ngOnInit() {
    this.model = new Or([
      <Rule> {
        field: 'hostname',
        operator: 'equal',
        value: 'sss.ape.com'
      },
      new And([
        <Rule> {
          field: 'creationDate',
          operator: 'equal',
          value: '2017-08-15'
        },
        <Rule> {
          field: 'creationDate',
          operator: 'equal',
          value: '2017-08-15'
        }
      ])
    ]);
  }
}
