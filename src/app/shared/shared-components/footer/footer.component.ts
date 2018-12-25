import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthenticationService){}

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }

}
