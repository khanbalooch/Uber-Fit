import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss','tab2.page.css']
})
export class Tab2Page implements OnInit {
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
