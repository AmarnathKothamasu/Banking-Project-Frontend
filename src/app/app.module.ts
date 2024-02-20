import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './components/account/account.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { FixedDepositComponent } from './components/fixed-deposit/fixed-deposit.component';
import { ViewLoansComponent } from './components/view-loans/view-loans.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TokenInterceptor } from './shared/token.interceptor';
import { BalanceComponent } from './components/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    AccountComponent,
    TransactionHistoryComponent,
    TransferMoneyComponent,
    FixedDepositComponent,
    ViewLoansComponent,
    UserProfileComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, // Provide your interceptor class here
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
