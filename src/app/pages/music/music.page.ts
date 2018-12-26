import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../shared/services/music.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

}
