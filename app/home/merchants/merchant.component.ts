import {Component} from '@angular/core';
import {MerchantService} from '../merchants/merchant.service';

@Component({
    moduleId: module.id,
    selector: 'app-merchants',
    templateUrl: 'merchant.html',
    providers:[MerchantService]
})

export class MerchantComponent {

    data: any[];

    constructor(private merchantService:MerchantService) {
        this.data = [];
        merchantService.getMerchants();
        
    }

    
}