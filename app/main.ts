import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS} from '@angular/http';
import { AppRouterProvider} from './routes';
import { AuthManager} from './auth/auth.manager';
import { AuthService} from './auth/auth.service';

bootstrap(AppComponent, [HTTP_PROVIDERS, AppRouterProvider, AuthManager, AuthService]);

