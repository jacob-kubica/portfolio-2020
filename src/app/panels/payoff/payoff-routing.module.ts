import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { PayoffComponent } from './payoff.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'payoff', component: PayoffComponent, data: { title: extract('Payoff') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PayoffRoutingModule {}
