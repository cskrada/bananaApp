import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientsServiceProvider {

constructor(public http: HttpClient) {
}
	getClients() {
	  return this.http.get('https://randomuser.me/api/?results=25');
	}
}
