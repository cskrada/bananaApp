import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Clients } from '../model/clients/clients.model';
 
@Injectable()
export class ClientListService {
 
    private clientRef = this.db.list<Clients>('clients');
 
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
}