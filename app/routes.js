"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
var auth_manager_1 = require('./auth/auth.manager');
var merchant_component_1 = require('./home/merchants/merchant.component');
var accountsettings_component_1 = require('./home/account_settings/accountsettings.component');
var screenrestrictions_component_1 = require('./home/screen_restrictions/screenrestrictions.component');
var rolesettings_component_1 = require('./home/role_settings/rolesettings.component');
var branchsettings_component_1 = require('./home/branch_settings/branchsettings.component');
var updates_component_1 = require('./home/updates/updates.component');
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'index',
        pathMatch: 'full'
    },
    { path: 'index', component: home_component_1.HomeComponent, canActivate: [auth_manager_1.AuthManager],
        children: [
            { path: '', redirectTo: 'merchants', pathMatch: 'full' },
            { path: 'merchants', component: merchant_component_1.MerchantComponent },
            { path: 'accountsettings', component: accountsettings_component_1.AccountSettingsComponent },
            { path: 'screenrestrictions', component: screenrestrictions_component_1.ScreenRestrictionsComponent },
            { path: 'rolesettings', component: rolesettings_component_1.RoleSettingsComponent },
            { path: 'branchsettings', component: branchsettings_component_1.BranchSettingsComponent },
            { path: 'updates', component: updates_component_1.UpdatesComponent }
        ] }];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routes.js.map