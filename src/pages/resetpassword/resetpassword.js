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
import { ClientsServiceProvider } from '../../providers/clients-service/clients-service';
var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(navCtrl, clientsService) {
        this.navCtrl = navCtrl;
        this.clientsService = clientsService;
        this.clients = [];
    }
    ResetpasswordPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.clientsService.getClients().subscribe(function (data) {
            _this.clients = data['results'];
        }, function (error) {
            console.error(error);
        });
    };
    ResetpasswordPage = __decorate([
        Component({
            selector: 'page-resetpassword',
            templateUrl: 'resetpassword.html',
        }),
        __metadata("design:paramtypes", [NavController, ClientsServiceProvider])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());
export { ResetpasswordPage };
//# sourceMappingURL=resetpassword.js.map