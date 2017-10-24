import {Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginHeaderComponent} from './header/login-header.component';
import { UserIndexComponent } from './user-index';
import {LoginComponent} from './login';
import { IndexComponent } from './index';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {

    path: 'index',
    component: IndexComponent
  },
  {

    path: 'login',
    component: LoginComponent
  },
  {

    path: 'user',
    component: UserIndexComponent
  },
];
