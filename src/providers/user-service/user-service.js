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
        // public body : string[];
        this.results = [];
        // this.session= false;
    }
    UserServiceProvider.prototype.postLogin = function (email, password) {
        var _this = this;
        this.http.post('http://192.168.1.66:8000/api/login', { email: email, password: password }, { headers: new HttpHeaders()
                .set('authorization', 'http://localhost:4200')
                .set('app', 'BananaCli')
        }).subscribe(function (data) {
            _this.results.push(data['user']);
            _this.results.push(data['storage']);
            _this.results.push(data['storageName']);
            console.log(_this.results);
            _this.session = true;
            // this.islogged(this.session);
        }, function (error) {
            console.log('no');
            _this.session = false;
            // this.islogged(this.session);
        });
        console.log(this.islogged(this.session));
    };
    UserServiceProvider.prototype.islogged = function (session) {
        return this.session;
        // console.log("la sesion esta USER: ", this.session);
    };
    UserServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserServiceProvider);
    return UserServiceProvider;
}());
export { UserServiceProvider };
// return y asignar el valor de dato booleano, conectar user-service con app.component.ts, login
//# sourceMappingURL=user-service.js.map