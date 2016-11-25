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
var role_service_1 = require('../../home/global/role.service');
var RoleSettingsComponent = (function () {
    function RoleSettingsComponent(merchantService, roleService) {
        var _this = this;
        this.merchantService = merchantService;
        this.roleService = roleService;
        this.messageType = '';
        this.message = '';
        this.showCustomAlert = false;
        this.display = false;
        this.selectedRole = {
            name: '',
            roleId: '',
            merchantId: ''
        };
        this.deleteAlert = false;
        this.merchants = [];
        this.roles = [];
        this.selectedMerchant = '';
        this.roleDTO = {
            merchantId: '',
            roleName: ''
        };
        this.merchantService.getMerchants().subscribe(function (data) { return _this.merchants = data.data; });
    }
    RoleSettingsComponent.prototype.getRoles = function (event) {
        var _this = this;
        event.preventDefault();
        this.roleService.getRoles(this.selectedMerchant).subscribe(function (data) { return _this.roles = data.data; });
    };
    RoleSettingsComponent.prototype.clear = function (event) {
        event.preventDefault();
        this.roleDTO = {
            merchantId: '',
            name: ''
        };
    };
    RoleSettingsComponent.prototype.create = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.roleDTO.merchantId == '' ||
            this.roleDTO.name == '') {
            this.messageType = 'OOPS!';
            this.message = 'All fields are required';
            this.showCustomAlert = true;
            return;
        }
        this.roleService.updateRole(this.roleDTO).subscribe(function (data) {
            _this.roleDTO = {
                merchantId: '',
                name: ''
            };
            _this.messageType = 'HOORAY!';
            _this.message = 'Role has been created.';
            _this.showCustomAlert = true;
        }, function (error) {
            _this.messageType = 'OOPS!';
            _this.message = 'Something unexpected happened please contact developer :)';
            _this.showCustomAlert = true;
        });
    };
    RoleSettingsComponent.prototype.showDialog = function (event, role) {
        event.preventDefault();
        this.selectedRole = {
            name: role.name,
            roleId: role.roleId,
            merchantId: role.merchantId
        };
        this.display = true;
    };
    RoleSettingsComponent.prototype.update = function (event) {
        var _this = this;
        event.preventDefault();
        this.roleService.updateRole(this.selectedRole).subscribe(function (data) {
            _this.roleService.getRoles(_this.selectedMerchant).subscribe(function (data) { return _this.roles = data.data; });
            _this.roleDTO = {
                merchantId: '',
                name: ''
            };
            _this.display = false;
            _this.messageType = 'HOORAY!';
            _this.message = 'Role has been updated';
            _this.showCustomAlert = true;
        }, function (error) {
            _this.messageType = 'OOPS!';
            _this.message = 'Something unexpected happened please contact developer :)';
            _this.showCustomAlert = true;
        });
    };
    RoleSettingsComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.roleService.deleteRole(this.selectedRole).subscribe(function (data) {
            _this.roleService.getRoles(_this.selectedMerchant).subscribe(function (data) { return _this.roles = data.data; });
            _this.selectedRole = {
                name: '',
                roleId: '',
                merchantId: ''
            };
            _this.deleteAlert = false;
            _this.messageType = 'HOORAY!';
            _this.message = 'Role has been deleted.';
            _this.showCustomAlert = true;
        }, function (error) {
            _this.messageType = 'OOPS!';
            _this.message = 'Something unexpected happened please contact developer :)';
            _this.showCustomAlert = true;
        });
    };
    RoleSettingsComponent.prototype.showDeleteAlert = function (event, role) {
        event.preventDefault();
        this.selectedRole = {
            name: role.name,
            roleId: role.roleId,
            merchantId: role.merchantId
        };
        this.deleteAlert = true;
    };
    RoleSettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-rolesettings',
            templateUrl: '/role-settings.html',
            providers: [merchant_service_1.MerchantService, role_service_1.RoleService]
        }), 
        __metadata('design:paramtypes', [merchant_service_1.MerchantService, role_service_1.RoleService])
    ], RoleSettingsComponent);
    return RoleSettingsComponent;
}());
exports.RoleSettingsComponent = RoleSettingsComponent;
//# sourceMappingURL=rolesettings.component.js.map