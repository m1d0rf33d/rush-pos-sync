import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppConfig} from '../../config/AppConfig';

@Injectable()
export class MerchantService {
    constructor(private http:Http) {}

     getMerchants() {
        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('auth_key'));

        return this.http.get(AppConfig.GET_MERCHANTS_URL,{headers: headers}).map((res: Response) => res.json());
    }
    create(merchant) {

        let body = JSON.stringify(merchant);
       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        
        let options = new RequestOptions({ headers: headers });
        console.log(body);
        return this.http.post(AppConfig.GET_MERCHANTS_URL, body, options).map((res: Response) => res.json());
    
    }
    update(merchant) {

        let body = JSON.stringify(merchant);
       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        
        let options = new RequestOptions({ headers: headers });
        console.log(body);
        return this.http.post(AppConfig.GET_MERCHANTS_URL, body, options).map((res: Response) => res.json());
    
    }
     
}