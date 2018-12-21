import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  trainers: any[] = [];
  constructor() {
    this.trainers = [
      {
        name: 'cardio',
        experience: '4 years',
        offers: 'walk, running',
        path: './../../assets/images/cardio.jpg'
      },
      {
        name: 'yogga',
        experience: '12 years',
        offers: 'muscles, legs, pushes',
        path: './../../assets/images/yoga.jpg'
      },
      {
        name: 'Cross Fit',
        experience: '2 years',
        offers: 'ups, downs, sliming',
        path: './../../assets/images/cf.jpg'
      },
      {
        name: 'Weight Trainer',
        experience: '6 years',
        offers: 'muscles, legs, pushes',
        path: './../../assets/images/wt.jpg'
      },
      {
        name: 'Swim Trainer',
        experience: '4 years',
        offers: 'diving, swimming, exe',
        path: './../../assets/images/swt.png'
      }
    ];
  }

  loadTrainer() {
    alert('hello');
  }
}
