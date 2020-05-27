import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validation(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('setting...');
      localStorage.setItem('loggedIn', JSON.stringify(true));
    } else {
      console.log('undefined');
      sessionStorage.setItem('loggedIn', null);
    }
  }

  navigateToPosts(): void {
    this.router.navigate(['posts']);
  }

}
