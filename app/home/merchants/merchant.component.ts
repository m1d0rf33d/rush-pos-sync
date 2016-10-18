import {Component} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'app-merchants',
    templateUrl: 'merchant.html',
    providers:[]
})

export class MerchantComponent {

    data: any[];

    constructor() {
        this.data = [];
        this.data.push({name: 'erwin', city: 'city', age: '12', email: 'sad@gmail.com'});
        
    }
}