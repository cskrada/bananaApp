var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// importacion de librerias
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// importacion de paginas
import { ClientsPage } from '../clients/clients';
var HomePage = /** @class */ (function () {
    // CONSTRUCTOR ----------------------------------------------------------------------------------------
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pieChartLabels = ['Compras', 'Ganancias', 'Ventas'];
        this.pieChartData = [100, 500, 300];
        this.pieChartType = 'pie';
        // fin de grafico redondo
        // grafica lineal
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    HomePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // events
    HomePage.prototype.chartClicked2 = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartHovered2 = function (e) {
        console.log(e);
    };
    HomePage.prototype.randomize = function () {
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    }; // fin de grafica lineal
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    // Clients(): redirige a la pagina de cliente 
    HomePage.prototype.clients = function () {
        this.navCtrl.push(ClientsPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map