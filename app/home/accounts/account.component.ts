import {Component} from '@angular/core';
import {AccountService} from '../accounts/account.service';
import {Account} from '../accounts/account.model';
import {LoadingContainer, LoadingPage} from '../../spinner/loading_container';

@Component({    
    moduleId: module.id,
    selector: 'app-accounts',
    templateUrl: 'account.component.html',
    providers: [AccountService]
})

export class AccountComponent extends LoadingPage {
    
    results: Array<Account> = [];

    constructor(private accountService: AccountService) {
        super(false);
    }

    findUser(email, e) {
        this.loading =true;
        e.preventDefault();
        this.accountService.findUser(email).subscribe(users => {
            this.results = users
            this.loading = false;
        });
    }
    notWorking(e) {
        e.preventDefault();
    }
}
