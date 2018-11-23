import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private service: RestService) { 
  }

  ngOnInit() {
    let username = '';
    let password = '';
  }

  clickLogin(username, password) {
    this.service.login(username, password);
  }
}
