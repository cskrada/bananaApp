// importaciones de librerias
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service'


@Component({
selector: 'page-signup',
templateUrl: 'signup.html',
})
export class SignupPage {

	myForm: FormGroup;

constructor(public navCtrl: NavController,
			public formBuilder:FormBuilder,
			public userService:UserServiceProvider
			) {
	this.myForm = this.formBuilder.group({	
		email: ['', Validators.required],
		password: ['', Validators.required]
	}); 
}
	ionViewDidLoad() {
	}

	loginUser(){
		console.log("Email:" + this.myForm.value.email);
		console.log("Password:" + this.myForm.value.password);
		this.userService.postLogin(this.myForm.value.email, this.myForm.value.password);
	}
}