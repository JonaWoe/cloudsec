import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(): boolean {

      if(localStorage.getItem('username') && localStorage.getItem('role') === '2' ) {
          return true;
      } else {
          this.router.navigate(['/home']);
          return false;
      }

    }

}