import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleLoginComponent } from './google-login/google-login.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoogleLoginComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot() ,
  ],
  exports: [HeaderComponent, FooterComponent, GoogleLoginComponent]
})
export class SharedComponentsModule { }
