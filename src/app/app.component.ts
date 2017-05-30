import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <app-square [show]="true"></app-square>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';
}
