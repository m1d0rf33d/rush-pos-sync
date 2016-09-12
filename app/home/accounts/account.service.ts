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

    getTickets(deviceId) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization','Bearer Bearer 52ac0261-79c7-49db-9fcf-22e170addc76');
        return this.http.get('http://localhost:8080/parkninja-core/api/v2/users/tickets/101', {
            headers: headers
        })
            .map((res: Response) => res.json());
    }
}