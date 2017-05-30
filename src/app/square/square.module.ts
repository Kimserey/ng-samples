import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AppConfig } from './square.model';
import { SquareComponent } from './square.component';
import { SquareService } from './square.service';

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
    { provide: AppConfig, useClass: AppConfig  } // Same as AppConfig
  ]
})
export class SquareModule { }
