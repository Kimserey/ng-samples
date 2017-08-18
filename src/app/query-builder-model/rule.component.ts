import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Query, Or, And, Rule } from './models';

@Component({
  template: `
    <form>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="field" [(ngModel)]="model.field" name="field">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="operator" [(ngModel)]="model.operator" name="operator">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="value" [(ngModel)]="model.value" name="value">
        </div>
      </div>
    </form>
  `,
  selector: 'app-rule'
})
export class RuleComponent {
  @Input() model: Rule;
}
