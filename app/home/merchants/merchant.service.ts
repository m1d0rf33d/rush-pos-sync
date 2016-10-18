import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MerchantService {
    constructor(private http:Http) {}

    getMerchants() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('auth_key'));

        this.http.get('http://localhost:8080/rush-pos-sync/api/merchants/', headers).subscribe(
            data => {
               alert(data);
            });
    }
}