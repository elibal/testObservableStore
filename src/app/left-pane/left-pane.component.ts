import { Component, OnInit } from '@angular/core';
import { IRate } from '../shared/shared.models';
import { Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.scss']
})
export class LeftPaneComponent implements OnInit {

  store: StoreService;
  rates$: Observable<IRate[]>;

  constructor(store: StoreService) { 
    this.store = store;
  }

  ngOnInit(): void {

    // this.rates$ = this.store.get();

    this.rates$ = merge(
      // Get initial
      this.store.get(),
      // Capture any changes to the store
      this.store.stateChanged.pipe(
        map(state => {
          if (state) {
            return state.rates;
          }
        })
      ));
  }

}
