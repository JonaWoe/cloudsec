import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Router } from "@angular/router"

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

      let username = (response as any).username;
      let role = (response as any).role;

      localStorage.setItem('username', username );
      localStorage.setItem('role', role);

      if (role === '1') {
        this.router.navigate(['/admin']);
      } else if (role === '2') {
        this.router.navigate(['/user']);
      } else {
        this.error = true;
        console.log(this.error)
      }
    }, err => {
      this.error = true;
    });
  }

  clickBack() {
    this.router.navigate(['/home']);
  }
}
