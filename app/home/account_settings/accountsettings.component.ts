import {Component} from '@angular/core';
import {AccountSettingsService} from '../account_settings/accountsettings.service';
import {MerchantService} from '../merchants/merchant.service';

@Component({
    moduleId: module.id,
    selector: 'app-account-settings',
    templateUrl: 'account-settings.html',
    providers: [AccountSettingsService, MerchantService]
})

export class AccountSettingsComponent {

    merchants : any[];
    selectedMerchant: any;
    accounts: any[];

    constructor (private accountSettingsService: AccountSettingsService,
                private merchantService: MerchantService) {
        this.merchants = [];
        this.accounts = [];
        this.merchantService.getMerchants().subscribe(data => this.merchants = data.data);
    }

    searchMerchantAccounts(event) {
        event.preventDefault();
        this.accountSettingsService.getMerchantAccounts(this.selectedMerchant)
            .subscribe(data => {
                 this.accounts = data.data;
            });
    }



     display: boolean = false;
     selectedAccount = {
         name: '',
         role: '',
         uuid: ''
     }
     showDialog(event, account) {
        event.preventDefault();
        this.selectedAccount = {
            name: account.name,
            role: account.role,
            uuid: account.uuid
        }
        this.display = true;
    }

    update(event, account) {
        event.preventDefault();
          this.accountSettingsService.updateMerchantAccounts(account)
            .subscribe(data => {
                 alert('Account updated.');
                 this.display = false;
                 this.searchMerchantAccounts(event);
            },
            error => {
                alert('Error encountered.');
            });
    }
}