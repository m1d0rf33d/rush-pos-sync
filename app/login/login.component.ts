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
    displayModal = false;

    constructor (private authService: AuthService, private router: Router) {
        super(false);
    }

    login (event, username, password) {
        this.displayModal = true;
        event.preventDefault();
        this.authService.authenticate(username, password, this);

    }
}