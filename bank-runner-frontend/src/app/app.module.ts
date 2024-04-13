import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingList } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AccoutcreationComponent } from './accountcreation/accountcreation.component';
import { ForgotComponent } from './forgot/forgot.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { BudgetCalcComponent } from './budget-calc/budget-calc.component';
import { LoanAppComponent } from './loan-app/loan-app.component';
import { ManagerPortalComponent } from './manager-portal/manager-portal.component';



@NgModule({
  declarations: [
    AppComponent,
    routingList,
    AccoutcreationComponent,
    ForgotComponent,
    WithdrawComponent,
    DepositComponent,
    TransferComponent,
    BudgetCalcComponent,
    LoanAppComponent,
    
    ManagerPortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
