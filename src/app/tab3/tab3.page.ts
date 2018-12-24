import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss', 'tab3.page.css']
})
export class Tab3Page implements OnInit {
  trainers: Trainer[];
  constructor(private trainerService: trainerService, private router: Router, public loadingController: LoadingController) { }


  ngOnInit() {
    this.trainers = this.trainerService.getAllTrainers();
  }

  loadTrainer(trainer: any) {
    this.trainerService.setTrainerID(trainer.id);
    this.presentLoading();
    this.router.navigateByUrl('/trainer');
  }
  //custom loader
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Finding Trainers in your Area',
      duration: 1500,
      spinner: 'bubbles',
      cssClass: 'tLoader'
    });
    return await loading.present();
  }


}
