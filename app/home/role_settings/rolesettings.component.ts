import {Component} from '@angular/core';
import {MerchantService} from '../../home/merchants/merchant.service';
import {RoleService} from '../../home/global/role.service';

@Component({
    moduleId: module.id,
    selector: 'app-rolesettings',
    templateUrl: '/rush-pos-sync/role-settings.html',
    providers: [MerchantService, RoleService]
})

export class RoleSettingsComponent {

    merchants: any[];
    roles: any[];
    selectedMerchant: any;
    roleDTO: any;

    messageType = '';
    message = '';
    showCustomAlert = false;
    constructor(private merchantService: MerchantService,
                private roleService: RoleService) {
        this.merchants = [];
        this.roles = [];
        this.selectedMerchant = '';
        this.roleDTO = {
             merchantId: '',
             roleName: ''
        }
        this.merchantService.getMerchants().subscribe(data => this.merchants = data.data);
    }

    getRoles(event) {
        event.preventDefault();
        this.roleService.getRoles(this.selectedMerchant).subscribe(data => this.roles = data.data);
    }

    clear(event) {
        event.preventDefault();
        this.roleDTO = {
             merchantId: '',
             name: ''
        }
    }
    create(event) {
        event.preventDefault();
        if (this.roleDTO.merchantId == '' ||
            this.roleDTO.name == '') {
            this.messageType = 'OOPS!';
            this.message = 'All fields are required';
            this.showCustomAlert = true;
            return;
        }
        this.roleService.updateRole(this.roleDTO).subscribe(data => {
          
            this.roleDTO = {
                 merchantId: '',
                 name: ''
            }
             this.messageType = 'HOORAY!';
             this.message = 'Role has been created.';
             this.showCustomAlert = true;
        },
        error => {
            this.messageType = 'OOPS!';
            this.message = 'Something unexpected happened please contact developer :)';
            this.showCustomAlert = true;
        })
    }
     display: boolean = false;
     selectedRole = {
         name: '',
         roleId: '',
         merchantId: ''
     };
     showDialog(event, role) {

       event.preventDefault();

        this.selectedRole = {
            name: role.name,
            roleId: role.roleId,
            merchantId: role.merchantId
        }
        this.display = true;
    }

    update(event) {
        event.preventDefault();
        this.roleService.updateRole(this.selectedRole).subscribe(data => {
            this.roleService.getRoles(this.selectedMerchant).subscribe(data => this.roles = data.data);
            this.roleDTO = {
                 merchantId: '',
                 name: ''
            }
             this.display = false;
            this.messageType = 'HOORAY!';
            this.message = 'Role has been updated';
            this.showCustomAlert = true;
        },
        error => {
            this.messageType = 'OOPS!';
            this.message = 'Something unexpected happened please contact developer :)';
            this.showCustomAlert = true;
        })
    }

    delete(event) {
        event.preventDefault();
        this.roleService.deleteRole(this.selectedRole).subscribe(data => {
            this.roleService.getRoles(this.selectedMerchant).subscribe(data => this.roles = data.data);
            this.selectedRole = {
                name: '',
                roleId: '',
                merchantId: ''
            }
            this.deleteAlert = false;
            this.messageType = 'HOORAY!';
            this.message = 'Role has been deleted.';
            this.showCustomAlert = true;
        },
        error => {
           this.messageType = 'OOPS!';
           this.message = 'Something unexpected happened please contact developer :)';
           this.showCustomAlert = true;
        })
    }
    deleteAlert = false;
    showDeleteAlert(event, role) {
        event.preventDefault();
         this.selectedRole = {
            name: role.name,
            roleId: role.roleId,
            merchantId: role.merchantId
        }
        this.deleteAlert = true;
    }
}