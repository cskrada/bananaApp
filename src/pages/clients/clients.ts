//importacion de librerias
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//importacion de paginas
import { SeeclientPage } from '../seeclient/seeclient';
import { AddclientPage } from '../addclient/addclient';

@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

	// variable que almacena los valores del arreglo tipo objeto
	items;

  constructor(public navCtrl: NavController) {

  	// inicializa los items
  	this.initializeItems();
  }

  // metodo donde se guardan los datos estaticos 
  initializeItems(){
  	this.items = [
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	}
    	];
  }


	getItems(ev) {
		this.initializeItems();

		var val = ev.target.value;

		if (val && val.trim() != '') {
			this.items = this.items.filter((item) => {
				return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
				})
		}
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientsPage');
  }

// redirecciona la pagina para VerCliente
  seeClient(){
  	this.navCtrl.push(SeeclientPage);
  }

// redirecciona la pagina para AgregarCliente
  addClient(){
  	this.navCtrl.push(AddclientPage);
  }

}
