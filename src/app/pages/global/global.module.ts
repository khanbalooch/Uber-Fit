import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';
import { AgmCoreModule } from '@agm/core';
import { GlobalPage } from './global.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbTdI4CxHBY3u4S_WlrvgjY4h3V-KrAv0'
    })
  ],
  declarations: [GlobalPage]
})
export class GlobalPageModule { }
