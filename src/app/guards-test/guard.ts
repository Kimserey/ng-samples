import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { Observable } from "rxjs/Observable";

@Injectable()
export class GuardTest implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    alert(route.params['something']);
    return of(true);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if observable never ends, the redirection never occurs
    // this.router.navigate(['/']);
    // return Observable.never();
    return this.canActivate(childRoute, state);
  }
}

@Injectable()
export class Guard2Test implements CanActivate, CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    alert('test');
    return of(true);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    alert('child');
    return of(true);
  }
}
