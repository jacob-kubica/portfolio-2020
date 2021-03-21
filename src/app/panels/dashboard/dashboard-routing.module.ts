import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { DashComponent } from './dash.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'dashboard', component: DashComponent, data: { title: extract('Dashboard') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashboardRoutingModule {}
