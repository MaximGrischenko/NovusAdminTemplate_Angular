import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { UserMessage } from '../models/class.user-data';

@Injectable()
export class MessageService {

  private apiUrl = 'api/messages';
  userMessage: UserMessage[];

  constructor(private http: Http) { }

  getMessages(): Observable<UserMessage[]> {

    return this.http.get(this.apiUrl)
      .map(res => res.json().data as UserMessage[])
      .map(userMessage => this.userMessage = userMessage)
      .catch(MessageService.handleError);
  }

  private static handleError(error: any) {
    console.log('An error occured', error);
    return Observable.throw(error.message || error);
  }
}
