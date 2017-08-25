import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'primeng/primeng';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbService {
  private crumbs: Subject<MenuItem[]>;
  crumbs$: Observable<MenuItem[]>;

  constructor() {
    this.crumbs = new Subject<MenuItem[]>();
    this.crumbs$ = this.crumbs.asObservable();
  }

  setCrumbs(items: MenuItem[]) {
    this.crumbs.next(
      (items || []).map(item =>
          Object.assign({}, item, {
            routerLinkActiveOptions: { exact: true }
          })
        )
    );
  }
}
