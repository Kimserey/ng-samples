import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Query, Group, Rule } from './models';

@Component({
  template: `
    <div class="container">
      <app-query [model]="model" [isParent]="true"></app-query>

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
    this.model = <Group>{
      condition: 'AND',
      queries: [<Rule>{
        field: 'hostname',
        operator: 'equal',
        value: '.com'
      },
      <Group>{
        condition: 'OR',
        queries: [<Rule>{
          field: 'creationDate',
          operator: 'equal',
          value: '2017-08-15'
        }, <Rule>{
          field: 'creationDate',
          operator: 'equal',
          value: '2017-08-15'
        }]
      }
      ]
    };
  }
}
