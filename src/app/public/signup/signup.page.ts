import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { compareValidator } from 'src/app/shared/validators/validators';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss', './signup.page.css'],
})

export class SignupPage implements OnInit {// implements OnInit {

  private loading: any;
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required ]),
    cPassword: new FormControl('', [Validators.required, compareValidator]),
    type: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private http: HttpClient,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private authService: AuthenticationService) {}

  ngOnInit() { }
  async signUp() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    const options = { headers: httpHeaders };
    const signUpURL = 'http://apps.capbpm.com/UF/api/v1/person';
    try {
      this.loading = await this.presentLoading();
      let user = await this.http.post(signUpURL, {
        'email': this.signupForm.get('email').value ,
        'password': this.signupForm.get('password').value,
        'type': this.signupForm.get('type').value
      }, options).toPromise();

      console.log(user);

      //login
      this.authService.login({
        'username': this.signupForm.get('email').value,
        'password': this.signupForm.get('password').value
      });
      this.loadingController.dismiss();
    } catch (error) {
      console.log(error);
      this.loadingController.dismiss();
      this.presentToastWithOptions();
    }
    this.loadingController.dismiss();
  }

  gotoLogin() {
    console.log('going to login page');
    this.router.navigateByUrl('/login');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get cPassword() {
    return this.signupForm.get('cPassword');
  }
  get type() {
    return this.signupForm.get('type');
  }

  async presentLoading() {
    console.log('starting loading');
     const loading = await this.loadingController.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Signing you up'
    });
    return await loading.present();
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Some Error Occured, Please Try Again.',
      position: 'top',
      duration: 5000
    });
    toast.present();
  }
}
