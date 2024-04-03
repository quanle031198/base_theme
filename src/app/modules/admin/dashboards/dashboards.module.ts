import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import {NgApexchartsModule} from "ng-apexcharts";
import {DashboardsComponent} from "./dashboards.component";


@NgModule({
  declarations: [DashboardsComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
      NgApexchartsModule
  ]
})
export class DashboardsModule { }
