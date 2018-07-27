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
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
// importacion de DataProvider
import { ClientsProvider } from '../../providers/data/clients';
// importacion de paginas
import { EmailPage } from '../email/email';
var SeeclientPage = /** @class */ (function () {
    function SeeclientPage(navCtrl, alerta, navParams, dataService, emailComposer) {
        this.navCtrl = navCtrl;
        this.alerta = alerta;
        this.navParams = navParams;
        this.dataService = dataService;
        this.emailComposer = emailComposer;
        this.items = this.navParams.data;
    }
    SeeclientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeeclientPage');
    };
    SeeclientPage.prototype.archived = function () {
        var alert = this.alerta.create({
            title: 'Archivar Cliente',
            message: '¿Esta seguro que desea archivar este cliente?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancelado!');
                    }
                },
                {
                    text: 'Archivar',
                    handler: function (data) {
                        console.log('Archivado!');
                    }
                }
            ]
        });
        alert.present();
    };
    SeeclientPage.prototype.modified = function () {
        var alert2 = this.alerta.create({
            title: 'Modificar Cliente',
            message: '¿Esta seguro que desea modificar este cliente?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancelado!');
                    }
                },
                {
                    text: 'Modificar',
                    handler: function (data) {
                        console.log('Modificado!');
                    }
                }
            ]
        });
        alert2.present();
    };
    SeeclientPage.prototype.openEmail = function (items) {
        this.navCtrl.push(EmailPage, items);
    };
    SeeclientPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-seeclient',
            templateUrl: 'seeclient.html',
        }),
        __metadata("design:paramtypes", [NavController,
            AlertController,
            NavParams,
            ClientsProvider,
            EmailComposer])
    ], SeeclientPage);
    return SeeclientPage;
}());
export { SeeclientPage };
//# sourceMappingURL=seeclient.js.map