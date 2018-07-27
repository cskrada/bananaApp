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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the AddclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddclientPage = /** @class */ (function () {
    function AddclientPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.cities = [
            {
                id: "01",
                name: "Caribia"
            },
            {
                id: "02",
                name: "San Antonio"
            },
            {
                id: "03",
                name: "Miami City"
            },
            {
                id: "04",
                name: "Buenos Aires"
            },
            {
                id: "05",
                name: "Valparaiso"
            },
            {
                id: "06",
                name: "Caracas"
            },
            {
                id: "07",
                name: "Ciudad de Valencia"
            },
            {
                id: "08",
                name: "EL sol"
            },
            {
                id: "09",
                name: "Dtto. Capital"
            }
        ];
        this.states = [
            {
                id: "01",
                name: "Dtto. Capital"
            },
            {
                id: "02",
                name: "Aragua"
            },
            {
                id: "03",
                name: "Miranda"
            },
            {
                id: "04",
                name: "Zulia"
            },
            {
                id: "05",
                name: "Apure"
            },
            {
                id: "06",
                name: "Tachira"
            },
            {
                id: "07",
                name: "Carabobo"
            },
            {
                id: "08",
                name: "Bolivar"
            },
            {
                id: "09",
                name: "Cojedes"
            }
        ];
        this.countries = [
            {
                id: "01",
                name: "Venezuela"
            }
        ];
    }
    AddclientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddclientPage');
    };
    AddclientPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddclientPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-addclient',
            templateUrl: 'addclient.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController])
    ], AddclientPage);
    return AddclientPage;
}());
export { AddclientPage };
//# sourceMappingURL=addclient.js.map