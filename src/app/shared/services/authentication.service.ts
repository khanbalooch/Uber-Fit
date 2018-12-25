import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = "auth-token"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform ) { 
    this.plt.ready().then( ()=>{
      this.checkToken();
    } );
  }

  login(credentials:any){
    console.log(credentials);
    
    if(credentials.username ==='danny@capbpm.com' && credentials.password === 'password'){
      console.log("logged In");
      return this.storage.set(TOKEN_KEY, 'trainer-token').then( res =>{
        this.authenticationState.next(true);
    });
    }
}
  
  logout(){
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
