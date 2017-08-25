import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { AppConfig } from './square.model';
import { SquareService } from './square.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-square',
  template: `
    <div class="square" *ngIf="show" (click)="onPressed()"></div>
    <div appHighlight>Surface: {{surface}}</div>
    <div>{{config.api}}</div>

    <div>{{service.test$ | async}}</div>
    <button (click)="add()">add</button>
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
export class SquareComponent implements OnChanges, OnInit {
  @Input() show: boolean;
  @Input() set side(s: number) {
      console.log('side set ' + s);
      this._side = s;
  }
  get side() {
      return this._side;
  }
  @Output() something = new EventEmitter<number>();

  _side: number;
  surface: number;

  constructor(private service: SquareService, private config: AppConfig) {
    console.log('constructor ' + this.side);
  }

  ngOnInit() {
    this.computeSurface();
    console.log('ngOnInit ' + this.side);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.computeSurface();
    console.log(`
      side previous value: ${changes['side'].previousValue},
      side current value: ${changes['side'].currentValue}
    `);
  }

  onPressed() {
    this.something.emit(this.surface);
  }

  private computeSurface() {
    this.surface = this.service.computeSurface(this.side);
  }


  add() {
    this.service.setTest('SET');
  }
}
