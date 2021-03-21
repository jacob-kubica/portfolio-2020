import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { FinanceComponent } from './finance.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'finance', component: FinanceComponent, data: { title: extract('Finance') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class FinanceRoutingModule {}
