import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDialPage() {
    this.router.navigateByUrl('/dial');
  }

  onChatPage() {
    this.router.navigateByUrl('/chat');
  }

  onMusicalPage() {
    this.router.navigateByUrl('/music');
  }
}
