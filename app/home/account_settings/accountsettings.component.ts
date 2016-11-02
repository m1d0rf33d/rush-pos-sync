import {Component} from '@angular/core';
import {AccountSettingsService} from '../account_settings/accountsettings.service';
import {MerchantService} from '../merchants/merchant.service';
import {RoleService} from '../global/role.service';

@Component({
    moduleId: module.id,
    selector: 'app-account-settings',
    templateUrl: '/rush-pos-sync/account-settings.html',
    providers: [AccountSettingsService, MerchantService, RoleService]
})

export class AccountSettingsComponent {

    merchants : any[];
    selectedMerchant: any;
    accounts: any[];
    roles: any[];


    messageType = '';
    message = '';
    showCustomAlert = false;
    constructor (private accountSettingsService: AccountSettingsService,
                private merchantService: MerchantService,
                private roleService: RoleService) {
        this.merchants = [];
        this.accounts = [];
        this.roles = [];
        this.merchantService.getMerchants().subscribe(data => this.merchants = data.data);
      
    }

    searchMerchantAccounts(event) {
        event.preventDefault();
        this.accountSettingsService.getMerchantAccounts(this.selectedMerchant)
            .subscribe(data => {
                 if (data.responseCode == '200') {
                      this.messageType = 'HOORAY!';
                       this.message = 'Total search results: ' + data.data.length;
                       this.showCustomAlert = true;
                       this.accounts = data.data;
                   } else {
                       this.messageType = 'OOPS!';
                       this.message = 'No merchant match with RUSH server.';
                       this.showCustomAlert = true;
                   }
               
            });
        this.roleService.getRoles(this.selectedMerchant).subscribe(data => this.roles = data.data);   
    }



     display: boolean = false;
     selectedAccount = {
         name: '',
         role: '',
         roleId: '',
         uuid: ''
     }
     showDialog(event, account) {
        event.preventDefault();
        this.selectedAccount = {
            name: account.name,
            role: account.role,
            uuid: account.uuid,
            roleId: account.roleId
        }
        this.display = true;
    }

    update(event, account) {
        event.preventDefault();
        if (account.roleId == undefined) {
             this.messageType = 'OOPS!';
             this.message = 'All fields are required!';
             this.showCustomAlert = true;    
            return;
        }
          this.accountSettingsService.updateMerchantAccounts(account)
            .subscribe(data => {
                 this.messageType = 'HOORAY!';
                 this.message = 'Account has been updated.';
                 this.showCustomAlert = true;    
                 this.display = false;
                 this.searchMerchantAccounts(event);
            },
            error => {
                 this.messageType = 'OOPS!';
                 this.message = 'Something went wrong please contact developer :)';
                 this.showCustomAlert = true;    
            });
    }
}