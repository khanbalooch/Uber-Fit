import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', './login.page.css'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private authService: AuthenticationService,
              private router: Router,
              private loadingController: LoadingController,
              private toastController: ToastController) {}

  ngOnInit() {}

    async login() {
    console.log('login' + this.loginForm.get('username').value);
    try {
      const loading = await this.presentLoading();
      const res = await this.authService.login({
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value
      });
      this.loadingController.dismiss();
    } catch (error) {
      this.loadingController.dismiss();
      if (error === 0) {
        this.presentToast('Invalid username password');
      } else {
        this.presentToast('Some Error Occured, Please try again');
      }
    }
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
  async presentLoading() {
    console.log('starting loading');
     const loading = await this.loadingController.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Logging you in, Please Wait'
    });
    return await loading.present();
  }
  async presentToast(tMessage: string) {
    const toast = await this.toastController.create({
      message: tMessage,
      position: 'top',
      duration: 5000
    });
    toast.present();
  }

}
