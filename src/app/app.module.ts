import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { InjectionToken, NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Logger } from './logger.service';
import { ReactiveFormPlaygroundModule } from './reactive-form-playground/reactive-form-playground.module';
import { SquareModule } from './square/square.module';
import { TEST } from './test.token';
import { RxTestModule } from './rx-test/rx-test.module';
import { OnePageModule } from './one-page/one-page.module';
import { HomeComponent } from './home.component';
import { SecondPageComponent } from './one-page/sub-page.component';
import { PrimeNgModule } from './primeng/prime-ng.module';
import { PrimeNgComponent } from './primeng/prime-ng.component';
import { QueryBuilderModule } from './query-builder/module';
import { QueryBuilderComponent } from './query-builder/query-builder';
import { MainQueryBuilderComponent } from './query-builder/main';
import { GuardComponent } from 'app/guards-test/guard.component';
import { GuardTest, Guard2Test } from 'app/guards-test/guard';

const routes: Routes = [
  {
    path: ':something/guards',
    canActivateChild: [
      GuardTest
    ],
    children: [
      {
        path: ':id',
        component: GuardComponent,
        canActivate: [
          Guard2Test
        ]
      }
    ]
  },
  {
    path: 'lazy-page',
    loadChildren: './one-page/one-page.module#OnePageModule'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'prime-ng',
    component: PrimeNgComponent,
  },
  {
    path: '',
    component: MainQueryBuilderComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // OnePageModule,
    BrowserModule,
    SquareModule,
    ReactiveFormPlaygroundModule,
    RxTestModule,
    HttpModule,
    PrimeNgModule,
    QueryBuilderModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    GuardComponent
  ],
  providers: [
    Logger,
    { provide: TEST, useValue: { Test: 'Hello world' } },
    GuardTest,
    Guard2Test
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
