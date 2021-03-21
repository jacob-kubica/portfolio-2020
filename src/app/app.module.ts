import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './panels/home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './panels/about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkModule } from './panels/work/work.module';
import { BlogModule } from './panels/blog/blog.module';
import { ProjectsModule } from './panels/projects/projects.module';
import { SchoolModule } from './panels/school/school.module';
import { FinanceModule } from './panels/finance/finance.module';
import { DashboardModule } from './panels/dashboard/dashboard.module';
import { LayoutModule } from '@angular/cdk/layout';
import { BillsModule } from './panels/bills/bills.module';
import { PayoffModule } from './panels/payoff/payoff.module';
import { DistributionModule } from './panels/distribution/distribution.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    WorkModule,
    BlogModule,
    ProjectsModule,
    SchoolModule,
    FinanceModule,
    DashboardModule,
    BillsModule,
    PayoffModule,
    DistributionModule,
    AppRoutingModule,
    LayoutModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
