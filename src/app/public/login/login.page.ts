import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', './login.page.css'],
})
export class LoginPage implements OnInit {

  loginCredentials = { username: '', password: '' };

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private authService: AuthenticationService,
    private router: Router) {}

  ngOnInit() {}

  login() {
    console.log('login' + this.loginForm.get('username').value);
    this.authService.login({
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    });
  }
  gotoSignup() {
    console.log('going to signup page');
    this.router.navigateByUrl('/signup');
  }

  onForgotPass() {
    this.router.navigateByUrl('/forgot-pass');
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
