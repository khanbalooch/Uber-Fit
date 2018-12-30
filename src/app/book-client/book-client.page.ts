import { Component, OnInit } from '@angular/core';
import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-book-client',
  templateUrl: './book-client.page.html',
  styleUrls: ['./book-client.page.scss', './book-client.page.css'],
})
export class BookClientPage implements OnInit {
  selectedTrainer: any;
  isSuccess: boolean;

  constructor(private trainerService: trainerService) { }

  ngOnInit() {
    this.selectedTrainer = this.trainerService.getSelectedTrainer();
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 1500);
  }

}
