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
var error_codes_service_1 = require('../error_codes/error_codes.service');
var ErrorCodesComponent = (function () {
    function ErrorCodesComponent(errorCodeService) {
        this.errorCodeService = errorCodeService;
        this.errorCodes = [];
    }
    ErrorCodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorCodeService.getErrorCodes().subscribe(function (errorCodes) {
            _this.errorCodes = errorCodes;
        });
    };
    ErrorCodesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-error_codes',
            templateUrl: 'error_codes.html',
            providers: [error_codes_service_1.ErrorCodeService]
        }), 
        __metadata('design:paramtypes', [error_codes_service_1.ErrorCodeService])
    ], ErrorCodesComponent);
    return ErrorCodesComponent;
}());
exports.ErrorCodesComponent = ErrorCodesComponent;
//# sourceMappingURL=error_codes.component.js.map