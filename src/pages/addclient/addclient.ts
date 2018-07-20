import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Clients } from '../../model/clients/clients.interface';

@IonicPage()
@Component({
  selector: 'page-addclient',
  templateUrl: 'addclient.html',
})
export class AddclientPage {

	clients = {} as Clients;

	clientsRef$ : AngularFireList<Clients[]>;

  constructor(public navCtrl: NavController, 
			  public navParams: NavParams, 
			  private viewCtrl: ViewController, 
			  private database: AngularFireDatabase) {
  	this.clientsRef$ = this.database.list('clients');
  }
	
	close(){
		this.viewCtrl.dismiss();
	}

	addClient(clients: Clients){

		this.clientsRef$.push({
			business_name: this.clients.business_name,
		});
	}

}
	// cities: Array<any> = [
	// 	{
	// 		id: "01",
	// 		name: "Caribia"
	// 	},
	// 	{
	// 		id: "02",
	// 		name: "San Antonio"
	// 	},
	// 	{
	// 		id: "03",
	// 		name: "Miami City"
	// 	},
	// 	{
	// 		id: "04",
	// 		name: "Buenos Aires"
	// 	},
	// 	{
	// 		id: "05",
	// 		name: "Valparaiso"
	// 	},
	// 	{
	// 		id: "06",
	// 		name: "Caracas"
	// 	},
	// 	{
	// 		id: "07",
	// 		name: "Ciudad de Valencia"
	// 	},
	// 	{
	// 		id: "08",
	// 		name: "EL sol"
	// 	},
	// 	{
	// 		id: "09",
	// 		name: "Dtto. Capital"
	// 	}
	// ];

	// states: Array<any> = [
	// 	{
	// 		id: "01",
	// 		name: "Dtto. Capital"
	// 	},
	// 	{
	// 		id: "02",
	// 		name: "Aragua"
	// 	},
	// 	{
	// 		id: "03",
	// 		name: "Miranda"
	// 	},
	// 	{
	// 		id: "04",
	// 		name: "Zulia"
	// 	},
	// 	{
	// 		id: "05",
	// 		name: "Apure"
	// 	},
	// 	{
	// 		id: "06",
	// 		name: "Tachira"
	// 	},
	// 	{
	// 		id: "07",
	// 		name: "Carabobo"
	// 	},
	// 	{
	// 		id: "08",
	// 		name: "Bolivar"
	// 	},
	// 	{
	// 		id: "09",
	// 		name: "Cojedes"
	// 	}
	// ];

	// countries: Array<any> = [
	// 	{
	// 		id: "01",
	// 		name: "Venezuela"
	// 	}
	// ];