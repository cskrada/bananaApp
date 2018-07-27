var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(http) {
        this.http = http;
    }
    UserServiceProvider.prototype.getUser = function () {
        var _this = this;
        this.http.get('http://192.168.1.66:8000/api/cskrada').subscribe(function (data) {
            _this.results = data['service'];
            // console.log(this.results);
        });
    };
    UserServiceProvider.prototype.postLogin = function (email, password) {
        var _this = this;
        this.http.post('http://192.168.1.66:8000/api/cskrada_post', { email: email, password: password }, { headers: new HttpHeaders()
                .set('useremail', email)
                .set('userpassword', password)
        }).subscribe(function (data) {
            _this.results = data['cskrada_post'];
            console.log(_this.results);
        });
        // this.http.post('http://192.168.1.66:8000/api/users', {
        // 	headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        // 	})
        // 	.subscribe(data => {
        // 		this.results = data['service'];
        // 		console.log(this.results);
        //    	});
    };
    UserServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserServiceProvider);
    return UserServiceProvider;
}());
export { UserServiceProvider };
//# sourceMappingURL=user-service.js.map