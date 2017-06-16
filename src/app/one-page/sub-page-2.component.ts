import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
    <div>Bye bye</div>
    <strong>{{ data$ | async }}</strong>
  `
})
export class SecondPage2Component implements OnInit {
  data$: Observable<any>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data$ = this.route.data.pluck('hello');
  }
}
