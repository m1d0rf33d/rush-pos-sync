import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthManager implements CanActivate {

    constructor (private router: Router, private authService: AuthService) {
       
    }

    canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(window.localStorage.getItem('auth_key'))
        return true;

        this.router.navigate(['/login']);
        return false;
    }
}
