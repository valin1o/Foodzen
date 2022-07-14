import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  UserInputPassword: string = '';
  UserInputEmail: string = '';

  constructor(private route: Router) {}

  ngOnInit(): void {}

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid E-Mail';
    }

    return this.email.hasError('email') ? 'Not a valid E-Mail' : '';
  }

  onLogin() {
    if (
      this.UserInputEmail === 'test@test.com' &&
      this.UserInputPassword === 'asdfghjklpqwert'
    ) {
      // alert('Logged in');
      this.route.navigateByUrl('home');
    } else {
      this.route.navigateByUrl('home');
      alert('Wrong log-in credentials');
    }
  }
}
