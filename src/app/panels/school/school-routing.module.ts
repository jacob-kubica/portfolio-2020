import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { SchoolComponent } from './school.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'school', component: SchoolComponent, data: { title: extract('School') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SchoolRoutingModule {}
