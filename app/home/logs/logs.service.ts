import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LogsService {


    constructor(private http: Http) { }

    getLogs(logType) {
        return this.http.get('http://52.74.190.173:8080/parkninja-core/dev/logs/' + logType,{})
            .map((res: Response) => res.json());
    }
}