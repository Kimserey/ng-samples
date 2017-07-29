import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GrowlModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';
import { PrimeNgComponent } from './prime-ng.component';

const routes: Routes = [
  {
    path: 'prime-ng',
    component: PrimeNgComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GrowlModule,
    TreeTableModule,
    TreeModule
  ],
  declarations: [
    PrimeNgComponent
  ]
})
export class PrimeNgModule { }
