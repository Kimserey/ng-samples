import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OnePageComponent } from './one-page.component';
import { SecondPageComponent } from './sub-page.component';
import { SecondPage2Component } from './sub-page-2.component';
import { SecondPage3Component } from './sub-page-3.component';

const routes: Routes = [
  {
    path: 'one-page',
    component: OnePageComponent,
    children: [
      {
        path: 'hello',
        outlet: 'first',
        component: SecondPageComponent,
        children: [
          {
            path: '',
            component: SecondPage2Component,
            data: {
              hello: 'world'
            }
          },
          {
            path: ':id',
            component: SecondPage3Component,
          }
        ]
      },
      {
        path: 'bye',
        component: SecondPage2Component,
        outlet: 'second'
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OnePageComponent,
    SecondPageComponent,
    SecondPage2Component,
    SecondPage3Component
  ],
  exports: [
    OnePageComponent,
    SecondPageComponent,
    SecondPage2Component
  ]
})
export class OnePageModule { }
