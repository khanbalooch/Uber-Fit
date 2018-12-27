import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginCredentials = { username: '', password: '' };

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginCredentials);
    this.authService.login(this.loginCredentials);
  }
}
