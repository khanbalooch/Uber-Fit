import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss', './forgot-pass.page.css'],
})
export class ForgotPassPage implements OnInit {
  forgotPassDetails = { email: '' };

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onForgotPass(){

  }
  onLoginPage(){
    this.router.navigateByUrl('/login');
  }

}
