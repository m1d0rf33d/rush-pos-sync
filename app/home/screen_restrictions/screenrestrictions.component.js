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
var merchant_service_1 = require('../../home/merchants/merchant.service');
var screenrestrictions_service_1 = require('../../home/screen_restrictions/screenrestrictions.service');
var ScreenRestrictionsComponent = (function () {
    function ScreenRestrictionsComponent(merchantService, screenRestrictionsService) {
        var _this = this;
        this.merchantService = merchantService;
        this.screenRestrictionsService = screenRestrictionsService;
        this.messageType = '';
        this.message = '';
        this.showCustomAlert = false;
        this.display = false;
        this.selectedRole = {
            name: '',
            screens: [],
            merchantId: '',
            roleId: ''
        };
        this.merchants = [];
        this.roleDTOs = [];
        this.selectedMerchant = '';
        this.merchantService.getMerchants().subscribe(function (data) { return _this.merchants = data.data; });
    }
    ScreenRestrictionsComponent.prototype.getScreens = function (event) {
        var _this = this;
        event.preventDefault();
        this.screenRestrictionsService.getScreens(this.selectedMerchant).subscribe(function (data) {
            if (data.responseCode == '200') {
                _this.messageType = 'HOORAY!';
                _this.message = 'Total search results: ' + data.data.roleDTOs.length;
                _this.showCustomAlert = true;
                _this.roleDTOs = data.data.roleDTOs;
                _this.screens = data.data.screens;
            }
            else {
                _this.messageType = 'OOPS!';
                _this.message = 'Something unexpected happened please contact developer :)';
                _this.showCustomAlert = false;
            }
        });
    };
    ScreenRestrictionsComponent.prototype.showDialog = function (event, account) {
        event.preventDefault();
        var screens = [];
        for (var i = 0; i < account.screens.length; i++) {
            var screen = {
                name: account.screens[i].name,
                checked: account.screens[i].checked
            };
            screens.push(screen);
        }
        this.selectedRole = {
            name: account.name,
            screens: screens,
            merchantId: account.merchantId,
            roleId: account.roleId
        };
        this.display = true;
    };
    ScreenRestrictionsComponent.prototype.update = function (event) {
        var _this = this;
        event.preventDefault();
        this.screenRestrictionsService.updateAccess(this.selectedRole).subscribe(function (data) {
            _this.messageType = 'HOORAY!';
            _this.message = 'Screen restrictions has been updated.';
            _this.showCustomAlert = true;
            _this.display = false;
            _this.screenRestrictionsService.getScreens(_this.selectedMerchant).subscribe(function (data) {
                _this.roleDTOs = data.data.roleDTOs;
                _this.screens = data.data.screens;
            });
        }, function (error) {
            _this.messageType = 'OOPS!';
            _this.message = 'Something unexpected happened please contact developer :)';
            _this.showCustomAlert = true;
        });
    };
    ScreenRestrictionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-screen-restrictions',
            templateUrl: '/rush-pos-sync/screen-restrictions.html',
            providers: [merchant_service_1.MerchantService, screenrestrictions_service_1.ScreenRestrictionsService]
        }), 
        __metadata('design:paramtypes', [merchant_service_1.MerchantService, screenrestrictions_service_1.ScreenRestrictionsService])
    ], ScreenRestrictionsComponent);
    return ScreenRestrictionsComponent;
}());
exports.ScreenRestrictionsComponent = ScreenRestrictionsComponent;
//# sourceMappingURL=screenrestrictions.component.js.map