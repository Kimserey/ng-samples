import { MenuItem } from 'primeng/primeng';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { BreadcrumbService } from '../services/breadcrumb';
import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbInitializedGuard implements CanActivate {

  constructor(private service: BreadcrumbService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const crumbs = route.data['crumbs'];
    this.service.setCrumbs(crumbs);
    return true;
  }
}
