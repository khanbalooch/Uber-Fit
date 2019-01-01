import { Component, OnInit } from '@angular/core';
//import { GlobalService } from '../../shared/services/global.service';
import { MapService } from '../../shared/services/map.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss', './global.page.css'],
})
export class GlobalPage implements OnInit {
  lat: any;
  lng: any;

  constructor(private mapS: MapService) { }
  ngOnInit() {
    this.mapS.getLocation().subscribe(res => {
       this.lat = res.latitude;
       this.lng = res.longitude;
      console.log(res);
    });
  }

}
