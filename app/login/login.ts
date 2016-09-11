//LoginModule
import {NgModule} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../login/login.service';
import {CommonModule} from '@angular/common';
import {LoadingContainer} from '../spinner/loading_container';

@NgModule({
    imports: [CommonModule],
    declarations: [LoadingContainer, LoginComponent ],
    providers: [LoginService]
})
export class LoginModule {

}