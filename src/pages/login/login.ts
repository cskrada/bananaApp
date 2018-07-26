//importacion de librerias
import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController,Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

import {HttpClient} from '@angular/common/http';


//importacion de paginas
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';


@IonicPage()
@Component({
selector: 'page-login',
templateUrl: 'login.html',
})
export class LoginPage {

	myForm: FormGroup;
	public results : string[];
	public loading:Loading;

constructor(public navCtrl: NavController,
				public formBuilder:FormBuilder,
				public afAuth: AngularFireAuth,
				public alertCtrl: AlertController,
				public loadingCtrl: LoadingController,
				private http: HttpClient){

	this.myForm = this.formBuilder.group({
		email: ['', Validators.required],
		password: ['', Validators.required]
	}); 
}

	// ngOnInit(): void {
	// 	this.testService();
	// }

	ionViewDidLoad() {
		this.testService();
		console.log('ionViewDidLoad LoginPage');
	}

	// este metodo hace la validacion de los datos ingresados, esta añadida el evento de loading
	loginUser(){
		console.log("Email:" + this.myForm.value.email);
		console.log("Password:" + this.myForm.value.password);

		this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(() => {
			console.log("User logging");
			this.navCtrl.setRoot(HomePage);
			}, (err) => {
			this.loading.dismiss().then( () => {
				let alert = this.alertCtrl.create({
					message: err.message,
					buttons: [
					{
						text: "Ok",
						role: 'cancel'
					}
					]
				});
				alert.present();
			});
		});
		this.loading = this.loadingCtrl.create({
			dismissOnPageChange: true,
		});
		this.loading.present();
	}

	//goToSignup(): redirige a la pagina para crear un usuario (opcional)
	goToSignup(){
		this.navCtrl.push(SignupPage);
	}

	//goToResetPassword(): redirige a la pagina para recuperar la contraseña
	goToResetPassword(){
		this.navCtrl.push(ResetpasswordPage);
	}

	testService () {
		this.http.get('http://192.168.1.66:8000/api/cskrada').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['service'];
      console.log(this.results);
    });
	}

}
