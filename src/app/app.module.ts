import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { RatesListComponent } from './rates-list/rates-list.component';
import { AddRateComponent } from './add-rate/add-rate.component';
import { VardiLeftPaneComponent } from './vardi-left-pane/vardi-left-pane.component';
import { VardiRightPaneComponent } from './vardi-right-pane/vardi-right-pane.component';
import { VardiRateListComponent } from './vardi-rate-list/vardi-rate-list.component';
import { VardiAddRateComponent } from './vardi-add-rate/vardi-add-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    RightPaneComponent,
    LeftPaneComponent,
    RatesListComponent,
    AddRateComponent,
    VardiLeftPaneComponent,
    VardiRightPaneComponent,
    VardiRateListComponent,
    VardiAddRateComponent
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
