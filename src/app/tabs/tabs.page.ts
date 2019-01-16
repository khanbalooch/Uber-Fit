import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss', 'tabs.page.css']
})
export class TabsPage {

  title: string;
  constructor(private authService: AuthenticationService) {
    this.title = 'Choose Booking Date';
  }
  tab1Clicked() {
    this.title = 'Choose Booking Date';
  }
  tab2Clicked() {
    this.title = 'Set Details';
  }
  tab3Clicked() {
    this.title = 'Send';
  }


}
