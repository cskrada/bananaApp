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
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
// importacion de provider y el medidor de tiempo
import { ClientsProvider } from '../../providers/data/clients';
import 'rxjs/add/operator/debounceTime';
//importacion de paginas
import { SeeclientPage } from '../seeclient/seeclient';
import { AddclientPage } from '../addclient/addclient';
var ClientsPage = /** @class */ (function () {
    function ClientsPage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        // variable que almacena los valores del arreglo tipo objeto
        // items;
        this.searchTerm = '';
        this.searching = false;
        this.searchControl = new FormControl();
    } // fin de constructor
    ClientsPage.prototype.openPage = function (item) {
        this.navCtrl.push(SeeclientPage, item);
    };
    // redirecciona la pagina para AgregarCliente
    ClientsPage.prototype.addClient = function () {
        this.navCtrl.push(AddclientPage);
    };
    ClientsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.items = this.dataService.orderList(this.items);
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    ClientsPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    ClientsPage.prototype.setFilteredItems = function () {
        this.items = this.dataService.filterItems(this.searchTerm);
    };
    ClientsPage = __decorate([
        Component({
            selector: 'page-clients',
            templateUrl: 'clients.html',
        }),
        __metadata("design:paramtypes", [NavController, ClientsProvider])
    ], ClientsPage);
    return ClientsPage;
}());
export { ClientsPage };
//# sourceMappingURL=clients.js.map