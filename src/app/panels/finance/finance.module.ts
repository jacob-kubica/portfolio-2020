import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { FinanceComponent } from './finance.component';
import { InstitutionComponent } from './institution/institution.component';
import { AccountComponent } from './account/account.component';
import { FinanceRoutingModule } from './finance-routing.module';
import { BankComponent } from './institution/bank/bank.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, FinanceRoutingModule],
  declarations: [BankComponent, FinanceComponent, InstitutionComponent, AccountComponent],
})
export class FinanceModule {}
