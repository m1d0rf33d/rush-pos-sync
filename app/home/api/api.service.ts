import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

@Injectable()
export class ApiService {

    constructor(private http: Http) {
        
    } 

    getApis(revision) {
        return this.http.get('http://52.74.190.173/parkninja-dev/app/home/api/api-'+ revision + '.json',{})
            .map((res: Response) => res.json());

    }

    getDataDictionary() {
        return this.http.get('http://52.74.190.173/parkninja-dev/app/home/api/data.dictionary.json',{})
            .map((res: Response) => res.json());
    }
}