import { Component, OnInit, OnChanges } from '@angular/core';

import { Router } from '@angular/router';
import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.scss', './trainer.page.css'],
})
export class TrainerPage implements OnInit {
  
  selectedTrainer: any;
  isFav: boolean = false;
  constructor(private trainerService: trainerService, private router: Router) {

  }
  galleryOpts = {
    effect: 'flip',
    slidesPerView: 'auto',
    spaceBetween: 10
  };

  feedbackOpts = {
    effect: 'flip',
    slidesPerView: 'auto',
    spaceBetween: 10
  };
  
  ngOnInit() {

    this.selectedTrainer = this.trainerService.getSelectedTrainer();
  }

  onBookClient() {
    this.router.navigateByUrl('/tabs/tab1');
  }  

 



}
