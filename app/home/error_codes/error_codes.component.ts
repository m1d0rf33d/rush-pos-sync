import {Component, OnInit} from '@angular/core';

import {ErrorCode} from '../error_codes/error_codes.model'
import {ErrorCodeService} from '../error_codes/error_codes.service'

@Component ({
    moduleId: module.id,
    selector: 'app-error_codes',
    templateUrl: 'error_codes.html',
    providers: [ErrorCodeService]
})

export class ErrorCodesComponent implements OnInit{

    errorCodes: Array<ErrorCode> = [];

    constructor(private errorCodeService: ErrorCodeService) {

    }

    ngOnInit() {
        this.errorCodeService.getErrorCodes().subscribe(errorCodes => {
            this.errorCodes = errorCodes;
        });

    }
}