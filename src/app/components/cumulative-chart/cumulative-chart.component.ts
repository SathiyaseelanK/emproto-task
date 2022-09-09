import { CovidService } from './../../services/covid.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import HighCharts from "highcharts/highmaps";

@Component({
  selector: 'emproto-cumulative-chart',
  templateUrl: './cumulative-chart.component.html',
  styleUrls: ['./cumulative-chart.component.scss']
})
export class CumulativeChartComponent implements OnInit, OnChanges {
  HighCharts = HighCharts;
  chartOptions: HighCharts.Options | any= null;
  @Input() countryName: string | null = null;
  constructor(
    private covidService: CovidService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['countryName'].currentValue) {
      this.chartOptions = null;
      this.getLineChart()
    }
  }

  ngOnInit(): void {
    this.getLineChart();
  }

  private getLineChart() {
    if (this.countryName) {
    this.covidService.getSpecificCumulative(this.countryName)
    .subscribe((res) => {
      if (res.timeline && Object.keys(res.timeline).length > 0) {
        const cases = res.timeline.cases;
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
        this.createChart(mapData)
      }
    })
    } else {
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
          this.createChart(mapData)
        }
      })
    }
  }

  createChart(mapData: any[]) {
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

  

}
