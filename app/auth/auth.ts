//Authentication Config
import {NgModule} from '@angular/core';
import {AuthManager} from '../auth/auth.manager';
import {AuthService} from '../auth/auth.service';

@NgModule({
    imports: [],
    declarations: [],
    providers: [AuthService, AuthManager],
    exports: []
})

export class AuthenticationModule {

}

