import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppConfig} from '../../config/AppConfig';

@Injectable()
export class UpdatesService {


    constructor(private http:Http) {

    }

    uploadFile(multiFile, description) {
        
    }

}