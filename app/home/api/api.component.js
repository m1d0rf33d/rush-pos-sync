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
var api_model_1 = require('../api/api.model');
var api_service_1 = require('../api/api.service');
var common_1 = require('@angular/common');
var ng2_select_1 = require('../../../node_modules/ng2-select/ng2-select');
var error_codes_service_1 = require('../error_codes/error_codes.service');
var ApiComponent = (function () {
    function ApiComponent(apiService, errorCodeService) {
        var _this = this;
        this.apiService = apiService;
        this.errorCodeService = errorCodeService;
        this.revisions = ['v1.0.0', 'v2.0.0'];
        this.environments = [{ text: 'SAT', revision: 'v2.0.0' },
            { text: 'PROD', revision: 'v1.0.0' }];
        this.items = [];
        //Map binding with Array
        this.itemsMap = new Map();
        this.selectedApi = new api_model_1.Api();
        //Error codes
        this.errorCodes = [];
        //ng2-select functions
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
        this.errorCodeService.getErrorCodes().subscribe(function (errorCodes) {
            _this.errorCodes = errorCodes;
        });
    }
    ApiComponent.prototype.revisionOnchange = function (value) {
        var _this = this;
        this.items = [];
        $('#env-select').val('-1');
        if (value == -1) {
            this.items = [];
            return;
        }
        this.apiService.getApis(value).subscribe(function (apis) {
            _this.items = apis;
            for (var _i = 0, _a = _this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                //Since ng2-select cannot hold the complete data we will bind it to another container
                _this.itemsMap.set(item.id, item);
            }
        });
    };
    ApiComponent.prototype.envOnChange = function (value) {
        var _this = this;
        this.items = [];
        $('#revision-select').val(value);
        this.apiService.getApis(value).subscribe(function (apis) {
            _this.items = apis;
            for (var _i = 0, _a = _this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                //Since ng2-select cannot hold the complete data we will bind it to another container
                _this.itemsMap.set(item.id, item);
            }
        });
    };
    Object.defineProperty(ApiComponent.prototype, "disabledV", {
        get: function () {
            return this._disabledV;
        },
        set: function (value) {
            this._disabledV = value;
            this.disabled = this._disabledV === '1';
        },
        enumerable: true,
        configurable: true
    });
    ApiComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value.id);
        this.selectedApi = this.itemsMap.get(value.id);
    };
    ApiComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    ApiComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    ApiComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    ApiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-api',
            templateUrl: 'api.component.html',
            providers: [api_service_1.ApiService, error_codes_service_1.ErrorCodeService],
            directives: [ng2_select_1.SELECT_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, error_codes_service_1.ErrorCodeService])
    ], ApiComponent);
    return ApiComponent;
}());
exports.ApiComponent = ApiComponent;
//# sourceMappingURL=api.component.js.map