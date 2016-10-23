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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AppConfig_1 = require('../../config/AppConfig');
var RoleService = (function () {
    function RoleService(http) {
        this.http = http;
    }
    RoleService.prototype.getRoles = function (merchantId) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('auth_key'));
        return this.http.get(AppConfig_1.AppConfig.GET_ROLES_URL.replace(':merchantId', merchantId), { headers: headers }).map(function (res) { return res.json(); });
    };
    RoleService.prototype.updateRole = function (roleDTO) {
        var body = JSON.stringify(roleDTO);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('auth_key'));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(AppConfig_1.AppConfig.UPDATE_ROLES_URL, body, options).map(function (res) { return res.json(); });
    };
    RoleService.prototype.deleteRole = function (roleDTO) {
        var body = JSON.stringify(roleDTO);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('auth_key'));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(AppConfig_1.AppConfig.DELETE_ROLES_URL, body, options).map(function (res) { return res.json(); });
    };
    RoleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RoleService);
    return RoleService;
}());
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map