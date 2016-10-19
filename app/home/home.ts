//HomeModule Config
import {NgModule} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {routing, appRoutingProviders} from '../routes';

import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {DataTableModule} from 'angular2-datatable';
import {MerchantComponent} from '../home/merchants/merchant.component';
import {DialogModule} from 'primeng/primeng';

@NgModule({
    imports: [routing,CommonModule, FormsModule, DataTableModule, DialogModule],
    declarations: [HomeComponent, MerchantComponent],
    providers: [appRoutingProviders]
})

export class HomeModule {

}
