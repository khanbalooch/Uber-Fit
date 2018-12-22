import { Component, OnInit } from '@angular/core';

import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-book-client',
  templateUrl: './book-client.page.html',
  styleUrls: ['./book-client.page.scss', './book-client.page.css'],
})
export class BookClientPage implements OnInit {
  trainderId: any;
  selectedTrainer: Trainer;
  isSuccess: boolean;

  constructor(private trainerService: trainerService) { }

  ngOnInit() {
    this.trainderId = this.trainerService.getTrainerID();
    this.selectedTrainer = this.trainerService.getTrainer(this.trainderId);
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 1500);
  }

}
