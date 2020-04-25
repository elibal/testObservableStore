import { Injectable } from '@angular/core';
import { IRate } from './shared.models';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VardiRateService {
  _httpService: HttpService;


  public rates: IRate[] = null;
  public rateForm = this.formBuilder.group({
    rate_id: [],
    rate_name: [ '', Validators.required ],
    annual_percent: [ '', Validators.required ]
  });

  constructor(httpService: HttpService, private formBuilder: FormBuilder) {
    this._httpService = httpService;
   }

   private fetchRates() {
    console.log('inside fetch, before getRates call.');
    return this._httpService.getRates()
        .subscribe(rates => {
                this.rates = rates;
                console.log('inside fetch rates. after getRates callback.');
                return rates;
            });
  }

  get(): void {
      console.log('inside get. rates value is: ');
      console.log(this.rates);
      if (!this.rates) {
        console.log('inside get. rates value is null. before fetch');
        this.fetchRates();
      }
  }

  setRate(id): void {
    let filteredRates = this.rates.filter(r => r.rate_id === id);
    const rate = (filteredRates && filteredRates.length) ? filteredRates[0] : null;   
    this.rateForm.patchValue(rate);
  }

  submit() {
    if (this.rateForm.valid) {
      let rate: IRate;
      const rateValue = { ...rate, ...this.rateForm.value } as IRate;
      
      if (rateValue.rate_id) {
        this.update(rateValue);
      }
      else {
        this.add(rateValue);
      }
    }
  }

  add(rate: IRate) {
    rate.rate_id = this.rates.length + 1;
    this.rates.push(rate);
    this.rateForm.reset();
  }

  update(rate: IRate) {
    var found = this.rates.findIndex(r => r.rate_id == rate.rate_id);

    if (found > -1) {
      console.log (found);
      //this.rates[found].annual_percent = rate.annual_percent;
      this.rates[found] = rate;
    }
    this.rateForm.reset();
    console.log (this.rates);
  }
}
