import {Component} from '@angular/core';
import {Api} from '../api/api.model';
import {ApiService} from '../api/api.service';
import {ErrorCodeService} from '../error_codes/error_codes.service';
import {ErrorCode} from '../error_codes/error_codes.model';
import {SelectItem} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'app-api',
    templateUrl: 'api.component.html',
    providers: [ApiService, ErrorCodeService]
})
 
export class ApiComponent {
    //API versions
    versions: SelectItem[];
    selectedVersion: string;

    //Application environments
    environments: SelectItem[];
    selectedEnvironment: string;

    //API  data
    apiDataList: SelectItem[];
    selectedApi: string;

    //Map binding with Array
    selectedApiData: any;
    itemsMap: Map<string, any> = new Map<string,any>();

    //Error codes
    errorCodes: Array<ErrorCode> = [];
    //Data Dictionary
    dataDictionary: Array<any> = [];

    constructor(private apiService: ApiService, private errorCodeService: ErrorCodeService) {

        this.selectedApiData = {};

        this.errorCodeService.getErrorCodes().subscribe(errorCodes => {
            this.errorCodes = errorCodes;
        });

        this.apiService.getDataDictionary().subscribe(data => {
            this.dataDictionary = data;
        })
        this.versions = [];
        this.versions.push({label: '--Select--', value: '-1'});
        this.versions.push({label: 'v1.0.0', value: 'v1.0.0'});
        this.versions.push({label: 'v2.0.0', value: 'v2.0.0'});

        this.environments = [];
        this.environments.push({label: '--Select--', value: '-1'});
        this.environments.push({label: 'SAT', value: 'v2.0.0'});
        this.environments.push({label: 'PROD', value: 'v1.0.0'});

        this.apiDataList = [];
        this.apiDataList.push({label: '--Select--', value: '-1'});

    }


    versionOnChange(event,value) {
       //Reset environment dropdown to --select--
        this.selectedEnvironment = this.environments[0].value;

        this.apiService.getApis(this.selectedVersion).subscribe(apis => {
            this.apiDataList = [];
            this.apiDataList.push({label: '--Select--', value: '-1'});
            for (let api of apis) {
                this.apiDataList.push({label: api.text, value: api.id});
                this.itemsMap.set(api.id, api);
            }
        });
   }
    apiOnChange(event,value) {
        this.selectedApiData = this.itemsMap.get(this.selectedApi);
    }

    envOnChange(event,value) {
        if (this.selectedEnvironment == '-1') {
            this.apiDataList = [];
            this.apiDataList.push({label: '--Select--', value: '-1'});
            this.selectedVersion = this.versions[0].value;
            return;
        }

        this.selectedVersion = this.selectedEnvironment;
        this.apiService.getApis(this.selectedVersion).subscribe(apis => {
            this.apiDataList = [];
            this.apiDataList.push({label: '--Select--', value: '-1'});
            for (let api of apis) {
                this.apiDataList.push({label: api.text, value: api.id});
                this.itemsMap.set(api.id, api);
            }
        });
    }






}