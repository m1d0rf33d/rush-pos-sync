import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppConfig} from '../../config/AppConfig';

@Injectable()
export class BranchService {

    constructor(private http:Http) {

    }

    getBranches(merchantId) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer '+ window.localStorage.getItem('auth_key'));
        let options = new RequestOptions({ headers: headers });
        return this.http.get(AppConfig.GET_BRANCHES_URL.replace(':merchantId', merchantId), options).map((res: Response) => res.json()); 
    }
     updateBranch(branchDTO) {
        let body = JSON.stringify(branchDTO);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer '+ window.localStorage.getItem('auth_key'));
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppConfig.UPDATE_BRANCH_URL, body, options).map((res: Response) => res.json()); 
    }
}