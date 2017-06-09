import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-rx-test',
  templateUrl: './rx-test.component.html'
})
export class RxTestComponent {
  sub = new Subject<void>();

  constructor() {
    const interval$ =
      Observable.interval(100)
        .map(i => {
          if (i === 5) {
            throw new Error();
          }
          return i;
        })
        .catch(() => Observable.of('error'));

    const x =
      this.sub
        .switchMap(() => interval$)
        .catch(() => Observable.of('error'));

    x.subscribe(
      i => console.log(i),
      () => console.log('error in switched subscription'),
      () => console.log('completed switched subscription'));
  }

  start() {
    this.sub.next();
  }
}
