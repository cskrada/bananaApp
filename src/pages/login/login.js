var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//importacion de librerias
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
// importacion de servicio de cliente
import { UserServiceProvider } from '../../providers/user-service/user-service';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder, alertCtrl, loadingCtrl, userService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.myForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginUser2 = function () {
        console.log(this.myForm.value.email);
        console.log(this.myForm.value.password);
        // this.loginSession();		
        this.userService.postLogin(this.myForm.value.email, this.myForm.value.password);
        this.loginSession();
    };
    LoginPage.prototype.loginSession = function () {
        this.me = this.userService.islogged(this.session);
        console.log("la sesion esta LOGIN: ", this.me);
        // if ( this.me == true  ){
        // 	this.navCtrl.setRoot(HomePage);
        // }else{
        // 	console.log("no ingreso");
        // }
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(ResetpasswordPage);
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            FormBuilder,
            AlertController,
            LoadingController,
            UserServiceProvider])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
// loginUser(){
// 	console.log("Email:" + this.myForm.value.email);
// 	console.log("Password:" + this.myForm.value.password);
// 	this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(() => {
// 		console.log("User logging");
// 		this.navCtrl.setRoot(HomePage);
// 		}, (err) => {
// 		this.loading.dismiss().then( () => {
// 			let alert = this.alertCtrl.create({
// 				message: err.message,
// 				buttons: [
// 				{
// 					text: "Ok",
// 					role: 'cancel'
// 				}
// 				]
// 			});
// 			alert.present();
// 		});
// 	});
// 	this.loading = this.loadingCtrl.create({
// 		dismissOnPageChange: true,
// 	});
// 	this.loading.present();
// }
//# sourceMappingURL=login.js.map