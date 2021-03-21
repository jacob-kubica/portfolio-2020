import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentsComponent } from './properties/investments/investments.component';
import { LiabilitiesComponent } from './properties/liabilities/liabilities.component';
import { CashComponent } from './properties/cash/cash.component';
import { DebtComponent } from './properties/debt/debt.component';
import { TFSAComponent } from './types/tfsa/tfsa.component';
import { RRSPComponent } from './types/rrsp/rrsp.component';
import { MarginComponent } from './types/margin/margin.component';
import { SavingsComponent } from './types/savings/savings.component';
import { ChequeingComponent } from './types/chequeing/chequeing.component';
import { CreditCardComponent } from './types/credit-card/credit-card.component';
import { LineOfCreditComponent } from './types/line-of-credit/line-of-credit.component';
import { LoanComponent } from './types/loan/loan.component';

@NgModule({
  declarations: [
    InvestmentsComponent,
    LiabilitiesComponent,
    CashComponent,
    DebtComponent,
    TFSAComponent,
    RRSPComponent,
    MarginComponent,
    SavingsComponent,
    ChequeingComponent,
    CreditCardComponent,
    LineOfCreditComponent,
    LoanComponent,
  ],
  imports: [CommonModule],
})
export class AccountModule {}
