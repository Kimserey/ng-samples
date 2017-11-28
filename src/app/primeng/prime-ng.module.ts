import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  BreadcrumbModule,
  CalendarModule,
  DropdownModule,
  DataTableModule,
  GrowlModule,
  TreeModule,
  TreeTableModule
} from 'primeng/primeng';
import { ParentComponent } from './parent.component';
import { FileTreeComponent } from './file-tree.component';
import { BreadcrumbService } from './services/breadcrumb';
import { MyBreadcrumbedComponent } from './my-breadcrumbed.component';
import { MyBreadcrumbed2Component } from './my-breadcrumbed-2.component';
import { DataTableComponent } from './data-table.component';
import { BreadcrumbInitializedGuard } from './guards/breadcrumb.guard';

const routes: Routes = [
  {
    path: 'data-table',
    component: DataTableComponent,
  }, {
    path: 'prime',
    component: ParentComponent,
    children: [{
      path: 'file-tree',
      component: FileTreeComponent,
    }, {
      path: 'breadcrumb',
      component: MyBreadcrumbedComponent
    }, {
      path: 'breadcrumb2',
      component: MyBreadcrumbed2Component,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [{
          label: 'test1'
        }, {
          label: 'test2'
        }, {
          label: 'test3'
        }]
      }
    }],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BreadcrumbModule,
    CommonModule,
    DropdownModule,
    DataTableModule,
    FormsModule,
    GrowlModule,
    TreeTableModule,
    TreeModule,
    CalendarModule
  ],
  declarations: [
    ParentComponent,
    FileTreeComponent,
    MyBreadcrumbedComponent,
    MyBreadcrumbed2Component,
    DataTableComponent
  ],
  providers: [
    BreadcrumbService,
    BreadcrumbInitializedGuard
  ]
})
export class PrimeNgModule { }
