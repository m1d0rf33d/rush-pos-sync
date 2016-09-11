import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthService {

    constructor (private http: Http, private router: Router) {
    }

    authenticate (username, password) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://52.74.190.173:8080/parkninja-core/oauth/token?grant_type=password&username=' + username + '&password=' +
            password + '&client_id=parkwise', {}).subscribe(
            data => {
                if (data.json().access_token) {
                    window.localStorage.setItem('auth_key', data.json().access_token);
                    this.router.navigate(['index'])
                }

            },
            error => {  });
    }
}
