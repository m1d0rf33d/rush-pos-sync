//HomeModule Config
import {NgModule} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {ApiComponent} from '../home/api/api.component';
import {AccountComponent} from '../home/accounts/account.component';
import {ChangeLogsComponent} from '../home/change_logs/change_logs.component';
import {ErrorCodesComponent} from '../home/error_codes/error_codes.component';
import {LogsComponent} from '../home/logs/logs.component';
import {ReadMeComponent} from '../home/read_me/read_me.component';
import {routing, appRoutingProviders} from '../routes';

import {CommonModule} from '@angular/common';
import {DropdownModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [routing,CommonModule,DropdownModule, FormsModule],
    declarations: [HomeComponent,
        ApiComponent,
        AccountComponent,
        ChangeLogsComponent,
        ErrorCodesComponent,
        LogsComponent,
        ReadMeComponent],
    providers: [appRoutingProviders]
})

export class HomeModule {

}
