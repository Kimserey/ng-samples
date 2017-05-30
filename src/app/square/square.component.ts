import { Component, Input } from '@angular/core';

import { SquareService } from './square.service';
import { AppConfig } from './square.model';

@Component({
  selector: 'app-square',
  template: `
    <div class="square" *ngIf="show"></div>
    <div appHighlight>Surface: {{surface}}</div>
    <div>{{config.api}}</div>
  `,
  styles: [
    `.square {
        width:100px;
        height:100px;
        background: blue;
      }
    `
  ]
})
export class SquareComponent {
  @Input() show: boolean;
  surface: number;

  constructor(service: SquareService, private config: AppConfig) {
    this.surface = service.computeSurface(100);
  }
}
