import {Component} from '@angular/core';
import {Api} from '../api/api.model';
import {ApiService} from '../api/api.service';
import {ErrorCodeService} from '../error_codes/error_codes.service';
import {ErrorCode} from '../error_codes/error_codes.model';

@Component({
    moduleId: module.id,
    selector: 'app-api',
    templateUrl: 'api.component.html',
    providers: [ApiService, ErrorCodeService]
})
 
export class ApiComponent {
    revisions: Array<string> = ['v1.0.0', 'v2.0.0'];
    environments: Array<any> = [{text: 'SAT', revision: 'v2.0.0'},
                                {text: 'PROD', revision: 'v1.0.0'}];
    items:Array<Api> = [];

    //Map binding with Array
    itemsMap: Map<string, any> = new Map<string,any>();

    selectedApi: Api = new Api();

    //Error codes
    errorCodes: Array<ErrorCode> = [];
    //Data Dictionary
    dataDictionary: Array<any> = [];


    constructor(private apiService: ApiService, private errorCodeService: ErrorCodeService) {
        this.errorCodeService.getErrorCodes().subscribe(errorCodes => {
            this.errorCodes = errorCodes;
        });

        this.apiService.getDataDictionary().subscribe(data => {
            this.dataDictionary = data;
        })
    }


    revisionOnchange(value) {
        this.items = [];
       // $('#env-select').val('-1');

        if (value == -1) {
            this.items = [];
            return;
        }
        this.apiService.getApis(value).subscribe(apis => {
            this.items = apis;
            for (let item of this.items) {
                //Since ng2-select cannot hold the complete data we will bind it to another container
                this.itemsMap.set(item.id, item);
            }
        });
    }

    envOnChange(value) {
       this.items = [];
       //$('#revision-select').val(value);
        this.apiService.getApis(value).subscribe(apis => {
            this.items = apis;
            for (let item of this.items) {
                //Since ng2-select cannot hold the complete data we will bind it to another container
                this.itemsMap.set(item.id, item);
            }
        });
    }






}