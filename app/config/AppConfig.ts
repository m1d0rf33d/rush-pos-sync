export class AppConfig {
    public static get RUSH_LOGIN_URL(): string {
        return  'http://localhost:8080/rush-pos-sync/oauth/token?grant_type=password&username=:username&password=:password&client_id=clientIdPassword';
    }
}