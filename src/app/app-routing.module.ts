import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  // { path: '', redirectTo: '/tabs', pathMatch:'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'trainer', loadChildren: './trainer/trainer.module#TrainerPageModule', canActivate: [AuthGuardService] },
  { path: 'book-client', loadChildren: './book-client/book-client.module#BookClientPageModule', canActivate: [AuthGuardService] },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuardService] },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule', canActivate: [AuthGuardService] },
  { path: 'dial', loadChildren: './pages/dial/dial.module#DialPageModule', canActivate: [AuthGuardService] },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule', canActivate: [AuthGuardService] },
  { path: 'music', loadChildren: './pages/music/music.module#MusicPageModule', canActivate: [AuthGuardService] },
  { path: 'global', loadChildren: './pages/global/global.module#GlobalPageModule', canActivate: [AuthGuardService] },
  { path: 'direction', loadChildren: './pages/direction/direction.module#DirectionPageModule', canActivate: [AuthGuardService] },
  { path: 'edit-profile', loadChildren: './pages/profile/edit-profile/edit-profile.module#EditProfilePageModule', canActivate: [AuthGuardService] }






  /*const routes: Routes = [
    { path: '', loadChildren: './public/login/login.module#LoginPageModule' },
    { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
    { path: 'trainer', loadChildren: './trainer/trainer.module#TrainerPageModule', canActivate: [AuthGuardService] },
    { path: 'book-client', loadChildren: './book-client/book-client.module#BookClientPageModule', canActivate: [AuthGuardService] }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
