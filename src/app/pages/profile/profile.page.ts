import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ProfileService } from '../../shared/services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss', './profile.page.css'],
})
export class ProfilePage implements OnInit {
  helloService: any;
  isEdit: boolean = false;
  constructor(private profService: ProfileService, private router: Router, public modalController: ModalController) { }
  userProfile: any = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@email.com',
    pictureURL: '../../../../assets/images/wt.jpg',
    rating: 5,
    age: 24,
    gender: 'm',
    isActive: true,
    type: 'Trainer',
    subType: 'Swimmer',
    startDate: '12 Dec,2018',
    skill: [
      {
        name: 'Skill Name',
        type: 'Type',
        subType: 'Sub Type',
        detail: 'Skill Detail',
        level: '4',
        certification: 'NA'
      }
    ],
    address: [
      {
        id: 1,
        city: 'New York',
        state: 'United State',
        street: '125E00',
        zip: 58065
      }
    ]
  }

  ngOnInit() {
    this.helloService = this.profService.helloService();

  }

  onEditProfile() {
    this.isEdit = true;
  }
  onUpdateProfile() {

  }
  onCancelEdit() {
    this.isEdit = false;

  }
  async onAddSkill() {
    console.log('onAddSkill is Called!');
    // const modal = await this.modalController.create({
    //   component: '',
    //   componentProps: {
    //     'prop1': 'Skill Title',
    //     'prop2': 'Skill Name'
    //   }
    // });
    // return await modal.present(); 
  }



}
