"use strict";
var AppConfig = (function () {
    function AppConfig() {
    }
    Object.defineProperty(AppConfig, "RUSH_LOGIN_URL", {
        get: function () {
            return 'http://localhost:8080/rush-pos-sync/oauth/token?grant_type=password&username=:username&password=:password&client_id=clientIdPassword';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "GET_MERCHANTS_URL", {
        get: function () {
            return 'http://localhost:8080/rush-pos-sync/api/merchant/';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "GET_MERCHANTS_ACCOUNTS_URL", {
        get: function () {
            return 'http://localhost:8080/rush-pos-sync/api/merchant/:merchantId/accounts';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "UPDATE_ACCOUNT_URL", {
        get: function () {
            return 'http://localhost:8080/rush-pos-sync/api/merchant/accounts/update';
        },
        enumerable: true,
        configurable: true
    });
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=AppConfig.js.map