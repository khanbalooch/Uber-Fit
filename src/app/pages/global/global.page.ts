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
      let loc = JSON.parse(localStorage.getItem('location'));
      if (loc && loc.latitude && loc.longitude) {
        this.location.lat = loc.latitude;
        this.location.lng = loc.longitude;
        alert('lat--' + this.location.lat + 'long---' + this.location.lng);
      } else {
        this.geolocation.getCurrentPosition().then((resp) => {
          const responseObj = resp.coords;
          loc = {
            latitude: responseObj.latitude,
            longitude: responseObj.longitude
          };
          this.location.lat = loc.latitude;
          this.location.lng = loc.longitude;
          alert('lat--' + this.location.lat + 'long---' + this.location.lng);
          localStorage.setItem('location', JSON.stringify(loc));
       }).catch((error) => {
          alert(JSON.stringify(error));
       });
      }
    } catch (error) {
      alert(JSON.stringify(error));
      console.log(error);
    }
  }
  ngOnInit() {
   // this.getLocation();
  }

}
