import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss', 'tab2.page.css']
})
export class Tab2Page implements OnInit {


  dayMenuOptions: any = {
    header: 'Days',
    subHeader: 'Select Day to Configure'
  };
  sessionMenuOptions: any = {
    header: 'Sessions'
  };
  locationMenuOptions: any = {
    header: 'Locations'
  };
  slotMenuOptions: any = {
    header:  'Slots'
  };
  slots = ['9-10 AM', '10-11 AM', '11-12 AM', '12-01 PM', '01-02 PM' ];
  locations = ['Papa Gym', 'Your House', 'Your Choice'];
  sessions = [ 'session 1', 'session 2' ];
  days = ['Monday, 14 Jan 2019', 'Teuseday, 15 Jan 2019', 'Wednesday, 16 Jan 2019', 'Thursday, 17 Jan 2019' ];
  constructor() { }
  ngOnInit() {
  }

}
