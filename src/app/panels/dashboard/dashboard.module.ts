import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from './dash.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, DashboardRoutingModule],
  declarations: [DashComponent],
})
export class DashboardModule {}
