// importaciones de librerias 
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ClientsProvider {

// variable tipo arreglo de datos estaticos
items: any;

constructor(public http: Http) {

	this.initializeItems();


} // fin del constructor

	initializeItems(){
		this.items = [
	    	{
	    		id: '01',
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '02',
	    		name: 'Cocacola, CA',
	    		address: 'boleita sur',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '03',
	    		name: 'Granolay, CA',
	    		address: 'Av intercomunal',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '04',
	    		name: 'Doritos, CA',
	    		address: 'caracas san andres',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '05',
	    		name: 'canal i',
	    		address: 'av libertador',
	    		state: 'Tachira',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '06',
	    		name: 'telesur',
	    		address: 'boleita norte',
	    		state: 'Trujillo',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '07',
	    		name: 'flips',
	    		address: 'locatel',
	    		state: 'Amazonas',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '08',
	    		name: 'Farmatodo',
	    		address: 'farmacia de farma',
	    		state: 'Apure',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '09',
	    		name: 'samsung',
	    		address: 'los dos caminos',
	    		state: 'Merida',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '10',
	    		name: 'Nokia',
	    		address: 'Av ppal las acacias',
	    		state: 'Falcon',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '11',
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Aragua',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '12',
	    		name: 'Pepsico, CA',
	    		address: 'Av ppal las acacias',
	    		state: 'Zulia',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '13',
	    		name: 'Papajhons',
	    		address: 'distrito capital',
	    		state: 'Miranda',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	}
    	]; // fin de arreglo de objetos
	} //fin InitialzeItems()

	filterItems(searchTerm){
		return this.items.filter((item) => {
			return item.name.toLowerCase().
			indexOf(searchTerm.toLowerCase()) > -1 ||
			item.state.toLowerCase().
			indexOf(searchTerm.toLowerCase()) > -1;
		});
	}


}