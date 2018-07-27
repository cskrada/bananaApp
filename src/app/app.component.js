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
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { ClientsPage } from '../pages/clients/clients';
import { LoginPage } from '../pages/login/login';
var MyApp = /** @class */ (function () {
    // --------------------------------------------------------------------------------------------
    function MyApp(platform, statusBar, splashScreen, afAuth, menu) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.menu = menu;
        this.rootPage = LoginPage;
        this.afAuth.auth.signOut();
        this.is_logged = false;
        this.user = afAuth.authState;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.is_logged = true;
                console.log('user is logged in_' + _this.is_logged);
            }
            else {
                _this.is_logged = false;
                console.log('user not logged in_' + _this.is_logged);
            }
        });
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'Clients', component: ClientsPage }
        ];
    } //------------------------------------fin de constructor-----------------------------------
    // initializeApp() {
    //   this.platform.ready().then(() => {
    //     this.statusBar.styleDefault();
    //     this.splashScreen.hide();
    //   });
    // }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        this.menu.enable(false);
        this.afAuth.auth.signOut();
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
            AngularFireAuth,
            MenuController])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map