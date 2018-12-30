import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { trainerService } from './shared/trainer.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthenticationService } from './shared/services/authentication.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { UserAgent } from '@ionic-native/user-agent/ngx';

const firebaseConfig = {
    apiKey: 'AIzaSyBebPP3piU1J0QBvsm8vLRaOv6qyCjzULk',
    authDomain: 'trainer-application.firebaseapp.com',
    databaseURL: 'https://trainer-application.firebaseio.com',
    projectId: 'trainer-application',
    storageBucket: 'trainer-application.appspot.com',
    messagingSenderId: '707834194438'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [
    NativeStorage,
    GooglePlus,
    StatusBar,
    SplashScreen,
    trainerService,
    AuthenticationService,
    UserAgent,
    AuthGuardService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
