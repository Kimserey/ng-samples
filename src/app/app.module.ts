import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_CONFIG } from './appconfig.model';
import { AppComponent } from './app.component';
import { Logger } from './logger.service';
import { SquareModule } from './square/square.module';


@NgModule({
  imports: [
    BrowserModule,
    SquareModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Logger,
    { provide: APP_CONFIG, useValue: { Test: 'Hello world' } }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
