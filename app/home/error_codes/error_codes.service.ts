import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

@Injectable()
export class ErrorCodeService {

    constructor(private http: Http) {
        
    }  

    getErrorCodes () {
        return this.http.get('http://localhost:3000/app/home/error_codes/error_codes.json',{})
            .map((res: Response) => res.json());

    }
}