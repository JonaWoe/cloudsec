import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AdminGuard implements CanActivate {

      constructor(private router: Router) {

      }
  
      canActivate(): boolean {
        
        var jwtBearerToken = sessionStorage.getItem('jwtBearerToken');

        if (jwtBearerToken && jwt_decode(jwtBearerToken).aud === '1') {
            return true;
        } else {
            this.router.navigate(['/home']);
            return false;
        }   
    }
}