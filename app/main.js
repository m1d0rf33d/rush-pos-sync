"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var routes_1 = require('./routes');
var auth_manager_1 = require('./auth/auth.manager');
var auth_service_1 = require('./auth/auth.service');
var common_1 = require('@angular/common');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS,
    routes_1.AppRouterProvider,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
    auth_manager_1.AuthManager,
    auth_service_1.AuthService]);
//# sourceMappingURL=main.js.map