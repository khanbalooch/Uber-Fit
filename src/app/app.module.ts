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
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FilterPage } from './pages/filter/filter.page';

@NgModule({
  declarations: [AppComponent, FilterPage],
  entryComponents: [
    FilterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
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
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
