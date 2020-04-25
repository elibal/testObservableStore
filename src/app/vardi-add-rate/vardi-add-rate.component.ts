import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IRate } from '../shared/shared.models';
import { VardiRateService } from '../shared/vardi-rate.service';

@Component({
  selector: 'app-vardi-add-rate',
  templateUrl: './vardi-add-rate.component.html',
  styleUrls: ['./vardi-add-rate.component.scss']
})
export class VardiAddRateComponent implements OnInit {

  constructor(
    public rs: VardiRateService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
