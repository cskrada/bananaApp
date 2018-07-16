import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { EmailComposer } from '@ionic-native/email-composer';

import { HttpModule } from '@angular/http';  

import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ClientsPage } from '../pages/clients/clients';
import { SeeclientPage } from '../pages/seeclient/seeclient';
import { AddclientPage } from '../pages/addclient/addclient';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { EmailPage } from '../pages/email/email';


import { ChartsModule } from 'ng2-charts';
import { DataProvider } from '../providers/data/data';
import { ClientsProvider } from '../providers/data/clients';

// export const firebaseConfig = {
//   apiKey: "AIzaSyBpIBL-h59BW8L3zHF22eHcMabZtkh4hMA",
//   authDomain: "bananaapp8.firebaseapp.com",
//   databaseURL: "https://bananaapp8.firebaseio.com",
//   storageBucket: "bananaapp8.appspot.com",
//   messagingSenderId: '623763613345'
// };

export const firebaseConfig = {
  apiKey: "AIzaSyCCc_m4cL7qTat3HRVwdgdPvAffdjSgp2I",
  authDomain: "banana-light.firebaseapp.com",
  databaseURL: "https://banana-light.firebaseio.com",
  storageBucket: "banana-light.appspot.com",
  messagingSenderId: '960529017626'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ClientsPage,
    SeeclientPage,
    AddclientPage,
    SignupPage,
    ResetpasswordPage,
    EmailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ClientsPage,
    SeeclientPage,
    AddclientPage,
    SignupPage,
    ResetpasswordPage,
    EmailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    ClientsProvider
  ]
})
export class AppModule {}
