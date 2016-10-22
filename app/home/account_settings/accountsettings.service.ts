import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppConfig} from '../../config/AppConfig';

@Injectable()
export class AccountSettingsService {

     constructor(private http:Http) {

     }

     getMerchantAccounts(merchantId) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer '+ window.localStorage.getItem('auth_key'));
        let options = new RequestOptions({ headers: headers });
        return this.http.get(AppConfig.GET_MERCHANTS_ACCOUNTS_URL.replace(':merchantId', merchantId), options).map((res: Response) => res.json()); 
     }

     updateMerchantAccounts(account) {
        let body = JSON.stringify(account);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer '+ window.localStorage.getItem('auth_key'));
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppConfig.UPDATE_ACCOUNT_URL, body, options).map((res: Response) => res.json()); 
     
     }
}