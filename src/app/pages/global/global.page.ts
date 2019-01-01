import { Component, OnInit } from '@angular/core';
//import { GlobalService } from '../../shared/services/global.service';


@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss', './global.page.css'],
})
export class GlobalPage implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }
  ngOnInit() {
    
  }

}
