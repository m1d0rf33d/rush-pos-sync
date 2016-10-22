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
var merchant_service_1 = require('../merchants/merchant.service');
var MerchantComponent = (function () {
    function MerchantComponent(merchantService) {
        var _this = this;
        this.merchantService = merchantService;
        this.merchant = {
            name: '',
            merchantApiKey: '',
            merchantApiSecret: '',
            customerApiKey: '',
            customerApiSecret: ''
        };
        this.display = false;
        this.selectedMerchant = {
            name: '',
            merchantApiKey: '',
            merchantApiSecret: '',
            customerApiKey: '',
            customerApiSecret: '',
            id: '',
            status: ''
        };
        this.merchants = [];
        this.merchantService.getMerchants().subscribe(function (data) {
            _this.merchants = data.data;
            console.log(_this.merchants);
        });
    }
    MerchantComponent.prototype.update = function (event, merchant) {
        var _this = this;
        event.preventDefault();
        //validate fields
        if (merchant.name === '' ||
            merchant.merchantApiKey === '' ||
            merchant.merchantApiSecret === '' ||
            merchant.customerApiKey === '' ||
            merchant.customerApiSecret === '') {
            alert('All fields are required.');
            return;
        }
        this.merchantService.create(merchant)
            .subscribe(function (data) {
            console.log(data);
            if (data.responseCode === '200') {
                _this.clearMerchant();
                alert('Merchant updated.');
                _this.merchantService.getMerchants().subscribe(function (data) { return _this.merchants = data.data; });
                _this.display = false;
            }
            else {
                alert('Merchant create failed. Please contact system administrator.');
            }
        });
    };
    MerchantComponent.prototype.create = function (event) {
        var _this = this;
        event.preventDefault();
        //validate fields
        if (this.merchant.name === '' ||
            this.merchant.merchantApiKey === '' ||
            this.merchant.merchantApiSecret === '' ||
            this.merchant.customerApiKey === '' ||
            this.merchant.customerApiSecret === '') {
            alert('All fields are required.');
            return;
        }
        this.merchantService.create(this.merchant)
            .subscribe(function (data) {
            console.log(data);
            if (data.responseCode === '200') {
                _this.clearMerchant();
                alert('Merchant created.');
                _this.merchantService.getMerchants().subscribe(function (data) { return _this.merchants = data.data; });
            }
            else {
                alert('Merchant create failed. Please contact system administrator.');
            }
        });
    };
    MerchantComponent.prototype.clear = function ($event) {
        event.preventDefault();
        this.clearMerchant();
    };
    MerchantComponent.prototype.clearMerchant = function () {
        this.merchant = {
            name: '',
            merchantApiKey: '',
            merchantApiSecret: '',
            customerApiKey: '',
            customerApiSecret: ''
        };
    };
    MerchantComponent.prototype.showDialog = function (event, merchant) {
        event.preventDefault();
        this.selectedMerchant = {
            name: merchant.name,
            merchantApiKey: merchant.merchantApiKey,
            merchantApiSecret: merchant.merchantApiSecret,
            customerApiKey: merchant.customerApiKey,
            customerApiSecret: merchant.customerApiSecret,
            id: merchant.id,
            status: merchant.status
        };
        this.display = true;
    };
    MerchantComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-merchants',
            templateUrl: 'merchant.html',
            providers: [merchant_service_1.MerchantService]
        }), 
        __metadata('design:paramtypes', [merchant_service_1.MerchantService])
    ], MerchantComponent);
    return MerchantComponent;
}());
exports.MerchantComponent = MerchantComponent;
//# sourceMappingURL=merchant.component.js.map