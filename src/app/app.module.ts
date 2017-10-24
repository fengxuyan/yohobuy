import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginHeaderComponent} from './header/login-header.component';
import {HasloginHeaderComponent} from './header/haslogin-header.component';

import { UserIndexComponent } from './user-index';

import {CanActivate, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';

import {LoginComponent} from './login';
import {HttpClientModule } from '@angular/common/http';

import {rootRouterConfig} from './app.routes';
import { IndexComponent } from './index';

import { ChineseMobileValidator } from './directives/Chinese-mobile-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginHeaderComponent,
    LoginComponent,
    ChineseMobileValidator,
    HasloginHeaderComponent,
    UserIndexComponent,
    IndexComponent
  ],
  imports     : [ HttpClientModule,  BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
