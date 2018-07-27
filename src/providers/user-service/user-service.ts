import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceProvider {


	// public body : string[];

	public results : string[] = [];
	public is_logged : boolean;

  constructor(public http: HttpClient) {
  
  }

  postLogin(email: string, password: string){

  	this.http.post('http://192.168.1.66:8000/api/login',
					{ email, password }, 
					{ headers: new HttpHeaders()
  						.set('authorization', 'http://localhost:4200')
  						.set('app', 'BananaCli')
  	}).subscribe(data => {
			this.results.push(data['user']);
			this.results.push(data['storage']);
			this.results.push(data['storageName']);
			console.log(this.results);
		});
// this.http.post('http://192.168.1.66:8000/api/users', {
// 	headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
// 	})
// 	.subscribe(data => {
// 		this.results = data['service'];
// 		console.log(this.results);
//    	});
	}

}
