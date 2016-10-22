"use strict";
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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AppConfig_1 = require('../config/AppConfig');
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.authenticate = function (username, password, loginComponent) {
        var _this = this;
        loginComponent.standby();
        var body = '';
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic Y2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=');
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        var url = AppConfig_1.AppConfig.RUSH_LOGIN_URL.replace(':username', username)
            .replace(':password', password);
        this.http.post(url, body, options)
            .subscribe(function (data) {
            if (data.json().access_token) {
                window.localStorage.setItem('auth_key', data.json().access_token);
                _this.router.navigate(['index']);
            }
            loginComponent.loading = false;
        }, function (error) {
            loginComponent.loading = false;
            setTimeout(function () {
                alert('Invalid credentials.');
            }, 200);
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map