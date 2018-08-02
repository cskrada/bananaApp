var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
// import { Observable } from 'rxjs/Observable';
import { HomePage } from '../pages/home/home';
import { ClientsPage } from '../pages/clients/clients';
import { LoginPage } from '../pages/login/login';
// importacion de Servicio de User 
import { UserServiceProvider } from '../providers/user-service/user-service';
var MyApp = /** @class */ (function () {
    // --------------------------------------------------------------------------------------------
    function MyApp(platform, statusBar, splashScreen, 
    // public afAuth: AngularFireAuth,
    menu, userService) {
        // this.afAuth.auth.signOut();
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menu = menu;
        this.userService = userService;
        this.rootPage = LoginPage;
        // this.user = afAuth.authState;
        //   this.afAuth.authState.subscribe(res => {
        //       if (res && res.uid) {
        //         this.is_logged = true;                  
        //         console.log('user is logged in_'+this.is_logged);
        //       }else{
        //         this.is_logged = false;
        //         console.log('user not logged in_'+this.is_logged);
        //       }
        //   });
        this.userService.postLogin(this.email, this.password);
        // this.is_logged = this.userService.islogged(this.is_logged);
        // console.log(this.is_logged);
        // console.log(this.userService.islogged(this.is_logged));
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'Clients', component: ClientsPage }
        ];
    } //------------------------------------fin de constructor-----------------------------------
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        this.menu.enable(false);
        // this.afAuth.auth.signOut();
        this.nav.setRoot(LoginPage);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html',
        }),
        __metadata("design:paramtypes", [Platform,
            StatusBar,
            SplashScreen,
            MenuController,
            UserServiceProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
// initializeApp() {
//   this.platform.ready().then(() => {
//     this.statusBar.styleDefault();
//     this.splashScreen.hide();
//   });
// }
//# sourceMappingURL=app.component.js.map