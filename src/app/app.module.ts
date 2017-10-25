import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 表单验证
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CustomFormsModule} from "ng2-validation";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginHeaderComponent} from './header/login-header.component';
import {HasloginHeaderComponent} from './header/haslogin-header.component';

import { UserIndexComponent } from './user-index';

import {CanActivate, RouterModule} from '@angular/router';

import {HttpModule} from '@angular/http';

import {LoginComponent} from './login';
import {HttpClientModule } from '@angular/common/http';

import {rootRouterConfig} from './app.routes';
import { IndexComponent } from './index';

// 服务
import { ChangeClassService } from './myServices';


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
  imports  : [FormsModule, CustomFormsModule, ReactiveFormsModule, HttpClientModule,  BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers: [ChangeClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
