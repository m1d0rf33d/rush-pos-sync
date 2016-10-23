import {Component} from '@angular/core';
import {MerchantService} from '../merchants/merchant.service';
import {Http, Headers, Response} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-merchants',
    templateUrl: '/rush-pos-sync/merchant.html',
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
    
    messageType = '';
    message = '';
    showCustomAlert = false;
    constructor(private merchantService:MerchantService) {
        this.merchants = [];
        this.merchantService.getMerchants().subscribe(data =>{
          this.merchants = data.data
          console.log(this.merchants);
        });
         
    }

    update(event) {
        event.preventDefault();
        //validate fields
        if (this.selectedMerchant.name === '' || 
            this.selectedMerchant.merchantApiKey === '' ||
            this.selectedMerchant.merchantApiSecret === '' ||
            this.selectedMerchant.customerApiKey === '' ||
            this.selectedMerchant.customerApiSecret === '') {
            this.messageType = 'OOPS!';
            this.message = 'All fields are required!';
            this.showCustomAlert = true;
            return;
        }
        console.log(this.selectedMerchant);
       this.merchantService.create(this.selectedMerchant)
       .subscribe(data => {
               console.log(data);
              if (data.responseCode === '200') {
                  this.clearMerchant();
                  this.merchantService.getMerchants().subscribe(data => this.merchants = data.data);
                  this.display = false;

                  this.messageType = 'HOORAY!';
                  this.message = 'Merchant details has been updated.';
                  this.showCustomAlert = true; 

              } else {
                  this.messageType = 'OOPS!';
                  this.message = 'Something unexpected went wrong please contact the developer :)';
                  this.showCustomAlert = true; 
              }
       });
    }        

    create(event) {
        event.preventDefault();
        //validate fields
        if (this.merchant.name === '' || 
            this.merchant.merchantApiKey === '' ||
            this.merchant.merchantApiSecret === '' ||
            this.merchant.customerApiKey === '' ||
            this.merchant.customerApiSecret === '') {
            
            this.messageType = 'OOPS!';
            this.message = 'All fields are required!';
            this.showCustomAlert = true;
            return;
        }
       this.merchantService.create(this.merchant)
       .subscribe(data => {
               console.log(data);
              if (data.responseCode === '200') {
                  this.clearMerchant();
        
                  this.merchantService.getMerchants().subscribe(data => this.merchants = data.data);
                  this.messageType = 'HOORAY!';
                  this.message = 'Merchant has been created.';
                  this.showCustomAlert = true; 

              } else {
                  this.messageType = 'OOPS!';
                  this.message = 'Something unexpected went wrong please contact the developer :)';
                  this.showCustomAlert = true; 
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

    display: boolean = false;
    selectedMerchant =  {
        name: '',
        merchantApiKey: '',
        merchantApiSecret: '',
        customerApiKey: '',
        customerApiSecret: '',
        id: '',
        status: ''
    }

    showDialog(event, merchant) {
        event.preventDefault();
        this.selectedMerchant = {
            name: merchant.name,
            merchantApiKey: merchant.merchantApiKey,
            merchantApiSecret: merchant.merchantApiSecret,
            customerApiKey: merchant.customerApiKey,
            customerApiSecret: merchant.customerApiSecret,
            id: merchant.id,
            status: merchant.status
        }
        this.display = true;
    }
}