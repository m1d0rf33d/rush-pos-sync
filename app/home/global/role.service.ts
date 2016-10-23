import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppConfig} from '../../config/AppConfig';


@Injectable() 
export class RoleService {
    
    constructor(private http:Http) {

    }

    getRoles(merchantId) {

        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('auth_key'));

        return this.http.get(AppConfig.GET_ROLES_URL.replace(':merchantId', merchantId),{headers: headers}).map((res: Response) => res.json());
    }

    updateRole(roleDTO) {
        let body = JSON.stringify(roleDTO);
       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('auth_key'));
        let options = new RequestOptions({ headers: headers });

        return this.http.post(AppConfig.UPDATE_ROLES_URL, body, options).map((res: Response) => res.json());

    }
    deleteRole(roleDTO) {
         let body = JSON.stringify(roleDTO);
       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('auth_key'));
        let options = new RequestOptions({ headers: headers });

        return this.http.post(AppConfig.DELETE_ROLES_URL, body, options).map((res: Response) => res.json());
    }

    
}