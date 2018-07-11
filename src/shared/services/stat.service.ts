import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { StatisticData } from '../models/class.stat-data';

@Injectable()
export class StatisticService {

  private apiUrl = 'api/statistic';
  statData: StatisticData;

  constructor(private http: Http) { }

  getStatisticData(): Observable<StatisticData> {

    return this.http.get(this.apiUrl)
      .map(res => res.json().data as StatisticData)
      .map(statData => this.statData = statData)
      .catch(StatisticService.handleError);
  }

  private static handleError(error: any) {
    console.log('An error occured', error);
    return Observable.throw(error.message || error);
  }

}
