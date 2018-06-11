import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ClientsPage } from '../pages/clients/clients';
import { SeeclientPage } from '../pages/seeclient/seeclient';
import { AddclientPage } from '../pages/addclient/addclient';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ClientsPage,
    SeeclientPage,
    AddclientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    DialogModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ClientsPage,
    SeeclientPage,
    AddclientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
