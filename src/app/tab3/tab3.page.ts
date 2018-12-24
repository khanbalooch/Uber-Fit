import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss', 'tab3.page.css']
})
export class Tab3Page implements OnInit {
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
