import {Component} from '@angular/core';
import {MerchantService} from '../merchants/merchant.service';
import {Http, Headers, Response} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-merchants',
    templateUrl: 'merchant.html',
    providers:[MerchantService]
})

export class MerchantComponent {

    merchants: any[];
    merchant = {
        name: '',
        merchantApiKey: '',
        merchantApiSecret: '',
        customerApiKey: '',
        customerApiSecret: ''
    }

    constructor(private merchantService:MerchantService) {
        this.merchants = [];
        this.merchantService.getMerchants().subscribe(data => this.merchants = data.data);
        
    }

    update(event, merchant) {
        event.preventDefault();
        alert('Under development');
    }        

    create(event) {
        event.preventDefault();
        //validate fields
        if (this.merchant.name === '' || 
            this.merchant.merchantApiKey === '' ||
            this.merchant.merchantApiSecret === '' ||
            this.merchant.customerApiKey === '' ||
            this.merchant.customerApiSecret === '') {
            alert('All fields are required.');
            return;
        }
       this.merchantService.create(this.merchant)
       .subscribe(data => {
               console.log(data);
              if (data.responseCode === '200') {
                  this.clearMerchant();
                  alert('Merchant created.');
                  this.merchantService.getMerchants().subscribe(data => this.merchants = data.data);
              } else {
                  alert('Merchant create failed. Please contact system administrator.');
              }
       });
    }

    clear($event) {
        event.preventDefault();
        this.clearMerchant();
    }

    clearMerchant() {
        this.merchant = {
            name: '',
            merchantApiKey: '',
            merchantApiSecret: '',
            customerApiKey: '',
            customerApiSecret: ''
        }

    }
}