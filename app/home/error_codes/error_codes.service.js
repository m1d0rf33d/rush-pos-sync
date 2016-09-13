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
var http_1 = require('@angular/http');
var ErrorCodeService = (function () {
    function ErrorCodeService(http) {
        this.http = http;
    }
    ErrorCodeService.prototype.getErrorCodes = function () {
        return this.http.get('http://parkninja-dev/app/home/error_codes/error_codes.json', {})
            .map(function (res) { return res.json(); });
    };
    ErrorCodeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ErrorCodeService);
    return ErrorCodeService;
}());
exports.ErrorCodeService = ErrorCodeService;
//# sourceMappingURL=error_codes.service.js.map