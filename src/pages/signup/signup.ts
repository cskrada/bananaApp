// importaciones de librerias
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
// importacion de Data Provider prueba de busqueda
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';


@Component({
selector: 'page-signup',
templateUrl: 'signup.html',
})
export class SignupPage {

	// el usuario podrá controlar, y esto se suministra a la función setFilteredItems que llamará a la función del provider
	searchTerm: string = '';

	// variable con instancia de Control
	searchControl: FormControl;

	// items: se almacena el array
	items: any;

constructor(public navCtrl: NavController, public dataService: DataProvider) {
	
	// Con FormControl, nos podemos suscribir al observable valueChange que emitirá algunos datos cada vez que cambie el valor del campo de entrada
	this.searchControl = new FormControl();

}
	// carga la vista con el metodo que esta siendo llamado declarado mas abajo. lo que nos permite especificar el tiempo que queremos esperar antes de activar lo observable
	ionViewDidLoad() {
	this.setFilteredItems();
		this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
			this.setFilteredItems();
		});
	}

	// devolverá un array de datos en función de los términos de búsqueda enviados
	setFilteredItems() {
		this.items = this.dataService.filterItems(this.searchTerm);
	}

}