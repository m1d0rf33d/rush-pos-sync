import {Component, OnInit, ViewChild} from '@angular/core';
import {Api} from '../api/api.model';
import {ApiService} from '../api/api.service';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {SELECT_DIRECTIVES} from '../../../node_modules/ng2-select/ng2-select';
import {ErrorCodeService} from '../error_codes/error_codes.service';
import {ErrorCode} from '../error_codes/error_codes.model';

@Component({
    moduleId: module.id,
    selector: 'app-api',
    templateUrl: 'api.component.html',
    providers: [ApiService, ErrorCodeService],
    directives: [SELECT_DIRECTIVES,CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass]
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
        $('#env-select').val('-1');

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
       $('#revision-select').val(value);
        this.apiService.getApis(value).subscribe(apis => {
            this.items = apis;
            for (let item of this.items) {
                //Since ng2-select cannot hold the complete data we will bind it to another container
                this.itemsMap.set(item.id, item);
            }
        });
    }



    //ng2-select functions
    private value:any = {};
    private _disabledV:string = '0';
    private disabled:boolean = false;

    private get disabledV():string {
        return this._disabledV;
    }

    private set disabledV(value:string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }
    public selected(value:any):void {
        console.log('Selected value is: ', value.id);
        this.selectedApi = this.itemsMap.get(value.id);
    }

    public removed(value:any):void {
        console.log('Removed value is: ', value);
    }

    public typed(value:any):void {
        console.log('New search input: ', value);
    }

    public refreshValue(value:any):void {
        this.value = value;
    }
    //end of ng2-select functions



}