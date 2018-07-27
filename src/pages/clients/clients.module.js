var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientsPage } from './clients';
var ClientsPageModule = /** @class */ (function () {
    function ClientsPageModule() {
    }
    ClientsPageModule = __decorate([
        NgModule({
            declarations: [
                ClientsPage,
            ],
            imports: [
                IonicPageModule.forChild(ClientsPage),
            ],
        })
    ], ClientsPageModule);
    return ClientsPageModule;
}());
export { ClientsPageModule };
//# sourceMappingURL=clients.module.js.map