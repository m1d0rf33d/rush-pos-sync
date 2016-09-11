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

    constructor (private router: Router) {
      
    }

    logout () {
        window.localStorage.removeItem('auth_key');
        this.router.navigate(['index']);
        window.location.reload();
    }
}