import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', './login.page.css'],
})
export class LoginPage implements OnInit {

  loginCredentials = { username: '', password: '' };

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginCredentials);
    this.authService.login(this.loginCredentials);
  }
  gotoSignup() {
    console.log('goiing to signup page');
    this.router.navigateByUrl('/signup');
  }

  onForgotPass() {
    this.router.navigateByUrl('/forgot-pass');
  }
 


}
