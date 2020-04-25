import { Component, OnInit, Input } from '@angular/core';
import { VardiRateService } from '../shared/vardi-rate.service';

@Component({
  selector: 'app-vardi-left-pane',
  templateUrl: './vardi-left-pane.component.html',
  styleUrls: ['./vardi-left-pane.component.scss']
})
export class VardiLeftPaneComponent implements OnInit {

  constructor(public rs: VardiRateService) { }

  ngOnInit(): void {
    this.rs.get();
  }

}
