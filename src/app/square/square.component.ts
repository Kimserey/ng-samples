import { Component, Input } from '@angular/core';

import { SquareService } from './square.service';

@Component({
  selector: 'app-square',
  template: `
    <div class="square" *ngIf="show"></div>
    <div>Surface: {{surface}}</div>
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

  constructor(service: SquareService) {
    this.surface = service.computeSurface(100);
  }
}
