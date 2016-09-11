import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    invalidCredentials = false;

    constructor (private authService: AuthService, private router: Router) {
    }

    login (event, username, password) {
        event.preventDefault();
        this.authService.authenticate(username, password);
    }
}