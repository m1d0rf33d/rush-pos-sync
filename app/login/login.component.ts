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


    messageType = '';
    message = '';
    showCustomAlert = false;


    constructor (private authService: AuthService, private router: Router) {
        super(false);
    }

    login (event, username, password) {
         
        event.preventDefault();
        this.standby();
        this.authService.authenticate(username, password)
        .subscribe(
            data => {
              
                if (data.access_token) {
                    window.localStorage.setItem('auth_key', data.access_token);
                    this.router.navigate(['index'])
                }
                this.loading = false;
            },
            error => { 
                this.loading = false;
                this.messageType = 'OOPS!';
                this.message = 'Invalid credentials';
                this.showCustomAlert = true;
             
            });
    }

}