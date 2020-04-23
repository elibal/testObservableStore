import { Component, OnInit, Input } from '@angular/core';
import { IRate } from '../shared/shared.models';
import { Observable } from 'rxjs';
import { merge, map } from 'rxjs/operators';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-rates-list',
  templateUrl: './rates-list.component.html',
  styleUrls: ['./rates-list.component.scss']
})
export class RatesListComponent implements OnInit {

  _rates: IRate[] = [];
  @Input() get rates(): IRate[] {
      return this._rates;
  }
  set rates(value: IRate[]) {
      if (value) {
          this._rates = value;
          // this.calculateOrders();
      }
  }
  // filteredCustomers: Customer[] = [];
  // customersOrderTotal: number;
  // currencyCode = 'USD';

  constructor() { 
  }

  ngOnInit(): void {
  }

}
