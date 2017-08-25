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
import { QueryBuilderModule } from './query-builder/module';
import { QueryBuilderComponent } from './query-builder/query-builder';
import { MainQueryBuilderComponent } from './query-builder/main';
import { GuardComponent } from './guards-test/guard.component';
import { GuardTest, Guard2Test } from './guards-test/guard';
import { QueryBuilderModelingModule } from './query-builder-model/query-builder.module';
import { MainModelingComponent } from './query-builder-model/main.component';
import { SquareComponent } from './square/square.component';

const routes: Routes = [
  { path: 'square',
    component: SquareComponent
  },
  {
    path: 'modeling',
    component: MainModelingComponent
  },
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
    QueryBuilderModule,
    QueryBuilderModelingModule
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
