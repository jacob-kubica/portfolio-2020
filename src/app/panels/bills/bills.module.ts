import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { BillsRoutingModule } from './bills-routing.module';
import { BillsComponent } from './bills.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, BillsRoutingModule],
  declarations: [BillsComponent],
})
export class BillsModule {}
