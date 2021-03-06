import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPage } from '../pages/filter/filter.page';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';
import { trainerService } from '../shared/trainer.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', './home.page.css'],
})

export class HomePage implements OnInit {
  trainers: any;
  error: any;
  show: boolean = false;
  isShowSearchBar: boolean = false;
  isShowFilter: boolean = true;


  constructor(private router: Router, public modalController: ModalController, private trainerS: trainerService, private loadingController: LoadingController,
      private geolocation: Geolocation) {
    //console.log('In Home Page');
  }


  ngOnInit() {
    //this.getGeolocation();
    this.getAllTrainers();
  }

  async getGeolocation() {
    const loading = await this.loadingController.create({
      message: 'Finding your location',
      spinner: 'bubbles',
      cssClass: 'tLoader'
    });
    await loading.present();
    this.geolocation.getCurrentPosition().then((resp) => {
      const responseObj = resp.coords;
      const loc = {
        latitude: responseObj.latitude,
        longitude: responseObj.longitude
      };
      localStorage.setItem('location', JSON.stringify(loc));
      loading.dismiss();
      this.getAllTrainers();
     }).catch((error) => {
       loading.dismiss();
       console.log(error);
     });
  }

  selectedTrainer(trainer) {
    this.trainerS.setSelectedTrainer(trainer);
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
    await this.trainerS.getAllTrainers()
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

  isValidPic(url: any) {
    return (/\.(gif|jpg|jpeg|tiff|png)$/i).test(url);
  }

  onShowSearchbar() {
    this.isShowSearchBar = true;
  }
  onCancel(event) {
    this.isShowSearchBar = false;
  }
  async onFilterBtnClick() {    
    const modal = await this.modalController.create({
      component: FilterPage
    });
    this.isShowFilter = !this.isShowFilter;
    return await modal.present();
  }

  onProfilePage() {
    this.router.navigateByUrl('/profile');
  }

  onSettingsPage() {
    this.router.navigateByUrl('/settings');
  }

  onDirectionPage() {
    this.router.navigateByUrl('/direction');
  }

  onGlobalPage() {
    this.router.navigateByUrl('/global');
  }



}
