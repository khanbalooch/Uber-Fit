import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss', 'tabs.page.css']
})
export class TabsPage {

  constructor(private authService: AuthenticationService){}
  isClicked(tab){
  }
  



}
