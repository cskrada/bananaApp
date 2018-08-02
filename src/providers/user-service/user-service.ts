import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceProvider {




	public results : string[] = [];
	session : any;
	is_logged: boolean;

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
				this.session = true;
				// this.islogged(this.session);
				return this.session;
			}, error => {
				console.log('no');
				this.session = false;
				// this.islogged(this.session);
			});
	}

	islogged(session){
		this.session;
		console.log("la sesion esta USER: ", this.session);
	}
}
// return y asignar el valor de dato booleano, conectar user-service con app.component.ts, login