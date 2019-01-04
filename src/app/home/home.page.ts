import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', './home.page.css'],
})
export class HomePage implements OnInit {
  isShowSearchBar: boolean = false;
  isShowFilter: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onShowSearchbar() {
    this.isShowSearchBar = true;
  }
  onCancel(event) {
    this.isShowSearchBar = false;
  }
  onFilterBtnClick() {
    this.isShowFilter = !this.isShowFilter;
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
