import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class AccountService {
    constructor(private http: Http) { }

    findUser(email) {
        let body = JSON.stringify({ "email": email});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/parkninja-core/dev/findUser',body, options)
            .map((res: Response) => res.json());
    }

    getTickets(deviceId) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization','Bearer 09ea8435-403d-4062-bd84-a6907b01c9ef');
        return this.http.get('http://localhost:8080/parkninja-core/api/v2/users/tickets/101', {
            headers: headers
        })
            .map((res: Response) => res.json());
    }
}