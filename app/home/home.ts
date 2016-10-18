//HomeModule Config
import {NgModule} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {ApiComponent} from '../home/api/api.component';
import {routing, appRoutingProviders} from '../routes';

import {CommonModule} from '@angular/common';
import {DropdownModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/primeng';

import {DataTableModule} from 'angular2-datatable';
import {MerchantComponent} from '../home/merchants/merchant.component';
@NgModule({
    imports: [routing,CommonModule,DropdownModule, FormsModule, DialogModule, DataTableModule],
    declarations: [HomeComponent, ApiComponent, MerchantComponent],
    providers: [appRoutingProviders]
})

export class HomeModule {

}
