import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.scss'],
})
export class TrainerPage implements OnInit {
  trainderId: any;
  selectedTrainer: Trainer;

  constructor(private trainerService: trainerService, private router: Router) {}

  ngOnInit() {
    this.trainderId = this.trainerService.getTrainerID();
    this.selectedTrainer = this.trainerService.getTrainer(this.trainderId);

  }
  goBack(){
    this.router.navigateByUrl('/tabs/tab1');
  }
  onBookClient(){
    this.router.navigateByUrl('book-client');
  }
}
