import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss'],
})
export class GlobalPage implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }

}
