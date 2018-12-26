import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';
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
    RouterModule.forChild(routes)
  ],
  declarations: [GlobalPage]
})
export class GlobalPageModule {}
