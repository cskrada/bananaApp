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
        // grafico redondo: pieChartsLabels = son el nombre de las etiquetas
        //                  pieChartData = aqui se debe de proporcionar los datos numericos
        //                  pieChartType = indica el tipo de graficos
        this.pieChartLabels = ['Compras', 'Ganancias', 'Ventas'];
        this.pieChartData = [100, 500, 300];
        this.pieChartType = 'pie';
        // fin de grafico redondo
        // grafica lineal: barChartOptions = se establecen las caracteristicas que va a tener la grafica
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        // barChartLabels = son datos que se situan como pie en el eje X de la grafica
        // barChartType   = indica el tipo de grafica
        // barChartLegend = dato booleano que permite la visibilidad de la leyenda
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        // barChartData = son los datos reflejados en la grafica donde serie A y B se ve de forma comparativa
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    // events : son los eventos de los graficos lo que convierte la misma en forma dinamica
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
    // datos aleatorios en la grafica cada vez que se actualiza
    HomePage.prototype.randomize = function () {
        // Only Change 3 values
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
        /**
        * (My guess), for Angular to recognize the change in the dataset
        * it has to change the dataset variable directly,
        * so one way around it, is to clone the data, change it and then
        * assign it;
        */
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