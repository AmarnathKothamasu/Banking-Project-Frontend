import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { FixedDepositComponent } from './components/fixed-deposit/fixed-deposit.component';
import { ViewLoansComponent } from './components/view-loans/view-loans.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BalanceComponent } from './components/balance/balance.component';

const routes: Routes = [
  {
    path : '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'login',
    component:LoginComponent
  },
  {
    path : 'register',
    component:RegisterComponent
  },
  {
    path : 'balance',
    component:BalanceComponent
  },
  {
    path : 'history',
    component:TransactionHistoryComponent
  },
  {
    path : 'transfer',
    component:TransferMoneyComponent
  },
  {
    path : 'fixedDeposit',
    component:FixedDepositComponent
  },
  {
    path : 'loans',
    component:ViewLoansComponent
  },
  {
    path : 'profile',
    component:UserProfileComponent
  },
  {
    path : 'account',
    component:AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
