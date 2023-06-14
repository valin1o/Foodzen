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
