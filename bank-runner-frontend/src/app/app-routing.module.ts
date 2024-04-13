import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccoutcreationComponent } from './accountcreation/accountcreation.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { MyaccountsComponent } from './myaccounts/myaccounts.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegisterComponent } from './register/register.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ManagerPortalComponent } from './manager-portal/manager-portal.component';
import { BudgetCalcComponent } from './budget-calc/budget-calc.component';
import { LoanAppComponent } from './loan-app/loan-app.component';

const routes: Routes = [
    {   path: 'login', component: LoginComponent},
    {   path: 'register', component: RegisterComponent},
    {   path: 'myaccounts', component: MyaccountsComponent},
    {   path: 'myprofile', component: MyprofileComponent},
    {   path: 'accountcreation', component:AccoutcreationComponent},
    {   path: 'deposit', component: DepositComponent},
    {   path: 'withdraw', component: WithdrawComponent},
    {   path: 'transfer', component: TransferComponent},
    {   path: 'forgot', component: ForgotComponent},
    {   path: 'manager', component: ManagerPortalComponent},
    {   path: 'budget', component: BudgetCalcComponent},
    {   path: 'loans', component: LoanAppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingList = 
[LoginComponent,RegisterComponent,MyaccountsComponent,MyprofileComponent,
AccoutcreationComponent,DepositComponent,WithdrawComponent,
TransferComponent,ForgotComponent,ManagerPortalComponent,BudgetCalcComponent,LoanAppComponent];
