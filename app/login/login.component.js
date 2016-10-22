"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_service_1 = require('../auth/auth.service');
var router_1 = require('@angular/router');
var loading_container_1 = require('../spinner/loading_container');
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(authService, router) {
        _super.call(this, false);
        this.authService = authService;
        this.router = router;
        this.invalidCredentials = false;
        this.msgs = [];
    }
    LoginComponent.prototype.login = function (event, username, password) {
        event.preventDefault();
        this.authService.authenticate(username, password, this);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: 'login.component.html',
            moduleId: module.id,
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}(loading_container_1.LoadingPage));
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map