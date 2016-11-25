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
//HomeModule Config
var core_1 = require('@angular/core');
var home_component_1 = require('../home/home.component');
var routes_1 = require('../routes');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var angular2_datatable_1 = require('angular2-datatable');
var merchant_component_1 = require('../home/merchants/merchant.component');
var primeng_1 = require('primeng/primeng');
var accountsettings_component_1 = require('../home/account_settings/accountsettings.component');
var screenrestrictions_component_1 = require('../home/screen_restrictions/screenrestrictions.component');
var rolesettings_component_1 = require('../home/role_settings/rolesettings.component');
var branchsettings_component_1 = require('../home/branch_settings/branchsettings.component');
var updates_component_1 = require('../home/updates/updates.component');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [routes_1.routing, common_1.CommonModule, forms_1.FormsModule, angular2_datatable_1.DataTableModule, primeng_1.DialogModule],
            declarations: [home_component_1.HomeComponent, merchant_component_1.MerchantComponent, accountsettings_component_1.AccountSettingsComponent, screenrestrictions_component_1.ScreenRestrictionsComponent, rolesettings_component_1.RoleSettingsComponent, branchsettings_component_1.BranchSettingsComponent, updates_component_1.UpdatesComponent],
            providers: [routes_1.appRoutingProviders]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.js.map