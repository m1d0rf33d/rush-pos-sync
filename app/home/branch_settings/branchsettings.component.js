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
var branchsettings_service_1 = require('../../home/branch_settings/branchsettings.service');
var BranchSettingsComponent = (function () {
    function BranchSettingsComponent(merchantService, branchService) {
        var _this = this;
        this.merchantService = merchantService;
        this.branchService = branchService;
        this.messageType = '';
        this.message = '';
        this.showCustomAlert = false;
        this.display = false;
        this.selectedBranch = {
            branchName: '',
            branchId: '',
            uuid: '',
            withVk: ''
        };
        this.merchants = [];
        this.branchDTOs = [];
        this.selectedMerchant = '';
        this.merchantService.getMerchants().subscribe(function (data) { return _this.merchants = data.data; });
    }
    BranchSettingsComponent.prototype.getBranches = function (event) {
        var _this = this;
        event.preventDefault();
        this.branchService.getBranches(this.selectedMerchant).subscribe(function (data) {
            if (data.responseCode == '200') {
                _this.messageType = 'HOORAY!';
                _this.message = 'Total search results: ' + data.data.length;
                _this.showCustomAlert = true;
                _this.branchDTOs = data.data;
            }
            else {
                _this.messageType = 'OOPS!';
                _this.message = 'Something unexpected happened please contact developer :)';
                _this.showCustomAlert = false;
            }
        });
    };
    BranchSettingsComponent.prototype.showDialog = function (event, item) {
        event.preventDefault();
        this.selectedBranch = {
            branchName: item.branchName,
            branchId: item.branchId,
            uuid: item.uuid,
            withVk: item.withVk
        };
        this.display = true;
    };
    BranchSettingsComponent.prototype.update = function (event) {
        var _this = this;
        event.preventDefault();
        this.branchService.updateBranch(this.selectedBranch).subscribe(function (data) {
            _this.messageType = 'HOORAY!';
            _this.message = 'Branch has been updated.';
            _this.showCustomAlert = true;
            _this.display = false;
            _this.branchService.getBranches(_this.selectedMerchant).subscribe(function (data) {
                _this.branchDTOs = data.data;
            });
        }, function (error) {
            _this.messageType = 'OOPS!';
            _this.message = 'Something unexpected happened please contact developer :)';
            _this.showCustomAlert = true;
        });
    };
    BranchSettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '/branch-settings.html',
            providers: [merchant_service_1.MerchantService, branchsettings_service_1.BranchService]
        }), 
        __metadata('design:paramtypes', [merchant_service_1.MerchantService, branchsettings_service_1.BranchService])
    ], BranchSettingsComponent);
    return BranchSettingsComponent;
}());
exports.BranchSettingsComponent = BranchSettingsComponent;
//# sourceMappingURL=branchsettings.component.js.map