var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// importaciones de librerias
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, formBuilder, userService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.myForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
    };
    SignupPage.prototype.loginUser = function () {
        console.log("Email:" + this.myForm.value.email);
        console.log("Password:" + this.myForm.value.password);
        this.userService.postLogin(this.myForm.value.email, this.myForm.value.password);
    };
    SignupPage = __decorate([
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
        }),
        __metadata("design:paramtypes", [NavController,
            FormBuilder,
            UserServiceProvider])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map