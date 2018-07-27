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
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
//importacion de paginas
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder, afAuth, alertCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.myForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    // ngOnInit(): void {
    // 	this.testService();
    // }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.testService();
        console.log('ionViewDidLoad LoginPage');
    };
    // este metodo hace la validacion de los datos ingresados, esta añadida el evento de loading
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        console.log("Email:" + this.myForm.value.email);
        console.log("Password:" + this.myForm.value.password);
        this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(function () {
            console.log("User logging");
            _this.navCtrl.setRoot(HomePage);
        }, function (err) {
            _this.loading.dismiss().then(function () {
                var alert = _this.alertCtrl.create({
                    message: err.message,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        });
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
        });
        this.loading.present();
    };
    //goToSignup(): redirige a la pagina para crear un usuario (opcional)
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(SignupPage);
    };
    //goToResetPassword(): redirige a la pagina para recuperar la contraseña
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(ResetpasswordPage);
    };
    LoginPage.prototype.testService = function () {
        var _this = this;
        this.http.get('http://192.168.1.66:8000/api/cskrada').subscribe(function (data) {
            _this.results = data['service'];
            // console.log(this.results);
        });
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            FormBuilder,
            AngularFireAuth,
            AlertController,
            LoadingController,
            HttpClient])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map