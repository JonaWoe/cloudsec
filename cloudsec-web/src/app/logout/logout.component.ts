import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  username = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  clickLogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('role')
    this.router.navigate(['/home']);
  }

}
