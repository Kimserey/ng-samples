import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  template: `
    <div>he he</div>
    <strong>{{ data$ | async }}</strong>
  `
})
export class SecondPage3Component implements OnInit {
  data$: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.data$ = this.route
        .paramMap
        .filter(m => m.has('id'))
        .map(m => m.get('id'));
  }
}
