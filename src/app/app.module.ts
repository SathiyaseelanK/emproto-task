import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ApiService } from './services/api.service';
import { CovidService } from './services/covid.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [
    ApiService,
    CovidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
