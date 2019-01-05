import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss', './filter.page.css'],
})
export class FilterPage implements OnInit {
  isShowSearchBar: boolean = false;
  isShowFilter: boolean = false;

  constructor(public modalController: ModalController,private router: Router) { }

  ngOnInit() {
  }
  onShowSearchbar() {
    this.isShowSearchBar = true;
  }
  onCancel(event) {
    this.isShowSearchBar = false;
  }
  onFilterBtnClick() {
    this.modalController.dismiss();
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

  check(item){
    console.log(item);
  }

}
