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
var error_codes_service_1 = require('../error_codes/error_codes.service');
var ApiComponent = (function () {
    function ApiComponent(apiService, errorCodeService) {
        var _this = this;
        this.apiService = apiService;
        this.errorCodeService = errorCodeService;
        this.revisions = ['v1.0.0', 'v2.0.0'];
        this.environments = [{ text: 'SAT', revision: 'v2.0.0' },
            { text: 'PROD', revision: 'v1.0.0' }];
        //Map binding with Array
        this.itemsMap = new Map();
        this.selectedApi = new api_model_1.Api();
        //Error codes
        this.errorCodes = [];
        //Data Dictionary
        this.dataDictionary = [];
        this.errorCodeService.getErrorCodes().subscribe(function (errorCodes) {
            _this.errorCodes = errorCodes;
        });
        /*   this.apiService.getDataDictionary().subscribe(data => {
               this.dataDictionary = data;
           })*/
        this.cars = [];
        this.cars.push({ label: 'Audi', value: 'Audi' });
        this.cars.push({ label: 'BMW', value: 'BMW' });
        this.cars.push({ label: 'Fiat', value: 'Fiat' });
        this.cars.push({ label: 'Ford', value: 'Ford' });
        this.cars.push({ label: 'Honda', value: 'Honda' });
        this.cars.push({ label: 'Jaguar', value: 'Jaguar' });
        this.cars.push({ label: 'Mercedes', value: 'Mercedes' });
        this.cars.push({ label: 'Renault', value: 'Renault' });
        this.cars.push({ label: 'VW', value: 'VW' });
        this.cars.push({ label: 'Volvo', value: 'Volvo' });
    }
    ApiComponent.prototype.revisionOnchange = function (value) {
        /*   this.items = [];
          // $('#env-select').val('-1');
   
           if (value == -1) {
               this.items = [];
               return;
           }
           this.apiService.getApis(value).subscribe(apis => {
               this.items = apis;
               for (let item of this.items) {
                   //Since ng2-select cannot hold the complete data we will bind it to another container
                   this.itemsMap.set(item.id, item);
               }
           });
   */ };
    ApiComponent.prototype.envOnChange = function (value) {
        /*     this.items = [];
             //$('#revision-select').val(value);
              this.apiService.getApis(value).subscribe(apis => {
                  this.items = apis;
                  for (let item of this.items) {
                      //Since ng2-select cannot hold the complete data we will bind it to another container
                      this.itemsMap.set(item.id, item);
                  }
              });*/
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