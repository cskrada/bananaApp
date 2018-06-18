import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


// import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = LoginPage;
  public is_logged : boolean;
  user: Observable<firebase.User>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.is_logged = false;
    this.user = afAuth.authState;

      this.afAuth.authState.subscribe(res => {
          if (res && res.uid && this.is_logged == false) {
            console.log('user is logged in');
            this.is_logged = true;
          }else{
              console.log('user not logged in');
            this.is_logged = false;
          }
          });


  }
}

