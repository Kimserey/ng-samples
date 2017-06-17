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

const routes: Routes = [
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
    redirectTo: 'home',
    pathMatch: 'full'
  }
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
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    Logger,
    { provide: TEST, useValue: { Test: 'Hello world' } }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
