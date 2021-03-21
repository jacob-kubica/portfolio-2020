import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { BillsComponent } from './bills.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'bills', component: BillsComponent, data: { title: extract('Bills') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BillsRoutingModule {}
