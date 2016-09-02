"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
var auth_manager_1 = require('./auth/auth.manager');
var account_component_1 = require('./home/accounts/account.component');
var logs_component_1 = require('./home/logs/logs.component');
var api_component_1 = require('./home/api/api.component');
var error_codes_component_1 = require("./home/error_codes/error_codes.component");
var change_logs_component_1 = require('./home/change_logs/change_logs.component');
var read_me_component_1 = require('./home/read_me/read_me.component');
exports.appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'index',
        pathMatch: 'full'
    },
    { path: 'index', component: home_component_1.HomeComponent, canActivate: [auth_manager_1.AuthManager],
        children: [
            { path: '', redirectTo: 'api', pathMatch: 'full' },
            { path: 'api', component: api_component_1.ApiComponent },
            { path: 'accounts', component: account_component_1.AccountComponent },
            { path: 'logs', component: logs_component_1.LogsComponent },
            { path: 'error_codes', component: error_codes_component_1.ErrorCodesComponent },
            { path: 'change_logs', component: change_logs_component_1.ChangeLogsComponent },
            { path: 'read_me', component: read_me_component_1.ReadMeComponent }
        ] }];
exports.AppRouterProvider = router_1.provideRouter(exports.appRoutes);
//# sourceMappingURL=routes.js.map