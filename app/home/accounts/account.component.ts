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
    tickets = [];
    display = false;

    constructor(private accountService: AccountService) {
    }

    findUser(email, e) {

        e.preventDefault();
        this.accountService.findUser(email).subscribe(users => {
            this.results = users
            
        });
    }
    displayTickets(e, deviceId) {
        e.preventDefault();

        this.accountService.getTickets(deviceId).subscribe(data => {
           console.log(data);

        });
        this.display = true;
    }
}
