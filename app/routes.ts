import {provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthManager} from './auth/auth.manager';
import {AccountComponent} from './home/accounts/account.component';
import {LogsComponent} from './home/logs/logs.component';
import {ApiComponent} from './home/api/api.component';
import {ErrorCodesComponent} from "./home/error_codes/error_codes.component";
import {ChangeLogsComponent} from './home/change_logs/change_logs.component';
import {ReadMeComponent} from './home/read_me/read_me.component';

export const appRoutes: RouterConfig = [
    {path: 'login', component: LoginComponent },
    {path: '', redirectTo: 'index',
        pathMatch: 'full'
    },
    {path: 'index', component: HomeComponent, canActivate: [AuthManager],
        children: [
            {path: '', redirectTo: 'api', pathMatch: 'full' },
            {path: 'api', component: ApiComponent},
            {path: 'accounts', component: AccountComponent},
            {path: 'logs', component: LogsComponent},
            {path: 'error_codes', component: ErrorCodesComponent},
            {path: 'change_logs', component: ChangeLogsComponent},
            {path: 'read_me', component: ReadMeComponent}
    ]}]
export const AppRouterProvider = provideRouter(appRoutes);
