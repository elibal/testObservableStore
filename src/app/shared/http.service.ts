import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRate } from './shared.models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  getRates() {
    const ratesObservable = new Observable<IRate[]>(observer => {
      setTimeout(() => {
          observer.next([{
            rate_id: 1,
            rate_name: 'חשכל',
            rate_type_id: 1,
            rate_type_name: 'פיגורים',
            annual_percent: 1.5
        },
        {
          rate_id: 2,
          rate_name: 'בנקאית',
          rate_type_id: 1,
          rate_type_name: 'פיגורים',
          annual_percent: 1.25
        },
        {
          rate_id: 3,
          rate_name: 'פריים',
          rate_type_id: 1,
          rate_type_name: 'פיגורים',
          annual_percent: 2.25
        }]);
      }, 1000);
    });

    return ratesObservable;
    //return this.http.get('/assets/shipping.json');
  }
}
