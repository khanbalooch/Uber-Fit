import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
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
