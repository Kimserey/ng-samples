import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AppConfig } from './square.model';
import { DoubleSquareService } from './double-square.service';
import { SquareComponent } from './square.component';
import { SquareService, squareServiceFactory } from './square.service';
import { Logger } from '../logger.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SquareComponent
  ],
  exports: [
    SquareComponent
  ],
  providers: [
    SquareService,
    // DoubleSquareService,
    // { provide: SquareService, useClass: DoubleSquareService },
    // { provide: SquareService, useFactory: squareServiceFactory, deps: [Logger] },
    { provide: AppConfig, useClass: AppConfig  } // Same as AppConfig
  ]
})
export class SquareModule { }
