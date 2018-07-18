import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Clients } from '../model/clients/clients.interface';
 
@Injectable()
export class ClientListService {
 
    private clientRef = this.db.list<Clients>('clients');
    // items: any;
 
    constructor(private db: AngularFireDatabase) { }
 
    getClientList() {
        return this.clientRef;
    }
 
    addClient(client: Clients) {
        return this.clientRef.push(client);
    }
 
    updateClient(client: Clients) {
        return this.clientRef.update(client.key, client);
    }
 
    removeClient(client: Clients) {
        return this.clientRef.remove(client.key);
    }

    // filterItems(searchTerm){
    //     return this.items.filter((item) => {
    //         return item.name.toLowerCase()
    //         .includes(searchTerm.toLowerCase()) || 
    //         item.razons.toLowerCase()
    //         .includes(searchTerm.toLowerCase()) ||
    //         item.alias.toLowerCase()
    //         .includes(searchTerm.toLowerCase());
    //     });
    // }

    // orderList(items){
    //     this.filterItems;

    //     this.items.sort(function ( a , b ) {
    //         if (a.razons > b.razons) {
    //             return 1;
    //         }
    //         if (a.razons < b.razons) {
    //             return -1;
    //         }
    //         // a must be equal to b
    //         return 0;
    //     });
    // }
}