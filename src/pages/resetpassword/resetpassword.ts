// importaciones de librerias
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientsServiceProvider } from '../../providers/clients-service/clients-service';

// importacion de Data Provider prueba de busqueda


@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {

	clients: any[] = [];

	constructor(public navCtrl: NavController, public clientsService: ClientsServiceProvider) {
		
	}

	ionViewDidLoad() {
		this.clientsService.getClients().subscribe(
			(data) => { // Success
			this.clients = data['results'];
			}, (error) =>{
			console.error(error);
			});
	}
	
}
