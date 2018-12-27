import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss','./profile.page.css'],
})
export class ProfilePage implements OnInit {
  helloService: any;

  constructor(private profService: ProfileService,private router: Router) { }

  ngOnInit() {
   this.helloService = this.profService.helloService();

  }

  onEditPage(){
    this.router.navigateByUrl('/edit-profile');
  }
  


}
