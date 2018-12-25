import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookClientPage } from './book-client.page';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: BookClientPage
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
  declarations: [BookClientPage]
})
export class BookClientPageModule {}
