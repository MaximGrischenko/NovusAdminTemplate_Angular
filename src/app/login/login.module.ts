import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {loginRouting} from './login.routing';
import {LoginComponent} from './login.component';
import {LoginHeaderComponent} from './components/login-header-component/login-header.component';
import {LoginFormComponent} from './components/login-form-component/login-form.component';
//import { AuthService } from '../../shared/services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    LoginHeaderComponent,
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    loginRouting
  ],
  providers: [
    // AuthService
  ],

})
export class LoginModule {
}

