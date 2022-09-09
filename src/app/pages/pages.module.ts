import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentDashboardComponent } from './continents-dashboard/continents-dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { CountryDashboardComponent } from './country-dashboard/country-dashboard.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


const routes: Routes = [
  {
    path: '',
    component: ContinentDashboardComponent,
  },
  {
    path:'country-dashboard',
    component: CountryDashboardComponent
  }
]

@NgModule({
  declarations: [
    ContinentDashboardComponent,
    CountryDashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    HighchartsChartModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxSkeletonLoaderModule
  ]
})
export class PagesModule { }
