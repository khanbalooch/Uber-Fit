import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss','./edit-profile.page.css'],
})
export class EditProfilePage implements OnInit {

  constructor() { }
  userProfile: any = {
    firstName: 'John',
    lastName: 'Smith'

  }
  ngOnInit() {
  }

}
