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
var api_service_1 = require('../api/api.service');
var error_codes_service_1 = require('../error_codes/error_codes.service');
var ApiComponent = (function () {
    function ApiComponent(apiService, errorCodeService) {
        var _this = this;
        this.apiService = apiService;
        this.errorCodeService = errorCodeService;
        this.itemsMap = new Map();
        //Error codes
        this.errorCodes = [];
        //Data Dictionary
        this.dataDictionary = [];
        this.selectedApiData = {};
        this.errorCodeService.getErrorCodes().subscribe(function (errorCodes) {
            _this.errorCodes = errorCodes;
        });
        this.apiService.getDataDictionary().subscribe(function (data) {
            _this.dataDictionary = data;
        });
        this.versions = [];
        this.versions.push({ label: '--Select--', value: '-1' });
        this.versions.push({ label: 'v1.0.0', value: 'v1.0.0' });
        this.versions.push({ label: 'v2.0.0', value: 'v2.0.0' });
        this.environments = [];
        this.environments.push({ label: '--Select--', value: '-1' });
        this.environments.push({ label: 'SAT', value: 'v2.0.0' });
        this.environments.push({ label: 'PROD', value: 'v1.0.0' });
        this.apiDataList = [];
        this.apiDataList.push({ label: '--Select--', value: '-1' });
    }
    ApiComponent.prototype.versionOnChange = function (event, value) {
        var _this = this;
        //Reset environment dropdown to --select--
        this.selectedEnvironment = this.environments[0].value;
        this.apiService.getApis(this.selectedVersion).subscribe(function (apis) {
            _this.apiDataList = [];
            _this.apiDataList.push({ label: '--Select--', value: '-1' });
            for (var _i = 0, apis_1 = apis; _i < apis_1.length; _i++) {
                var api = apis_1[_i];
                _this.apiDataList.push({ label: api.text, value: api.id });
                _this.itemsMap.set(api.id, api);
            }
        });
    };
    ApiComponent.prototype.apiOnChange = function (event, value) {
        this.selectedApiData = this.itemsMap.get(this.selectedApi);
    };
    ApiComponent.prototype.envOnChange = function (event, value) {
        var _this = this;
        if (this.selectedEnvironment == '-1') {
            this.apiDataList = [];
            this.apiDataList.push({ label: '--Select--', value: '-1' });
            this.selectedVersion = this.versions[0].value;
            return;
        }
        this.selectedVersion = this.selectedEnvironment;
        this.apiService.getApis(this.selectedVersion).subscribe(function (apis) {
            _this.apiDataList = [];
            _this.apiDataList.push({ label: '--Select--', value: '-1' });
            for (var _i = 0, apis_2 = apis; _i < apis_2.length; _i++) {
                var api = apis_2[_i];
                _this.apiDataList.push({ label: api.text, value: api.id });
                _this.itemsMap.set(api.id, api);
            }
        });
    };
    ApiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-api',
            templateUrl: 'api.component.html',
            providers: [api_service_1.ApiService, error_codes_service_1.ErrorCodeService]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, error_codes_service_1.ErrorCodeService])
    ], ApiComponent);
    return ApiComponent;
}());
exports.ApiComponent = ApiComponent;
//# sourceMappingURL=api.component.js.map