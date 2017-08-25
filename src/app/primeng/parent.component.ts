import { Component, OnInit } from '@angular/core';
import { TreeNode, MenuItem } from 'primeng/primeng';
import { BreadcrumbService } from './services/breadcrumb';
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
    <div class="m-3">
      <p-breadcrumb [model]="crumbs$ | async"></p-breadcrumb>
    </div>
    <router-outlet></router-outlet>
  `
})
export class ParentComponent implements OnInit {
  crumbs$: Observable<MenuItem[]>;

  constructor(private breadcrumb: BreadcrumbService) { }

  ngOnInit() {
    this.crumbs$ = this.breadcrumb.crumbs$;
  }
}
