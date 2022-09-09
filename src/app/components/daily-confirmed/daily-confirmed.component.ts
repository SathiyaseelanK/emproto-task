import { Component, OnInit } from '@angular/core';
import HighCharts from "highcharts/highmaps";
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'emproto-daily-confirmed',
  templateUrl: './daily-confirmed.component.html',
  styleUrls: ['./daily-confirmed.component.scss']
})
export class DailyConfirmedComponent implements OnInit {
  HighCharts = HighCharts;
  chartOptions: HighCharts.Options | any = null;
  constructor(
    private covidService: CovidService
  ) { }

  ngOnInit(): void {
    this.getLineChart();
  }

  private getLineChart() {
    this.covidService.getLastDaysHistoryAll(5).subscribe((res) => {
      if (res.cases && Object.keys(res.cases).length > 0) {
        const keysArray = Object.keys(res.cases)
        const deathData = res.deaths;
        const recoveredData = res.recovered;
        const casesData = res.deaths;
        const categories= []
        const cases =[];
        const recovered =[];
        const deaths = [];
        for (let index = 0; index < 5; index++) {
          const element: string = keysArray[index];
          categories.push(this.getWeekDay(new Date(element).getDay()));
          cases.push(deathData[element]);
          recovered.push(recoveredData[element]);
          deaths.push(casesData[element])
        }
        this.chartOptions = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Daily cases confirmed'
          },
          xAxis: {
            categories: categories,
            crosshair: true
          },
          yAxis: {
            title: {
              useHTML: true,
              text: 'Counts'
            }
          },
          tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            },
            series: {
              borderRadius: 5
            }
          },
          series: [
            {
              name: 'Death',
              data: deaths,
              color: '#EE7D78'
            },
            {
            name: 'Cases',
            data: cases,
            color: '#C6EBCC'
          }, {
            name: 'Recovered',
            data: recovered,
            color: '#B4BBDD'
          }, ]
        };

      }
    })
  }

  private getWeekDay(day: number): string {
    let weekDay = '';
    switch (day) {
      case 0:
        weekDay = 'Sun';
        break;
      case 1:
        weekDay = 'Mon';
        break;
      case 2:
        weekDay = 'Tue';
        break;
      case 3:
        weekDay = 'Wed';
        break;
      case 4:
        weekDay = 'Thu';
        break;
      case 5:
        weekDay = 'Fri';
        break;
      case 6:
        weekDay = 'Sat';
        break;
      default:
        break;
    }
    return weekDay;
  }

}
