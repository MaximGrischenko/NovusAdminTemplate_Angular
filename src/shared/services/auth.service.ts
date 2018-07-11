import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AdminData } from '../models/class.admin-data';

@Injectable()
export class AuthService {

  private login = 'admin';
  private password = 'admin';
  private apiUrl = 'api/admin';

  adminData: AdminData;

  constructor(private http: Http) {
  }

  checkName(username) {
    return username == this.login;
  }

  checkPassword(userpassword) {
    return userpassword == this.password;
  }

  getAdminData(): Observable<AdminData> {

    // return this.http.get(this.apiUrl).toPromise().then(res => res.json().data as AdminData[]).catch(this.handleError);

    return this.http.get(this.apiUrl)
      .map(res => res.json().data as AdminData)
      .map(adminData => this.adminData = adminData)
      .catch(AuthService.handleError);
  }

  private static handleError(error: any) {
    console.log('An error occured', error);
    // return Promise.reject(error.message || error);
    return Observable.throw(error.message || error);
  }
}
