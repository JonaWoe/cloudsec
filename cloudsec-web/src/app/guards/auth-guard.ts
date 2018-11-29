import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import * as jwt_decode from 'jwt-decode';


@Injectable()
export class AuthGuard implements CanActivate {

      constructor(private router: Router) {

      }
  
      canActivate(): boolean {
         
        var jwtBearerToken = sessionStorage.getItem('jwtBearerToken');

        if (jwtBearerToken) {
            if (jwt_decode(jwtBearerToken).aud === '1') {
                this.router.navigate(['/admin']);
            } else if (jwt_decode(jwtBearerToken).aud === '2') {
                this.router.navigate(['/user']);
            } 
        }          
          return true;
      }
}