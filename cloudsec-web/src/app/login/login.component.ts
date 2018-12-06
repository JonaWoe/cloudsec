import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import {AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = '';
  password = '';

  error = false;


  constructor(private service: RestService, private router: Router, private socialAuthService: AuthService) { 
  }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }

  clickLogin() {

    let res = this.service.login(this.username, this.password);


    res.subscribe(response => {

      var jwtBearerToken = response.jwtBearerToken;
      sessionStorage.setItem('jwtBearerToken', jwtBearerToken);

      var decodedToken = jwt_decode(jwtBearerToken);

      let username = decodedToken.sub;
      let role = decodedToken.aud;

      if (role === '1') {
        this.router.navigate(['/admin']);
      } else if (role === '2') {
        this.router.navigate(['/user']);
      } else {
        this.error = true;
        console.log(this.error)
      }
    }, err => {
      console.log(err)
      this.error = true;
    });
  }

  clickBack() {
    this.router.navigate(['/home']);
  }
}
