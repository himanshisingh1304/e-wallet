import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { TransferfundComponent } from './transferfund/transferfund.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    WelcomepageComponent,
    AddmoneyComponent,
    ShowbalanceComponent,
    TransferfundComponent,
    TransactionlistComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
