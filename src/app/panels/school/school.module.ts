import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, SchoolRoutingModule],
  declarations: [SchoolComponent],
})
export class SchoolModule {}
