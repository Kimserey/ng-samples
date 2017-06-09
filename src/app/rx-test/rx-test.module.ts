import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RxTestComponent } from './rx-test.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    RxTestComponent
  ],
  exports: [
    RxTestComponent
  ],
  providers: [
  ]
})
export class RxTestModule {}
