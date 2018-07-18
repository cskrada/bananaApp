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

// importaciones para bdd firebase
import { Observable } from 'rxjs/Observable';
import { Clients } from '../../model/clients/clients.model';
import { ClientListService } from '../../services/clients.service';

@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

	// variable que almacena los valores del arreglo tipo objeto
	// items;
	searchTerm: string = '';
	searchControl: FormControl;
	items: any;
	searching: any = false;
	clientList: Observable < Clients[] >; 

	constructor(public navCtrl: NavController,
				public dataService: ClientsProvider,
				private clientService: ClientListService) {
		this.clientList = this.clientService.getClientList()
			.snapshotChanges()
			.map(
			changes => {
				return changes.map(c => ({
					key: c.payload.key, ...c.payload.val()
				}))
			});

			console.log(this.clientList);
		
		this.searchControl = new FormControl();

	}// fin de constructor

	openPage(item) {
		this.navCtrl.push(SeeclientPage, item);
	}

	// redirecciona la pagina para AgregarCliente
	addClient(){
		this.navCtrl.push(AddclientPage);
	}

	ionViewDidLoad() {
		this.items = this.dataService.orderList(this.items);
		this.setFilteredItems();
		this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
			this.searching = false;
			this.setFilteredItems();
		});
	}

	onSearchInput(){
		this.searching= true;
	}

	setFilteredItems() {
		this.items = this.dataService.filterItems(this.searchTerm);
	}
}
