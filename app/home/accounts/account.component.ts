import {Component} from '@angular/core';
import {AccountService} from '../accounts/account.service';
import {Account} from '../accounts/account.model';

@Component({
    moduleId: module.id,
    selector: 'app-accounts',
    templateUrl: 'account.component.html',
    providers: [AccountService]
})

export class AccountComponent {
    
    results: Array<Account> = [];

    constructor(private accountService: AccountService) {
 
    }

    findUser(email, e) {
        e.preventDefault();
        this.accountService.findUser(email).subscribe(users => this.results = users);
    }
    notWorking(e, ) {
        e.preventDefault();
        alert("Button not yet working. Sorry fam.");
    }
}
