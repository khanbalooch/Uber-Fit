import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ThrowStmt } from '@angular/compiler';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss', './global.page.css'],
})
export class GlobalPage implements OnInit {

  protected map: any;
  location = {lat: 41.355423, lng: -72.102760};

  constructor(private geolocation: Geolocation,
    private storage: Storage,
    private loadingController: LoadingController) {}

  onMapReady(agm) {
    this.map = agm;
    console.log('map is ready');
    console.log(this.map);
    this.getLocation();
  }

   async getLocation() {
    try {
      const location = JSON.parse(localStorage.getItem('location'));
      if (location && location.latitude && location.longitude) {
        this.location.lat = location.latitude;
        this.location.lng = location.longitude;
      } else {
        this.geolocation.getCurrentPosition().then((resp) => {
          const responseObj = resp.coords;
          const loc = {
            latitude: responseObj.latitude,
            longitude: responseObj.longitude
          };
          this.location.lat = loc.latitude;
          this.location.lng = loc.longitude;
          localStorage.setItem('location', JSON.stringify(loc));
       }).catch((error) => {

       });
      }
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit() {
   // this.getLocation();
  }

}
