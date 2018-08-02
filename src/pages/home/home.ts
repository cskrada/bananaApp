// importacion de librerias
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

// importacion de paginas
import { ClientsPage } from '../clients/clients';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

	public pieChartLabels:string[] = ['Compras', 'Ganancias', 'Ventas'];
	public pieChartData:number[] = [100, 500, 300];
	public pieChartType:string = 'pie';

	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}
  // fin de grafico redondo

  // grafica lineal
	public barChartOptions:any = {
		scaleShowVerticalLines: false,
		responsive: true
	};

	public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	public barChartType:string = 'bar';
	public barChartLegend:boolean = true;

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

	public randomize():void {
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
	}// fin de grafica lineal


// CONSTRUCTOR ----------------------------------------------------------------------------------------
	constructor(public navCtrl: NavController, public menu: MenuController) {
		this.menu.enable(true);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

	// Clients(): redirige a la pagina de cliente 
	clients(){
		this.navCtrl.push(ClientsPage);
	}
}
 