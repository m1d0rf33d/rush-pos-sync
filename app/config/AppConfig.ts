export class AppConfig {
    public static get RUSH_LOGIN_URL(): string {
        return  'http://localhost:8080/rush-pos-sync/oauth/token?grant_type=password&username=:username&password=:password&client_id=clientIdPassword';
    }
    public static get GET_MERCHANTS_URL(): string {
        return  'http://localhost:8080/rush-pos-sync/api/merchant/';
    }
    public static get GET_MERCHANTS_ACCOUNTS_URL(): string {
        return  'http://localhost:8080/rush-pos-sync/api/merchant/:merchantId/accounts';
    }
    public static get UPDATE_ACCOUNT_URL(): string {
        return  'http://localhost:8080/rush-pos-sync/api/merchant/accounts/update';
    }
    public static get GET_SCREENS(): string {
        return  'http://localhost:8080/rush-pos-sync/api/merchant/:merchantId/screens';
    }
    public static get UPDATE_ACCESS_URL(): string {
        return  'http://localhost:8080/rush-pos-sync/api/merchant/access/update';
    }
}