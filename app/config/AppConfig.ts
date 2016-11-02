export class AppConfig {
    public static get RUSH_LOGIN_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/oauth/token?grant_type=password&username=:username&password=:password&client_id=clientIdPassword';
    }
    public static get GET_MERCHANTS_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/';
    }
    public static get GET_MERCHANTS_ACCOUNTS_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/:merchantId/accounts';
    }
    public static get UPDATE_ACCOUNT_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/accounts/update';
    }
    public static get GET_SCREENS(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/:merchantId/screens';
    }
    public static get UPDATE_ACCESS_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/access/update';
    }
    public static get GET_ROLES_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/:merchantId/roles';
    }
    public static get UPDATE_ROLES_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/roles/update';
    }
      public static get DELETE_ROLES_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/roles/delete';
    }
      public static get GET_BRANCHES_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/:merchantId/branch';
    }
      public static get UPDATE_BRANCH_URL(): string {
        return  'http://52.74.190.173:8080/rush-pos-sync/api/merchant/branch';
    }
}