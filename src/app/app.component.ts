import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from './appconfig.model';

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

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = this.title + ' ' + config.Test;
  }
}
