import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', 'tab1.page.css']
})
export class Tab1Page implements OnInit {




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
      duration: 15000000,
      spinner: 'bubbles',
      cssClass: 'tLoader'
    });
    return await loading.present();
  }





}
