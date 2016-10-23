import {Component} from '@angular/core';
import {MerchantService} from '../../home/merchants/merchant.service';
import {ScreenRestrictionsService} from '../../home/screen_restrictions/screenrestrictions.service';

@Component({
    moduleId: module.id,
    selector: 'app-screen-restrictions',
    templateUrl: '/rush-pos-sync/screen-restrictions.html',
    providers: [MerchantService, ScreenRestrictionsService]
})
export class ScreenRestrictionsComponent {

    merchants: any[];
    screens: any[];
    roleDTOs: any[];
    selectedMerchant: any;

    messageType = '';
    message = '';
    showCustomAlert = false;
    constructor(private merchantService: MerchantService, private screenRestrictionsService:ScreenRestrictionsService) {
        this.merchants = [];
        this.roleDTOs = []; 
        this.selectedMerchant = '';
        this.merchantService.getMerchants().subscribe(data => this.merchants = data.data);
     
    }

    getScreens(event) {
        event.preventDefault();
        this.screenRestrictionsService.getScreens(this.selectedMerchant).subscribe(data => {
            if (data.responseCode == '200') {
                 this.messageType = 'HOORAY!';
                 this.message = 'Total search results: ' + data.data.roleDTOs.length;
                 this.showCustomAlert = true;

                 this.roleDTOs = data.data.roleDTOs;  
                 this.screens = data.data.screens; 
            } else {
                 this.messageType = 'OOPS!';
                 this.message = 'Something unexpected happened please contact developer :)';
                 this.showCustomAlert = false;
            }
          
        });
    }

     display: boolean = false;
     selectedRole = {
         name: '',
         screens: [],
         merchantId: '',
         roleId: ''
     };
     showDialog(event, account) {

       event.preventDefault();
       var screens = []; 
       for (var i = 0; i < account.screens.length; i++) {
           var screen = {
               name: account.screens[i].name,
               checked: account.screens[i].checked
           }
           screens.push(screen);
       }

        this.selectedRole = {
            name: account.name,
            screens: screens,
            merchantId: account.merchantId,
            roleId: account.roleId
        }
        this.display = true;
    }

    update(event) {
       event.preventDefault();
       this.screenRestrictionsService.updateAccess(this.selectedRole).subscribe(data => {
            this.messageType = 'HOORAY!';
            this.message = 'Screen restrictions has been updated.';
            this.showCustomAlert = true;
            this.display =  false;
            this.screenRestrictionsService.getScreens(this.selectedMerchant).subscribe(data => {
            this.roleDTOs = data.data.roleDTOs;  
            this.screens = data.data.screens; 
        });
        },
        error => {
            this.messageType = 'OOPS!';
            this.message = 'Something unexpected happened please contact developer :)';
            this.showCustomAlert = true;
        });
    }

}