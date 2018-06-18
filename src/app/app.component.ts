import { Component,ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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
  rootPage:any = LoginPage;
  public is_logged : boolean;
  user: Observable<firebase.User>;
  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public afAuth: AngularFireAuth) {
    this.initializeApp();

    
    this.user = afAuth.authState;
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Clients', component: ClientsPage }
    ];

      this.afAuth.authState.subscribe(res => {
          if (res && res.uid && this.is_logged == false) {
            console.log('user is logged in');
            this.is_logged = true;
          }else{
              console.log('user not logged in');
            this.is_logged = false;
          }
          });
  }//fin de constructor

initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.is_logged = false;
      if ( this.is_logged ) {
        this.is_logged = false;
      }else{
        this.is_logged = false; 
      }
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut() {
    this.is_logged = false; 
    this.afAuth.auth.signOut();
    // console.log("aaaaaaaaaaaaa");
    this.nav.setRoot(LoginPage);
  }

}

