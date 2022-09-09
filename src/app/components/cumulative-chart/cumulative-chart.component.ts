import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';
import HighCharts from "highcharts/highmaps";

@Component({
  selector: 'emproto-cumulative-chart',
  templateUrl: './cumulative-chart.component.html',
  styleUrls: ['./cumulative-chart.component.scss']
})
export class CumulativeChartComponent implements OnInit {
  HighCharts = HighCharts;
  chartOptions: HighCharts.Options | any= null;
  constructor(
    private covidService: CovidService
  ) { }

  ngOnInit(): void {
    this.getLineChart();
  }

  private getLineChart() {
    this.covidService.getAllCumulative().subscribe((res) => {
      if (res.cases && Object.keys(res.cases).length > 0) {
        const cases = res.cases;
        const keysArray = Object.keys(cases)
        const mapData = [];
        for (let index = 0; index < keysArray.length; index++) {
          const element: string = keysArray[index];
          mapData.push(
            {
              x: new Date(element),
              y: cases[element]
            }
          )
        }
        this.chartOptions = {
          xAxis: {
            type: 'datetime'
          },
        
          series: [{
            name: 'Confirmed',
            data: mapData
          }],
          title: {
            text: "Confirmed (cumulative)",
          },
        };

      }
    })
  }

  

}
