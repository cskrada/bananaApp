// importaciones de librerias
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

// importacion de Data Provider prueba de busqueda
import { ClientsProvider } from '../../providers/data/clients';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {

	searchTerm: string = '';
	searchControl: FormControl;
	items: any;
	searching: any = false;

constructor(public navCtrl: NavController, public dataService: ClientsProvider) {
  	this.searchControl = new FormControl();
}

	ionViewDidLoad() {
		this.setFilteredItems();
		this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
			this.searching = false;
			this.setFilteredItems();
		});
	}

	onSearchInput(){
		this.searching= true;
	}

	setFilteredItems() {
		this.items = this.dataService.filterItems(this.searchTerm);
		console.log(this.searchTerm+' '+this.searchTerm.length);
	}

}
