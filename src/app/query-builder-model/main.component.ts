import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Query, Or, And, Rule } from './models';

@Component({
  template: `
    <div class="container">
      <app-query [model]="model"></app-query>

      <pre class="bg-light">
      {{model|json}}
      </pre>

    </div>
  `,
  selector: 'app-query-builder'
})
export class MainModelingComponent implements OnInit {
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
