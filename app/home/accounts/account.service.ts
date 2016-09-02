import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class AccountService {
    constructor(private http: Http) { }

    findUser(email) {
        let body = JSON.stringify({ "email": email});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://52.74.190.173:8080/parkninja-core/dev/findUser',body, options)
            .map((res: Response) => res.json());
    }
}