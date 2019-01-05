import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { trainerService } from './shared/trainer.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDbTdI4CxHBY3u4S_WlrvgjY4h3V-KrAv0'
    // })
  ],
  providers: [
    NativeStorage,
    StatusBar,
    SplashScreen,
    trainerService,
    AuthenticationService,
    AuthGuardService,
    FormsModule,
    ReactiveFormsModule,
    Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
