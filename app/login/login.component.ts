import {Component, Inject} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router} from '@angular/router';
import {LoadingContainer, LoadingPage} from '../spinner/loading_container';

@Component ({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    directives: [LoadingContainer]
})

export class LoginComponent extends LoadingPage {
    invalidCredentials = false;

    constructor (private authService: AuthService, private router: Router) {
        super(false);
    }

    login (event, username, password) {
        event.preventDefault();
        this.authService.authenticate(username, password, this);
    }
}