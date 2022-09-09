import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountCardComponent } from './count-card/count-card.component';
import { SymptomCardComponent } from './symptom-card/symptom-card.component';
import { CumulativeChartComponent } from './cumulative-chart/cumulative-chart.component';
import { DailyConfirmedComponent } from './daily-confirmed/daily-confirmed.component';
import { GlobalChartComponent } from './global-chart/global-chart.component';
import { GlobalTableComponent } from './global-table/global-table.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    CountCardComponent,
    SymptomCardComponent,
    CumulativeChartComponent,
    DailyConfirmedComponent,
    GlobalChartComponent,
    GlobalTableComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [
    CountCardComponent,
    SymptomCardComponent,
    CumulativeChartComponent,
    DailyConfirmedComponent,
    GlobalChartComponent,
    GlobalTableComponent
  ]
})
export class ComponentsModule { }
