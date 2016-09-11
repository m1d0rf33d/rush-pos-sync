import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {routing, appRoutingProviders} from './routes';

//Custom modules
import {AppComponent} from './app.component';
import {LoginModule} from './login/login';
import {HomeModule} from './home/home';
import {AuthenticationModule} from './auth/auth';

//Root module
@NgModule({
    imports: [BrowserModule, HttpModule, routing, LoginModule, HomeModule, AuthenticationModule],
    declarations: [AppComponent],
    providers: [appRoutingProviders, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);