"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var routes_1 = require('./routes');
var auth_manager_1 = require('./auth/auth.manager');
var auth_service_1 = require('./auth/auth.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, routes_1.AppRouterProvider, auth_manager_1.AuthManager, auth_service_1.AuthService]);
//# sourceMappingURL=main.js.map