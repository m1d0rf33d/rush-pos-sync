import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MerchantService {
    constructor(private http:Http) {}

     getMerchants() {
        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('auth_key'));

        return this.http.get('http://52.74.190.173:8080/rush-pos-sync/merchant/',{headers: headers}).map((res: Response) => res.json());
    }
    create(merchant) {

        let body = JSON.stringify(merchant);
       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        
        let options = new RequestOptions({ headers: headers });
        console.log(body);
        return this.http.post('http://52.74.190.173:8080/rush-pos-sync/merchant/', body, options).map((res: Response) => res.json());
    
    }
    update(merchant) {

        let body = JSON.stringify(merchant);
       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        
        let options = new RequestOptions({ headers: headers });
        console.log(body);
        return this.http.post('http://52.74.190.173:8080/rush-pos-sync/merchant/', body, options).map((res: Response) => res.json());
    
    }
     
}