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

     authenticate (username, password, loginComponent) {
        loginComponent.standby();
        let body = '';
        let headers = new Headers();
        headers.append('Authorization', 'Basic Y2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        var url = AppConfig.RUSH_LOGIN_URL.replace(':username', username)
                                          .replace(':password', password);
       
        this.http.post(url, body, options)
        .subscribe(
            data => {
              
                if (data.json().access_token) {
                    window.localStorage.setItem('auth_key', data.json().access_token);
                    this.router.navigate(['index'])
                }
                loginComponent.loading = false;
            },
            error => { 
                loginComponent.loading = false;
                setTimeout(function() {
                       alert('Invalid credentials.') 
                  
                }, 200);
             
            });
    }
}
 