import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { RatesListComponent } from './rates-list/rates-list.component';
import { AddRateComponent } from './add-rate/add-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    RightPaneComponent,
    LeftPaneComponent,
    RatesListComponent,
    AddRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
