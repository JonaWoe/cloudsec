import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

      constructor(private router: Router) {

      }
  
      canActivate(): boolean {
          if(localStorage.getItem('username')) {
              if (localStorage.getItem('role') === '1') {
                  this.router.navigate(['/admin']);
              } else if (localStorage.getItem('role') === '2') {
                  this.router.navigate(['/user']);
              }
          } 
          
          return true;
      }
}