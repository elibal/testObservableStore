import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-observables-store';
  public state='store';

  changeState() {
    if (this.state == 'store')
      this.state = 'vardi';
    else
      this.state = 'store';
  }
}
