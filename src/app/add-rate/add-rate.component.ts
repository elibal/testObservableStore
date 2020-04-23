import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IRate } from '../shared/shared.models';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-add-rate',
  templateUrl: './add-rate.component.html',
  styleUrls: ['./add-rate.component.scss']
})
export class AddRateComponent implements OnInit {

  rateForm = this.formBuilder.group({
    rate_id: [],
    rate_name: [ '', Validators.required ],
    annual_percent: [ '', Validators.required ]
  });

  rate: IRate;

  constructor(
    private store: StoreService,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
      /// const id = +this.route.snapshot.paramMap.get('id');
      // this.subsink.sink = this.store.get(id).subscribe(rate => {
      //   if (rate) {
      //     this.rate = rate;
      //     this.rateForm.patchValue(this.rate);
      //   }
      // });
  }

  submit() {
    if (this.rateForm.valid) {
      const rateValue = { ...this.rate, ...this.rateForm.value } as IRate;
      this.add(rateValue);
      // if (customerValue.id) {
      //   this.update(customerValue);
      // }
      // else {
      //   this.add(customerValue);
      // }
    }
  }

  add(rate: IRate) {
    this.store.add(rate);
    this.rateForm.reset();
  }
}
