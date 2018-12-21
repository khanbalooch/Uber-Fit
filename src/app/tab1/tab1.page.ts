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
        offers: 'muscles, legs, pushes'
      },
      {
        name: 'cardio',
        experience: '4 years',
        offers: 'muscles, legs, pushes'
      },
      {
        name: 'cardio',
        experience: '4 years',
        offers: 'muscles, legs, pushes'
      },
      {
        name: 'cardio',
        experience: '4 years',
        offers: 'muscles, legs, pushes'
      },
      {
        name: 'cardio',
        experience: '4 years',
        offers: 'muscles, legs, pushes'
      }
    ];
  }

  loadTrainer() {
    alert('hello');
  }
}
