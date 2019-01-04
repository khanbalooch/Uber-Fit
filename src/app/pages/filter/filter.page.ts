import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss', './filter.page.css'],
})
export class FilterPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  onFilterBtnClick() {
    this.modalController.dismiss();
  }

}
