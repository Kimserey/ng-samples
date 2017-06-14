import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { SquareComponent } from './square/square.component';
import { TEST } from './test.token';
import { Test } from './test.model';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
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
