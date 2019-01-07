import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'auth-token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: any;
  authenticationState = new BehaviorSubject(false);
  authUrl = 'http://apps.capbpm.com/UF/api/v1/person/findByEmailAndPassword';
  constructor(private storage: Storage, private plt: Platform, private http: HttpClient ) {
    this.plt.ready().then( () => {
      this.checkToken();
    } );
  }

    /*login(credentials: any) {

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
  }*/
  async login(credentials: any) {

    try {
      const data = await this.http.get( this.authUrl + '?email=' + credentials.username + '&password=' + credentials.password ).toPromise();
      if ( data[0] ) {
      const token = await  this.storage.set(TOKEN_KEY, 'trainer-token');
      this.authenticationState.next(true);
      return Promise.resolve(); // user found
      } else {
        return Promise.reject(0); // user not found
      }
    } catch (error) {             // some error occured
      console.log(error);
      return Promise.reject(1);
    }
  }
  windowLogin() {
    return this.storage.set(TOKEN_KEY, 'anonymous-token').then( res => {
      this.authenticationState.next(true);
    });
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
