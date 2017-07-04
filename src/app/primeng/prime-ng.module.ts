import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrimeNgComponent } from './prime-ng.component';

const routes: Routes = [
  {
    path: 'prime-ng',
    component: PrimeNgComponent,
  },
];

@NgModule({
  declarations: [
    PrimeNgComponent
  ]
})
export class PrimeNgModule { }
