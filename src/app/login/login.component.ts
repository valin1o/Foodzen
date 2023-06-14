import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  UserInputPassword: string = '';
  UserInputEmail: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private route: Router, private authService: AuthenticationService) {}

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
    // if (this.UserInputEmail === 'admin' && this.UserInputPassword === 'admin') {
    //   // alert('Logged in');
    //   this.route.navigateByUrl('home');
    // } else {
    //   this.route.navigateByUrl('login');
    //   alert('Wrong log-in credentials');
    // }
    
    this.authService.login(email, password)
  }

  submit(){
    if(!this.loginForm.valid){
      return;
    }

    const{email, password} = this.loginForm.value;
    this.authService.login(email, password).subscribe(() => {
        this.route.navigate(['/home']);
    });


  }

  onSignup(){
    this.route.navigateByUrl('signup')
  }
}
