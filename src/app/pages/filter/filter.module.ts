import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';

import { IonicModule } from '@ionic/angular';

import { FilterPage } from './filter.page';

const routes: Routes = [
  {
    path: '',
    component: FilterPage
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
  declarations: [FilterPage]
})
export class FilterPageModule {}
