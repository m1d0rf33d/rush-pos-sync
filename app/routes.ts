import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component'; 
import {AuthManager} from './auth/auth.manager';
import {MerchantComponent} from './home/merchants/merchant.component';
import {AccountSettingsComponent} from './home/account_settings/accountsettings.component';
import {ScreenRestrictionsComponent} from './home/screen_restrictions/screenrestrictions.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: '', redirectTo: 'index',
        pathMatch: 'full'
    },
    {path: 'index', component: HomeComponent, canActivate: [AuthManager],
        children: [
            {path: '', redirectTo: 'merchants', pathMatch: 'full' },
            {path: 'merchants', component: MerchantComponent},
            {path: 'accountsettings', component: AccountSettingsComponent},
            {path: 'screenrestrictions', component: ScreenRestrictionsComponent}
    ]}]
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);