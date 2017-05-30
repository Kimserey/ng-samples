import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

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
    SquareService
  ]
})
export class SquareModule { }
