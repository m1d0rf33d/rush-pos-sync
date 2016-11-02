import {Component} from '@angular/core';
import {MerchantService} from '../../home/merchants/merchant.service';
import {BranchService} from '../../home/branch_settings/branchsettings.service';

@Component({
    moduleId: module.id,
    templateUrl: 'branch-settings.html',
    providers: [MerchantService, BranchService]
})

export class BranchSettingsComponent {

    merchants: any[];
    branchDTOs: any[];
    selectedMerchant: any;

    messageType = '';
    message = '';
    showCustomAlert = false;

      constructor(private merchantService: MerchantService, private branchService:BranchService) {
        this.merchants = [];
        this.branchDTOs = [];
        this.selectedMerchant = '';
        this.merchantService.getMerchants().subscribe(data => this.merchants = data.data);
        }

     getBranches(event) {
        event.preventDefault();
        this.branchService.getBranches(this.selectedMerchant).subscribe(data => {
            if (data.responseCode == '200') {
                 this.messageType = 'HOORAY!';
                 this.message = 'Total search results: ' + data.data.length;
                 this.showCustomAlert = true;

                 this.branchDTOs = data.data;  
            } else {
                 this.messageType = 'OOPS!';
                 this.message = 'Something unexpected happened please contact developer :)';
                 this.showCustomAlert = false;
            }
        });
    }  

    display: boolean = false;
     selectedBranch = {
         branchName: '',
         branchId: '',
         uuid: '',
         withVk: ''
     };
     showDialog(event, item) {

       event.preventDefault();
      

        this.selectedBranch = {
           branchName: item.branchName,
           branchId: item.branchId,
           uuid: item.uuid,
           withVk: item.withVk
        } 
        this.display = true;
    }
    

     update(event) {
       event.preventDefault();
       this.branchService.updateBranch(this.selectedBranch).subscribe(data => {
            this.messageType = 'HOORAY!';
            this.message = 'Branch has been updated.';
            this.showCustomAlert = true;
            this.display =  false;
            this.branchService.getBranches(this.selectedMerchant).subscribe(data => {
                this.branchDTOs = data.data;  
            
            });
        },
        error => {
            this.messageType = 'OOPS!';
            this.message = 'Something unexpected happened please contact developer :)';
            this.showCustomAlert = true;
        });
    }

}