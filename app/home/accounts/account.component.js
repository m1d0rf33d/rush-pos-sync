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
var account_service_1 = require('../accounts/account.service');
var AccountComponent = (function () {
    function AccountComponent(accountService) {
        this.accountService = accountService;
        this.results = [];
    }
    AccountComponent.prototype.findUser = function (email, e) {
        var _this = this;
        e.preventDefault();
        this.accountService.findUser(email).subscribe(function (users) {
            _this.results = users;
        });
    };
    AccountComponent.prototype.notWorking = function (e) {
        e.preventDefault();
    };
    AccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-accounts',
            templateUrl: 'account.component.html',
            providers: [account_service_1.AccountService]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map