import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [ LoginComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {

  constructor() {
    
  }

}
