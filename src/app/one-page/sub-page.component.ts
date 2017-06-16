import { Component } from '@angular/core';

@Component({
  template: `
    <div>hello world</div>
    <a routerLink="second">Go to second</a>
    <router-outlet></router-outlet>
  `
})
export class SecondPageComponent {

  constructor() {
  }
}
