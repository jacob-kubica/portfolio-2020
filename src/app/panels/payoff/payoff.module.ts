import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayoffRoutingModule } from './payoff-routing.module';
import { PayoffComponent } from './payoff.component';

@NgModule({
  declarations: [PayoffComponent],
  imports: [CommonModule, PayoffRoutingModule],
})
export class PayoffModule {}
