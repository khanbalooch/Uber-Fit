import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../shared/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  helloService: any;


  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.helloService = this.settingsService.helloService();

  }

}
