//LoginModule
import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';

@NgModule({
    imports: [],
    declarations: [LoginComponent],
    providers: [LoginService]
})
export class LoginModule {

}