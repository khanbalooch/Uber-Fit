import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapComponent } from './google-map/google-map.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoogleMapComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [HeaderComponent, FooterComponent, GoogleMapComponent]
})
export class SharedComponentsModule { }
