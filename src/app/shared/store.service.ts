import { Injectable } from '@angular/core';
import { StoreState } from './store.models';
import { ObservableStore } from '@codewithdan/observable-store'
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRate, RatesStoreActions } from './shared.models';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends ObservableStore<StoreState> {
   _httpService: HttpService;
  // sorterService: SorterService;
 
  constructor(httpService: HttpService/*sorterService: SorterService*/) { 
      const initialState = {
          rates: null,
          rate: null
      }
      super({ trackStateHistory: true });
      this.setState(initialState, RatesStoreActions.Init);
      // this.sorterService = sorterService;
      this._httpService = httpService;
  }

  private fetchRates() {
    console.log('inside fetch, before getRates call.');
    return this._httpService.getRates()
        .pipe(
            map(rates => {
                this.setState({ rates }, RatesStoreActions.GetRates);
                console.log('inside fetch rates. after getRates callback.');
                return rates;
            })
        );
  }

  get(): Observable<IRate[]> {
      const rates = this.getState().rates;
      console.log('inside get. rates value is: ');
      console.log(rates);
      if (rates) {
          return of(rates);
      }
      else {
          // assume async call here that returns observable
          console.log('inside get. rates value is null. before fetch');
          return this.fetchRates();
      }
  }

  getSelectedRate(): Observable<IRate> {
    return of(this.getState().selectedRate);
  }

  selectRate(id): void {
    this.get().subscribe(rates => {
            console.log('inside selectRate. after get. id: ' + id);
            let filteredRates = rates.filter(r => r.rate_id === id);
            console.log(filteredRates);
            const rate = (filteredRates && filteredRates.length) ? filteredRates[0] : null;                
            this.setState({ selectedRate: rate }, RatesStoreActions.SetSelectedRate);
            console.log('inside selectRate. After setState. selectedRate is: ' + rate);
        });
  }

  add(rate: IRate) {
      let state = this.getState();
      rate.rate_id = state.rates.length + 1;
      state.rates.push(rate);
      this.setState({ rates: state.rates }, RatesStoreActions.AddRate);
      this.setState({ selectedRate: null }, RatesStoreActions.SetSelectedRate);
  }

  update(rate: IRate) {
    let state = this.getState();
    var found = state.rates.findIndex(r => r.rate_id == rate.rate_id);

    if (found > -1) {
      console.log (found);
      state.rates[found] = rate;
    }

      this.setState({ selectedRate: null }, RatesStoreActions.SetSelectedRate);
      this.setState({ rates: state.rates }, RatesStoreActions.GetRates);
}

  // remove() {
  //     let state = this.getState();
  //     state.rates.splice(state.rates.length - 1, 1);
  //     this.setState({ rates: state.rates }, RatesStoreActions.RemoveRate);
  // }
  
  // sort(property: string = 'id') {
  //     let state = this.getState();
  //     const sortedState = this.sorterService.sort(state.customers, property);
  //     this.setState({ customers: sortedState }, 'SORT_CUSTOMERS');
  // }

}
