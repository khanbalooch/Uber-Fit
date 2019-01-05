import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

const TOKEN_KEY = 'auth-token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: any;
  userData = {};
  authenticationState = new BehaviorSubject(false);
  authUrl = 'http://apps.capbpm.com/UF/api/v1/person/findByEmailAndPassword';
  constructor(private storage: Storage, private plt: Platform, private http: HttpClient,
      private facebook: Facebook) {
    this.plt.ready().then( () => {
      this.checkToken();
    } );
  }

  login(credentials: any) {
    //console.log(credentials);

    this.http.get( this.authUrl + '?email=' + credentials.username + '&password=' + credentials.password ).
    subscribe(data => {
      if ( data[0] ) {
        return this.storage.set(TOKEN_KEY, 'trainer-token').then( res => {
          this.authenticationState.next(true);
      });
    }
    },
    error => {
        console.log(error);
    });
  }
  windowLogin() {
    return this.storage.set(TOKEN_KEY, 'anonymous-token').then( res => {
      this.authenticationState.next(true);
    });
  }

  facebookLogin() {
    this.facebook.login(['public_profile', 'email'])
      .then((res1: FacebookLoginResponse) => {
          console.log('Logged into Facebook!', res1);
          this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
              this.userData = {email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'],
                picture: profile['picture_large']['data']['url'], username: profile['name']};
                return this.storage.set(TOKEN_KEY, 'trainer-token').then( res => {
                  this.authenticationState.next(true);
                });
          });
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  logout() {
    console.log('logging out');
    return this.storage.remove(TOKEN_KEY).then( ()=>{
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
  
  checkToken(){
    this.storage.get(TOKEN_KEY).then(res =>{
      console.log("check token:"+ res);
      if( res){
          this.authenticationState.next(true);
      }else{
        this.authenticationState.next(false);
      }
    }); 
  }
}
