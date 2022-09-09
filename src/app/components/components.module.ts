import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountCardComponent } from './count-card/count-card.component';
import { SymptomCardComponent } from './symptom-card/symptom-card.component';
import { CumulativeChartComponent } from './cumulative-chart/cumulative-chart.component';
import { DailyConfirmedComponent } from './daily-confirmed/daily-confirmed.component';
import { GlobalChartComponent } from './global-chart/global-chart.component';
import { GlobalTableComponent } from './global-table/global-table.component';
import { HighchartsChartModule } from 'highcharts-angular';

import {MatMenuModule} from '@angular/material/menu';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    CountCardComponent,
    SymptomCardComponent,
    CumulativeChartComponent,
    DailyConfirmedComponent,
    GlobalChartComponent,
    GlobalTableComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatMenuModule
  ],
  exports: [
    CountCardComponent,
    SymptomCardComponent,
    CumulativeChartComponent,
    DailyConfirmedComponent,
    GlobalChartComponent,
    GlobalTableComponent,
    NavComponent
  ]
})
export class ComponentsModule { }
