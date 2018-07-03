// importacion de librerias
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// importacion de paginas
import { ClientsPage } from '../clients/clients';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  // grafico redondo: pieChartsLabels = son el nombre de las etiquetas
  //                  pieChartData = aqui se debe de proporcionar los datos numericos
  //                  pieChartType = indica el tipo de graficos
  public pieChartLabels:string[] = ['Compras', 'Ganancias', 'Ventas'];
  public pieChartData:number[] = [100, 500, 300];
  public pieChartType:string = 'pie';
   
    // events : son los eventos de los graficos lo que convierte la misma en forma dinamica
  public chartClicked(e:any):void {
    console.log(e);
  }
   
  public chartHovered(e:any):void {
    console.log(e);
  }
  // fin de grafico redondo

  // grafica lineal: barChartOptions = se establecen las caracteristicas que va a tener la grafica
  public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
  };

  // barChartLabels = son datos que se situan como pie en el eje X de la grafica
  // barChartType   = indica el tipo de grafica
  // barChartLegend = dato booleano que permite la visibilidad de la leyenda
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  // barChartData = son los datos reflejados en la grafica donde serie A y B se ve de forma comparativa
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // events
  public chartClicked2(e:any):void {
    console.log(e);
  }

  public chartHovered2(e:any):void {
    console.log(e);
  }

  // datos aleatorios en la grafica cada vez que se actualiza
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
      /**
       * (My guess), for Angular to recognize the change in the dataset
       * it has to change the dataset variable directly,
       * so one way around it, is to clone the data, change it and then
       * assign it;
       */
}// fin de grafica lineal


// CONSTRUCTOR ----------------------------------------------------------------------------------------
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  // Clients(): redirige a la pagina de cliente 
  clients(){
  	this.navCtrl.push(ClientsPage);
  }
}
 