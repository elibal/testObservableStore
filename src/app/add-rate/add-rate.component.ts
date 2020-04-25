import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IRate } from '../shared/shared.models';
import { StoreService } from '../shared/store.service';
import { merge, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-rate',
  templateUrl: './add-rate.component.html',
  styleUrls: ['./add-rate.component.scss']
})
export class AddRateComponent implements OnInit {

  rateForm = this.formBuilder.group({
    rate_id: [],
    rate_name: ['', Validators.required],
    annual_percent: ['', Validators.required]
  });

  rate: IRate;

  constructor(
    private store: StoreService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    merge(
      // Get initial
      this.store.getSelectedRate(),
      // Capture any changes to the store
      this.store.stateChanged.pipe(
        map(state => {
          if (state) {
            return state.selectedRate;
          }
        })
      )).subscribe(rate => {
        if (rate) {
          this.rate = rate;
          this.rateForm.patchValue(this.rate);
        }
        else {
          this.rateForm.reset();
        }
      });
  }

  submit() {
    if (this.rateForm.valid) {
      const rateValue = { ...this.rate, ...this.rateForm.value } as IRate;

      if (rateValue.rate_id) {
        this.store.update(rateValue);
      }
      else {
        this.store.add(rateValue);
      }
    }
  }
}
