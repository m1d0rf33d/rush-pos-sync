import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppConfig} from '../config/AppConfig';


@Injectable()
export class AuthService {
    constructor (private http: Http, private router: Router) {
    }

     authenticate (username, password) {
        let body = '';
        let headers = new Headers();
        headers.append('Authorization', 'Basic Y2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        var url = AppConfig.RUSH_LOGIN_URL.replace(':username', username)
                                          .replace(':password', password);
       
        return this.http.post(url, body, options).map((res: Response) => res.json());
    }
}
 