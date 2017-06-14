import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Logger } from './logger.service';
import { ReactiveFormPlaygroundModule } from './reactive-form-playground/reactive-form-playground.module';
import { SquareModule } from './square/square.module';
import { TEST } from './test.token';
import { RxTestModule } from './rx-test/rx-test.module';

@NgModule({
  imports: [
    BrowserModule,
    SquareModule,
    ReactiveFormPlaygroundModule,
    RxTestModule,
    HttpModule
  ],
  declarations: [
    AppComponent
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
