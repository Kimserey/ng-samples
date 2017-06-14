import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { SquareComponent } from './square/square.component';
import { TEST } from './test.token';
import { Test } from './test.model';


@Component({
  selector: 'app-root',
  template: `
    <app-square [show]="true" [side]="side" (something)="onSomething($event)" #square></app-square>
    <strong>{{square.show}}</strong>
    <app-square [show]="true" [side]="5" (something)="onSomething($event)"></app-square>
    <strong>{{surface}}</strong>
    <br />
    <button (click)="increase()">+</button>

    <app-simple-form></app-simple-form>

    <app-rx-test></app-rx-test>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit  {
  @ViewChild(SquareComponent) square: SquareComponent;

  surface = 0;
  side = 1;

  constructor(@Inject(TEST) config: Test) {
  }

  ngAfterViewInit() {
    setTimeout(() => this.surface = this.square.surface, 0);
  }

  onSomething(message) {
    console.log(message);
  }

  increase() {
    this.side = this.side + 1;
  }
}
