import { Component,ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


import { HomePage } from '../pages/home/home';
import { ClientsPage } from '../pages/clients/clients';

import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  user: Observable<firebase.User>;
  pages: Array<{title: string, component: any}>;
  public is_logged : boolean;

// --------------------------------------------------------------------------------------------
  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public afAuth: AngularFireAuth,
              public menu: MenuController){
    this.afAuth.auth.signOut();
    this.is_logged= false;
    
    this.user = afAuth.authState;
      this.afAuth.authState.subscribe(res => {
          if (res && res.uid) {
            this.is_logged = true;                  
            console.log('user is logged in_'+this.is_logged);

          }else{
            this.is_logged = false;
            console.log('user not logged in_'+this.is_logged);
          }
      });


    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Clients', component: ClientsPage }
    ];
  }//------------------------------------fin de constructor-----------------------------------

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }
  
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logOut() {
    this.menu.enable(false); 
    this.afAuth.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

}

