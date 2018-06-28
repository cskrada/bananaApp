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
	    		name: 'pepsico, CA',
	    		razons: 'comerciales aurora',
	    		alias: 'pepsicola',
	    		address: 'Av ppal las acacias',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '02',
	    		name: 'cocacola, CA',
	    		razons: 'distribuidora gaseosa',
	    		alias: 'cocacola',
	    		address: 'boleita sur',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '03',
	    		name: 'seguros caracas',
	    		razons: 'seguro caracas oficial',
	    		alias: 'poliza de seguro',
	    		address: 'Caracas',
	    		state: 'pepsico',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '04',
	    		name: 'frito lay',
	    		razons: 'tu dorito',
	    		alias: 'pepitos',
	    		address: 'caracas san andres',
	    		state: 'Dtto. Capital',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '05',
	    		name: 'canal i',
	    		razons: 'intendencia',
	    		alias: 'canal i',
	    		address: 'av libertador',
	    		state: 'Tachira',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '06',
	    		name: 'tves',
	    		razons: 'canal expropiado',
	    		alias: 'rctv',
	    		address: 'boleita norte',
	    		state: 'Trujillo',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '07',
	    		name: 'alfonzo rivas',
	    		razons: 'flips',
	    		alias: 'flips',
	    		address: 'locatel',
	    		state: 'Amazonas',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '08',
	    		name: 'farmatodo',
	    		razons: 'farmacia la delicia',
	    		alias: 'farmatodo',
	    		address: 'farmacia de farma',
	    		state: 'Apure',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '09',
	    		name: 'samsung',
	    		razons: 'fabrica de ensamble',
	    		alias: 'samsung',
	    		address: 'los dos caminos',
	    		state: 'Merida',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '10',
	    		name: 'nokia',
	    		razons: 'fabrica de ensamble',
	    		alias: 'nokia',
	    		address: 'Av ppal las acacias',
	    		state: 'Falcon',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '11',
	    		name: 'locatel',
	    		razons: 'farmacia fantasia',
	    		alias: 'locatel',
	    		address: 'Av ppal las acacias',
	    		state: 'Aragua',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '12',
	    		name: 'mng',
	    		razons: 'tu tiendita bella',
	    		alias: 'frufru',
	    		address: 'Av ppal las acacias',
	    		state: 'Zulia',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '13',
	    		name: 'papajhons',
	    		razons: 'pizzeria la nona',
	    		alias: 'papa jhons',
	    		address: 'distrito capital',
	    		state: 'Miranda',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '14',
	    		name: 'locatel',
	    		razons: 'farmacia beauty',
	    		alias: 'locatel',
	    		address: 'distrito capital',
	    		state: 'Miranda',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '14',
	    		name: 'locatel',
	    		razons: 'farmacia boleita',
	    		alias: 'locatel',
	    		address: 'distrito capital',
	    		state: 'Miranda',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '14',
	    		name: 'locatel',
	    		razons: 'farmacia san luis',
	    		alias: 'locatel',
	    		address: 'distrito capital',
	    		state: 'Miranda',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	},
	    	{
	    		id: '14',
	    		name: 'locatel',
	    		razons: 'farmacia caracas grande',
	    		alias: 'locatel',
	    		address: 'distrito capital',
	    		state: 'Miranda',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	}
	    	,
	    	{
	    		id: '14',
	    		name: 'locatel',
	    		razons: 'farmacia San luisito',
	    		alias: 'locatel',
	    		address: 'distrito capital',
	    		state: 'Miranda',
	    		phone: '04143198569',
	    		email: 'csak@gmail.com'
	    	}
    	]; // fin de arreglo de objetos
	} //fin InitialzeItems()


	filterItems(searchTerm){
		return this.items.filter((item) => {
			return item.name.toLowerCase()
			.includes(searchTerm.toLowerCase()) || 
			item.razons.toLowerCase()
			.includes(searchTerm.toLowerCase()) ||
			item.alias.toLowerCase()
			.includes(searchTerm.toLowerCase());
		});
	}

	orderList(items){
		this.filterItems;

		this.items.sort(function ( a , b ) {
			if (a.name > b.name) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
			// a must be equal to b
			return 0;
			});
	}
}