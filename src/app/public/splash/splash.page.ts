import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../shared/services/authentication.service';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss','./splash.page.css'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }
  windowLogin() {
    this.authService.windowLogin();
  }
  gotoLogin() {
    this.router.navigate(['login']);
  }
  gotoSignup() {
    this.router.navigate(['signup']);
  }
}
