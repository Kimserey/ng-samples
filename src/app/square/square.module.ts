import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SquareComponent } from './square.component';
import { SquareService } from './square.service';

@NgModule({
  imports: [
    CommonModule
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
