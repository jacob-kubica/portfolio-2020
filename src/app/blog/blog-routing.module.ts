import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'blog', component: BlogComponent, data: { title: extract('Blog') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BlogRoutingModule {}
