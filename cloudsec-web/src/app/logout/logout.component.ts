import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  username = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = jwt_decode(sessionStorage.getItem('jwtBearerToken')).sub;
  }

  clickLogout() {
    sessionStorage.removeItem('jwtBearerToken');
    this.router.navigate(['/home']);
  }

}
