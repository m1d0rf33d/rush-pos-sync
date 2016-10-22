import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {LoadingPage} from '../spinner/loading_container';

@Component ({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    moduleId: module.id,
    styleUrls: ['login.component.css']
})

export class LoginComponent extends LoadingPage {
    invalidCredentials = false;
    msgs = [];

    constructor (private authService: AuthService, private router: Router) {
        super(false);
    }

    login (event, username, password) {
     
        event.preventDefault();
        this.authService.authenticate(username, password, this);
    }

}