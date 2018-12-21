import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavController  } from '@ionic/angular';
import { Trainer } from '../shared/trainer.model';
import { trainerService } from '../shared/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.scss'],
})
export class TrainerPage implements OnInit {
  trainderId: any;
  mytrainer: Trainer;
  constructor(private trainerService: trainerService, private router: Router,private navCtr : NavController) {
    router.events.subscribe((url: any) => {
      var getUrl = url.url;
      if (typeof getUrl == 'string') {
        var id = getUrl.split('/');
        this.trainderId = id[id.length - 1];
      }
    });
  }

  ngOnInit() {
    this.mytrainer = this.trainerService.getTrainer(this.trainderId);

  }
  goBack(){
    return this.navCtr.goBack();
  }
}
