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
var account_service_1 = require('../accounts/account.service');
var loading_container_1 = require('../../spinner/loading_container');
var AccountComponent = (function (_super) {
    __extends(AccountComponent, _super);
    function AccountComponent(accountService) {
        _super.call(this, false);
        this.accountService = accountService;
        this.results = [];
    }
    AccountComponent.prototype.findUser = function (email, e) {
        var _this = this;
        this.loading = true;
        e.preventDefault();
        this.accountService.findUser(email).subscribe(function (users) {
            _this.results = users;
            _this.loading = false;
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
}(loading_container_1.LoadingPage));
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map