import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss', './global.page.css'],
})
export class GlobalPage implements OnInit {

  protected map: any;
  location = {lat: 41.355423, lng: -72.102760};

  constructor(private geolocation: Geolocation) {}

  onMapReady(agm) {
    this.map = agm;
    console.log('map is ready');
    console.log(this.map);
    this.getLocation();
  }

   async getLocation() {
    try {
      const location = await this.geolocation.getCurrentPosition();
      console.log(location);
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit() {
   // this.getLocation();
  }

}
