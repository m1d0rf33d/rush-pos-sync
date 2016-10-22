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
var AccountSettingsComponent = (function () {
    function AccountSettingsComponent(accountSettingsService, merchantService) {
        var _this = this;
        this.accountSettingsService = accountSettingsService;
        this.merchantService = merchantService;
        this.display = false;
        this.selectedAccount = {
            name: '',
            role: '',
            uuid: ''
        };
        this.merchants = [];
        this.accounts = [];
        this.merchantService.getMerchants().subscribe(function (data) { return _this.merchants = data.data; });
    }
    AccountSettingsComponent.prototype.searchMerchantAccounts = function (event) {
        var _this = this;
        event.preventDefault();
        this.accountSettingsService.getMerchantAccounts(this.selectedMerchant)
            .subscribe(function (data) {
            _this.accounts = data.data;
        });
    };
    AccountSettingsComponent.prototype.showDialog = function (event, account) {
        event.preventDefault();
        this.selectedAccount = {
            name: account.name,
            role: account.role,
            uuid: account.uuid
        };
        this.display = true;
    };
    AccountSettingsComponent.prototype.update = function (event, account) {
        var _this = this;
        event.preventDefault();
        this.accountSettingsService.updateMerchantAccounts(account)
            .subscribe(function (data) {
            alert('Account updated.');
            _this.display = false;
            _this.searchMerchantAccounts(event);
        }, function (error) {
            alert('Error encountered.');
        });
    };
    AccountSettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-account-settings',
            templateUrl: 'account-settings.html',
            providers: [accountsettings_service_1.AccountSettingsService, merchant_service_1.MerchantService]
        }), 
        __metadata('design:paramtypes', [accountsettings_service_1.AccountSettingsService, merchant_service_1.MerchantService])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());
exports.AccountSettingsComponent = AccountSettingsComponent;
//# sourceMappingURL=accountsettings.component.js.map