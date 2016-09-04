import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS} from '@angular/http';
import { AppRouterProvider} from './routes';
import { AuthManager} from './auth/auth.manager';
import { AuthService} from './auth/auth.service';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [HTTP_PROVIDERS,
                        AppRouterProvider,
                        {provide: LocationStrategy, useClass: HashLocationStrategy},
                        AuthManager,
                        AuthService]);

