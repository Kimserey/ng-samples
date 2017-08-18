import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  template: `
    <button type="button" (click)="go(1)">Go to 1 page</button>
    <button type="button" (click)="go(2)">Go to 2 page</button>
    <button type="button" (click)="go(3)">Go to 3 page</button>
    <div>This is the ID: {{id$|async}}</div>
    <div>This is the Something: {{something$|async}}</div>
  `
})
export class GuardComponent implements OnInit {
  id$: Observable<string>;
  something$: Observable<string>;

  somethingSub: Subscription;
  idSub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    alert('constructor component');
  }

  ngOnInit() {
    alert('init component');

    this.something$ = this.route.params.pluck('something');
    this.somethingSub = this.something$.subscribe(x => console.log('new something: ' + x));

    this.id$ = this.route.params.pluck('id');
    this.idSub = this.id$.subscribe(x => console.log('new id: ' + x));
  }

  go(id) {
    switch (id) {
      case 1:
        this.router.navigate(['something', 'guards', id]);
        break;

      case 2:
        this.router.navigate(['somethingelse', 'guards', id]);
        break;

      case 3:
        this.router.navigate(['somethingelse', 'guards', id]);
        break;
    }
  }
}
