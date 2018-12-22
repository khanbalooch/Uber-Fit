import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', 'tab1.page.css']
})
export class Tab1Page implements OnInit {




  trainers: Trainer[];
  constructor(private trainerService: trainerService, private router: Router) { }
  

  ngOnInit() {
    this.trainers = this.trainerService.getAllTrainers();
  }

  loadTrainer(trainer: any) {
    this.trainerService.setTrainerID(trainer.id);
    this.router.navigateByUrl('/loader');
  }



}
