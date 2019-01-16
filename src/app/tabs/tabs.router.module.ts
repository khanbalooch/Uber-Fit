import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            //loadChildren: '../tab1/tab1.module#Tab1PageModule'
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'global',
        children: [
          {
            path: '',
            //loadChildren: '../tab2/tab2.module#Tab2PageModule'
            loadChildren: '../pages/global/global.module#GlobalPageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            //loadChildren: '../tab3/tab3.module#Tab3PageModule'
            loadChildren: '../pages/settings/settings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
