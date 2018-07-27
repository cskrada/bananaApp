var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
// importacion de DataProvider
import { ClientsProvider } from '../../providers/data/clients';
var EmailPage = /** @class */ (function () {
    function EmailPage(navCtrl, navParams, dataService, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.emailComposer = emailComposer;
        this.subject = '';
        this.body = '';
        this.to = '';
        this.items = this.navParams.data;
    }
    EmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailPage');
    };
    EmailPage.prototype.send = function () {
        var email = {
            to: this.to,
            cc: [],
            bcc: [],
            attachament: [],
            subject: this.subject,
            body: this.body,
            isHtml: false,
            app: "Gmail"
        };
        this.emailComposer.open(email);
    };
    EmailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-email',
            templateUrl: 'email.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ClientsProvider,
            EmailComposer])
    ], EmailPage);
    return EmailPage;
}());
export { EmailPage };
//# sourceMappingURL=email.js.map