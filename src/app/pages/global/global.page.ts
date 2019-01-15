import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ThrowStmt } from '@angular/compiler';
import { LoadingController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';

@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss', './global.page.css'],
})
export class GlobalPage implements OnInit {

  protected map: any;
  isShowSearchBar: boolean = false;
  isShowFilter: boolean = true;
  location = {lat: 41.355423, lng: -72.102760};

  constructor(private geolocation: Geolocation,
              public modalController: ModalController,
              private loadingController: LoadingController,
              private toastController: ToastController) {}

  onMapReady(agm) {
    this.map = agm;
    console.log('map is ready');
    console.log(this.map);
    this.getLocation();
  }

   async getLocation() {
    try {
      const loadng = await this.presentLoading();
      const location = await this.geolocation.getCurrentPosition();
      console.log(location);
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
      this.loadingController.dismiss();
    } catch (error) {
      console.log(error);
      this.loadingController.dismiss();
      this.presentToast('Unable get your loaction, Please turn on your location services');
    }
  }
  async onFilterBtnClick() {    
    const modal = await this.modalController.create({
      component: FilterPage
    });
    this.isShowFilter = !this.isShowFilter;
    return await modal.present();
  }
  ngOnInit() {
   // this.getLocation();
  }

  onShowSearchbar() {
    this.isShowSearchBar = true;
  }
  onCancel(event) {
    this.isShowSearchBar = false;
  }
  async presentLoading() {
    console.log('starting loading');
     const loading = await this.loadingController.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Let us Find your location'
    });
    return await loading.present();
  }
  async presentToast(tMessage: string) {
    const toast = await this.toastController.create({
      message: tMessage,
      position: 'top',
      duration: 5000
    });
    toast.present();
  }

}
