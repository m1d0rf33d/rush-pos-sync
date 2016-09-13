import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

@Injectable()
export class ErrorCodeService {

    constructor(private http: Http) {
        
    }  

    getErrorCodes () {
        return this.http.get('http://52.74.190.173/parkninja-dev/app/home/error_codes/error_codes.json',{})
            .map((res: Response) => res.json());

    }
}