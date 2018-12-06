import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = '';
  password = '';

  error = false;


  constructor(private service: RestService, private router: Router) { 
  }

  ngOnInit() {
  }

  clickLogin() {

    let res = this.service.login(this.username, this.password);


    res.subscribe(response => {

      var jwtBearerToken = response.jwtBearerToken;

      if (jwtBearerToken) {

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
        }
      } else {
        this.error = true;
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
