import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

      constructor(private router: Router) {

      }
  
      canActivate(): boolean {
          if(localStorage.getItem('username') && localStorage.getItem('role') === '1' ) {
              return true;
          } else {
            this.router.navigate(['/home']);
            return false;
          }
      }
}