import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentDashboardComponent } from './continents-dashboard/continents-dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';

const routes: Routes = [
  {
    path: '',
    component: ContinentDashboardComponent,
  }
]

@NgModule({
  declarations: [
    ContinentDashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    HighchartsChartModule
  ]
})
export class PagesModule { }
