//LoginModule
import {NgModule} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../login/login.service';
import {CommonModule} from '@angular/common';
import {LoadingContainer} from '../spinner/loading_container';
import {MessagesModule} from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, MessagesModule],
    declarations: [LoadingContainer, LoginComponent ],
    providers: [LoginService]
})
export class LoginModule {

}