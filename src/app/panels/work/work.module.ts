import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, WorkRoutingModule],
  declarations: [WorkComponent],
})
export class WorkModule {}
