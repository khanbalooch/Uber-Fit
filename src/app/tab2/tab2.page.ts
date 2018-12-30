import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss', 'tab2.page.css']
})
export class Tab2Page implements OnInit {
  trainers: any;
  error: any;
  constructor(private trainerService: trainerService, private router: Router, public loadingController: LoadingController) { }
  ngOnInit() {
    this.getAllTrainers();
  }

  selectedTrainer(trainer) {
    this.trainerService.setSelectedTrainer(trainer);
    this.router.navigateByUrl('/trainer');
  }


  //getAllTrainers
  async getAllTrainers() {
    const loading = await this.loadingController.create({
      message: 'Finding Trainers in your Area',
      spinner: 'bubbles',
      cssClass: 'tLoader'
    });
    await loading.present();
    await this.trainerService.getAllTrainers()
      .subscribe(res => {
        console.log(res);
        this.trainers = res;
        loading.dismiss();
      }, err => {
        this.error = err;
        console.log(err);

        loading.dismiss();
      });
  }

}
