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

  login(credentials: any) {
    console.log(credentials);

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

  logout() {
    console.log("loggin out");
    return this.storage.remove(TOKEN_KEY).then( ()=>{
      this.authenticationState.next(false);
    });
  }
  
  isAuthenticated(){
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
