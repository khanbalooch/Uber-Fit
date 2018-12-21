import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.scss'],
})
export class TrainerPage implements OnInit {


  constructor() { }
  trainer = {
    src: 'https://via.placeholder.com/150',
    name: 'Mr. A',
    disc: 'Apart from being a certified Personal trainer through the American Council on Exercise.Erwin is also a fully qualified physiotharapist and a master Rehab traine. With his background.',
    rate: '40',
    time: '1hr',
    focus: 'Crossfit'
  };
  ngOnInit() {

  }

}
