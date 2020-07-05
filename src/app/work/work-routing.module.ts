import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { WorkComponent } from './work.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'work', component: WorkComponent, data: { title: extract('Work') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class WorkRoutingModule {}
