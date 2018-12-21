import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  constructor(private trainerService: trainerService, private navCtrl: NavController, public loadingController: LoadingController) { }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Finding Trainers in your area',
      duration: 2000,
      animated: true,
      cssClass: 'custom-loading'
    });
    return await loading.present();
  }

  ngOnInit() {
    this.trainers = this.trainerService.getAllTrainers();
  }

  loadTrainer(trainer: any) {
    this.presentLoading();
    setTimeout(() => {
      this.navCtrl.navigateRoot('/trainer/' + trainer.id);
    }, 2100);

  }



}
