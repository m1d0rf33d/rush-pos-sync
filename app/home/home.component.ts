import {Component} from '@angular/core';
import {AuthService } from '../auth/auth.service';
import {Router} from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    providers: [AuthService]
})

export class HomeComponent {
  
    step = '';
    constructor (private router: Router) {
          router.events.subscribe((val) => {
        // see also 
        if (val.url == '/index/merchants' || val.url == '/index') {
              this.step = 'step1';
        } else if (val.url == '/index/accountsettings') {
             this.step = 'step2';
        } else if (val.url == '/index/screenrestrictions') {
        
             this.step = 'step3';
        } else {

             this.step = 'step4';
        }
    });
    }

    logout () {
        window.localStorage.removeItem('auth_key');
        this.router.navigate(['index']);
        window.location.reload();
    }
}