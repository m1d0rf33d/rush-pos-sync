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
var accountsettings_service_1 = require('../account_settings/accountsettings.service');
var merchant_service_1 = require('../merchants/merchant.service');
var role_service_1 = require('../global/role.service');
var AccountSettingsComponent = (function () {
    function AccountSettingsComponent(accountSettingsService, merchantService, roleService) {
        var _this = this;
        this.accountSettingsService = accountSettingsService;
        this.merchantService = merchantService;
        this.roleService = roleService;
        this.messageType = '';
        this.message = '';
        this.showCustomAlert = false;
        this.display = false;
        this.selectedAccount = {
            name: '',
            role: '',
            roleId: '',
            uuid: ''
        };
        this.merchants = [];
        this.accounts = [];
        this.roles = [];
        this.merchantService.getMerchants().subscribe(function (data) { return _this.merchants = data.data; });
    }
    AccountSettingsComponent.prototype.searchMerchantAccounts = function (event) {
        var _this = this;
        event.preventDefault();
        this.accountSettingsService.getMerchantAccounts(this.selectedMerchant)
            .subscribe(function (data) {
            if (data.responseCode == '200') {
                _this.messageType = 'HOORAY!';
                _this.message = 'Total search results: ' + data.data.length;
                _this.showCustomAlert = true;
                _this.accounts = data.data;
            }
            else {
                _this.messageType = 'OOPS!';
                _this.message = 'No merchant match with RUSH server.';
                _this.showCustomAlert = true;
            }
        });
        this.roleService.getRoles(this.selectedMerchant).subscribe(function (data) { return _this.roles = data.data; });
    };
    AccountSettingsComponent.prototype.showDialog = function (event, account) {
        event.preventDefault();
        this.selectedAccount = {
            name: account.name,
            role: account.role,
            uuid: account.uuid,
            roleId: account.roleId
        };
        this.display = true;
    };
    AccountSettingsComponent.prototype.update = function (event, account) {
        var _this = this;
        event.preventDefault();
        if (account.roleId == undefined) {
            this.messageType = 'OOPS!';
            this.message = 'All fields are required!';
            this.showCustomAlert = true;
            return;
        }
        this.accountSettingsService.updateMerchantAccounts(account)
            .subscribe(function (data) {
            _this.messageType = 'HOORAY!';
            _this.message = 'Account has been updated.';
            _this.showCustomAlert = true;
            _this.display = false;
            _this.searchMerchantAccounts(event);
        }, function (error) {
            _this.messageType = 'OOPS!';
            _this.message = 'Something went wrong please contact developer :)';
            _this.showCustomAlert = true;
        });
    };
    AccountSettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-account-settings',
            templateUrl: '/rush-pos-sync/account-settings.html',
            providers: [accountsettings_service_1.AccountSettingsService, merchant_service_1.MerchantService, role_service_1.RoleService]
        }), 
        __metadata('design:paramtypes', [accountsettings_service_1.AccountSettingsService, merchant_service_1.MerchantService, role_service_1.RoleService])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());
exports.AccountSettingsComponent = AccountSettingsComponent;
//# sourceMappingURL=accountsettings.component.js.map