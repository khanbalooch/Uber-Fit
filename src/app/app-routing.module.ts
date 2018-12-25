import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
 // { path: '', redirectTo: '/tabs', pathMatch:'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'trainer', loadChildren: './trainer/trainer.module#TrainerPageModule', canActivate: [AuthGuardService] },
  { path: 'book-client', loadChildren: './book-client/book-client.module#BookClientPageModule', canActivate: [AuthGuardService] }


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
export class AppRoutingModule {}
