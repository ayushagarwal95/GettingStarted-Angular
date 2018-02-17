import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router'

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot) : boolean {
    let id = +route.url[1].path;
    if (isNaN (id) || id < 1) {
      alert('Invalid product id');
      return false;
    }
    return true;
  }

}
