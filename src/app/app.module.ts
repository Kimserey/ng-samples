import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Logger } from './logger.service';
import { ReactiveFormPlaygroundModule } from './reactive-form-playground/reactive-form-playground.module';
import { SquareModule } from './square/square.module';
import { TEST } from './test.token';

@NgModule({
  imports: [
    BrowserModule,
    SquareModule,
    ReactiveFormPlaygroundModule
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
