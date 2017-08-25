import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';
import { ParentComponent } from './parent.component';
import { FileTreeComponent } from './file-tree.component';
import { BreadcrumbService } from './services/breadcrumb';
import { MyBreadcrumbedComponent } from './my-breadcrumbed.component';

const routes: Routes = [
  {
    path: 'prime',
    component: ParentComponent,
    children: [{
      path: 'file-tree',
      component: FileTreeComponent,
    }, {
      path: 'breadcrumb',
      component: MyBreadcrumbedComponent
    }],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BreadcrumbModule,
    CommonModule,
    FormsModule,
    GrowlModule,
    TreeTableModule,
    TreeModule,
  ],
  declarations: [
    ParentComponent,
    FileTreeComponent,
    MyBreadcrumbedComponent
  ],
  providers: [
    BreadcrumbService
  ]
})
export class PrimeNgModule { }
