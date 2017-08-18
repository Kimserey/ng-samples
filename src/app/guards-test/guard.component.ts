import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.something$ = this.route.params.pluck('something');
    this.id$ = this.route.params.pluck('id');
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
