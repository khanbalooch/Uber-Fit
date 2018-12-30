import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginCredentials = { username: '', password: '' };

  constructor(private authService: AuthenticationService,
              private router: Router,
              /*private googlePlus: GooglePlus,
              private nativeStorage: NativeStorage,
              public loadingController: LoadingController,
              private platform: Platform,
              public alertController: AlertController*/) { }

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

  /*async doGoogleLogin() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    this.googlePlus.login({
      'webClientId': '707834194438-7abia1erq3qojkmfq3jj21hig90pqb48.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
    })
    .then(user => {
      loading.dismiss();

      this.nativeStorage.setItem('google_user', {
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
      })
      .then(() => {
        this.router.navigate(['/signup']);
      }, error => {
        console.log(error);
      });
      loading.dismiss();
    }, err => {
      console.log(err);
      //loading.dismiss();
    });
  }
    async presentLoading(loading) {
      return await loading.present();
    }*/
}
