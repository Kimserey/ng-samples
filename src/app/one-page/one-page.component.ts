import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html'
})
export class OnePageComponent implements OnInit {
  title$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title$ = this.route
      .data
      .pluck('someTitle');
  }
}
