import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Query, Group, Rule } from './models';

@Component({
  template: `
    <form>
      <div class="row">
        <div class="col-sm-3">
          <input type="text" class="form-control" placeholder="field" [(ngModel)]="model.field" name="field">
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" placeholder="operator" [(ngModel)]="model.operator" name="operator">
        </div>
        <div class="col-sm-4">
          <input type="text" class="form-control" placeholder="value" [(ngModel)]="model.value" name="value">
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger" (click)="delete.emit()">Delete rule</button>
        </div>
      </div>
    </form>
  `,
  selector: 'app-rule'
})
export class RuleComponent {
  @Input() model: Rule;
  @Output() delete = new EventEmitter<void>();
}
