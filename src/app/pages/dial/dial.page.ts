import { Component, OnInit } from '@angular/core';
import { DialService } from '../../shared/services/dial.service';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.page.html',
  styleUrls: ['./dial.page.scss'],
})
export class DialPage implements OnInit {

  constructor(private dialService: DialService) { }

  ngOnInit() {
  }

}
