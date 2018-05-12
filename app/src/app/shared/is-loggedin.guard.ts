import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AppScope } from './appScope';

@Injectable()
export class IsLoggedinGuard implements CanActivate {

  constructor(public router: Router, public appScope: AppScope) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (this.appScope.isLoggedIn) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
