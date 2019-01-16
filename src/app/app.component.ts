import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  //  public appMenu = [
  //    {title: 'page1', url: '/trainer', icon: 'star'},
  //    {title: 'page2', url: '/trainer', icon: 'star'},
  //    {title: 'Log out', url: '' }
  //  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }
  onLogout(){
    this.authService.logout();
  }
  onProfilePage(){
    this.router.navigateByUrl('/profile');
    this.menuCtrl.close();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        console.log('auth changed:' + state);
        if (state) {                                //mean user is logged in
          this.router.navigate(['/tabs']);
        } else {                                    // user is nt logged in
          this.router.navigate(['splash']);
        }
      });
    });
  }
}
