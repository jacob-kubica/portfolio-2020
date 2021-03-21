import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent } from './bank/bank.component';
import { SecuritiesExchangeComponent } from './securities-exchange/securities-exchange.component';
import { GovernmentComponent } from './government/government.component';
import { EmployerComponent } from './employer/employer.component';

@NgModule({
  declarations: [BankComponent, SecuritiesExchangeComponent, GovernmentComponent, EmployerComponent],
  imports: [CommonModule],
})
export class InstitutionModule {}
