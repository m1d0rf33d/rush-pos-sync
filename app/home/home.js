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
var api_component_1 = require('../home/api/api.component');
var account_component_1 = require('../home/accounts/account.component');
var change_logs_component_1 = require('../home/change_logs/change_logs.component');
var error_codes_component_1 = require('../home/error_codes/error_codes.component');
var logs_component_1 = require('../home/logs/logs.component');
var read_me_component_1 = require('../home/read_me/read_me.component');
var routes_1 = require('../routes');
var common_1 = require('@angular/common');
var primeng_1 = require('primeng/primeng');
var forms_1 = require('@angular/forms');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [routes_1.routing, common_1.CommonModule, primeng_1.DropdownModule],
            declarations: [home_component_1.HomeComponent,
                api_component_1.ApiComponent,
                account_component_1.AccountComponent,
                change_logs_component_1.ChangeLogsComponent,
                error_codes_component_1.ErrorCodesComponent,
                logs_component_1.LogsComponent,
                read_me_component_1.ReadMeComponent, forms_1.FORM_DIRECTIVES],
            providers: [routes_1.appRoutingProviders]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.js.map