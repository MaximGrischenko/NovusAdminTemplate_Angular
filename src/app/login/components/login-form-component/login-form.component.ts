import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {NgModel} from "@angular/forms";

import { AuthService } from '../../../../shared/services/auth.service';
import { AdminData } from '../../../../shared/models/class.admin-data';

@Component({
  selector: 'login-form-component',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {

  constructor(private authService: AuthService, private router: Router) { }
    nameValid: boolean = false;
    passwordValid: boolean = false;
    message: string = '';
    adminData: AdminData = new AdminData('','','','');

  Login(UserName: NgModel, UserPassword: NgModel) {

    if (UserName.valid) {
      this.nameValid = this.authService.checkName(UserName.model);
    }

    if (!this.nameValid) {
      this.message = 'User with this name doesn\'t exist';
    } else {
      this.message = '';

      this.authService.getAdminData()
                      .subscribe(adminData => this.adminData = adminData);
    }

    if (UserPassword.valid) {
      this.passwordValid = this.authService.checkPassword(UserPassword.model);
    }

    if (!this.passwordValid && UserPassword.valid) {
      this.message = 'Incorrect password';
    } else if (this.passwordValid && UserPassword.valid) {
      this.message = '';
      this.router.navigate(['admin-panel']);
    }
  }
}


