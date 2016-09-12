import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {LoadingPage} from '../spinner/loading_container';

@Component ({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent extends LoadingPage {
    invalidCredentials = false;
    msgs = [];

    constructor (private authService: AuthService, private router: Router) {
        super(false);
    }

    login (event, username, password) {
        this.showError();
        event.preventDefault();
        this.authService.authenticate(username, password, this);

    }



    showError() {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Access Denied', detail:''});
    }

    hideError() {
        this.msgs = [];
    }

}