import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  UserInputPassword: string = '';
  UserInputEmail: string = '';
  UserInputName: string = '';

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

  onSignup() {
    if (
      this.UserInputEmail.length >= 4 &&
      !this.email.hasError('required') &&
      this.UserInputPassword.length >= 4 &&
      this.UserInputName.length > 1
    ) {
      this.route.navigateByUrl('login');
    } else {
      this.route.navigateByUrl('signup');
      alert('Wrong sign-up credentials');
    }
  }
}
