import { Component, Inject } from '@angular/core';
import { TEST } from './test.token';
import { Test } from './test.model';


@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <app-square [show]="true"></app-square>
    <app-square [show]="true"></app-square>
    <app-square [show]="true"></app-square>
    <app-square [show]="true"></app-square>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';

  constructor(@Inject(TEST) config: Test) {
    this.title = this.title + ' ' + config.Test;
  }
}
