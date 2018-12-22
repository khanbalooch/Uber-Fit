import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'trainer', loadChildren: './trainer/trainer.module#TrainerPageModule' },
  { path: 'loader', loadChildren: './loader/loader.module#LoaderPageModule' },  { path: 'book-client', loadChildren: './book-client/book-client.module#BookClientPageModule' }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
