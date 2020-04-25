import { Component, OnInit, Input } from '@angular/core';
import { IRate } from '../shared/shared.models';
import { VardiRateService } from '../shared/vardi-rate.service';

@Component({
  selector: 'app-vardi-rate-list',
  templateUrl: './vardi-rate-list.component.html',
  styleUrls: ['./vardi-rate-list.component.scss']
})
export class VardiRateListComponent implements OnInit {
  @Input() rates: IRate[];

  constructor(private rs: VardiRateService) { }

  ngOnInit(): void {
  }

  editRate(rate_id: number) {
    this.rs.setRate(rate_id);
  }


}
