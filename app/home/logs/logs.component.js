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
var logs_service_1 = require('../logs/logs.service');
var LogsComponent = (function () {
    function LogsComponent(logsService) {
        this.logsService = logsService;
        this.loading = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        //   this.logsService.getLogs('CATALINA_OUT_LOG').subscribe(logs => this.logs = logs.reverse());
    };
    LogsComponent.prototype.getLogs = function (logFile, e) {
        var _this = this;
        this.loading = true;
        e.preventDefault();
        this.logsService.getLogs(logFile).subscribe(function (data) {
            _this.logs = data.reverse();
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
    };
    LogsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-logs',
            templateUrl: 'logs.component.html',
            providers: [logs_service_1.LogsService]
        }), 
        __metadata('design:paramtypes', [logs_service_1.LogsService])
    ], LogsComponent);
    return LogsComponent;
}());
exports.LogsComponent = LogsComponent;
//# sourceMappingURL=logs.component.js.map