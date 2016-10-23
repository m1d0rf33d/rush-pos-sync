//HomeModule Config
import {NgModule} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {routing, appRoutingProviders} from '../routes';

import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {DataTableModule} from 'angular2-datatable';
import {MerchantComponent} from '../home/merchants/merchant.component';
import {DialogModule} from 'primeng/primeng';
import {AccountSettingsComponent} from '../home/account_settings/accountsettings.component';
import {ScreenRestrictionsComponent} from '../home/screen_restrictions/screenrestrictions.component';
import {RoleSettingsComponent} from '../home/role_settings/rolesettings.component';


@NgModule({
    imports: [routing,CommonModule, FormsModule, DataTableModule, DialogModule],
    declarations: [HomeComponent, MerchantComponent, AccountSettingsComponent, ScreenRestrictionsComponent, RoleSettingsComponent],
    providers: [appRoutingProviders]
})

export class HomeModule {
    
}
