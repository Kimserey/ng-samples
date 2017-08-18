import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Query, Condition, Rule } from './models';

@Component({
  template: `
    <pre>{{condition|json}}</pre>
  `
})
export class ConditionComponent {
  @Input() condition: Condition;
}
