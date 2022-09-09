import { CountCards } from './../../models/covid-response.model';
import { MapBubble } from '../../models/chart.model';
import { Countries } from '../../models/covid-response.model';
import { MapService } from '../../services/map.service';
import { Continents } from '../../models/covid-response.model';
import { CovidService } from '../../services/covid.service';
import { Component, OnInit } from '@angular/core';
import HighCharts from "highcharts/highmaps";

@Component({
  selector: 'emproto-country-dashboard',
  templateUrl: './country-dashboard.component.html',
  styleUrls: ['./country-dashboard.component.scss']
})
export class CountryDashboardComponent implements OnInit {
  countryName = 'IN';
  HighCharts = HighCharts;
  chartConstructor = "mapChart";
  tableData:any = [];
  countCard= CountCards;
  chartOptions: HighCharts.Options | any= null;
  totalConfirmed: number = 0;
  totalDeaths: number = 0;
  totalRecovered: number = 0;
  countryList: any[] = []
  constructor(
    private covidService: CovidService,
    private mapService: MapService) { }

  ngOnInit(): void {
    this.createContinentsMap();
    this.getAllContinentCases();
  }

  private createContinentsMap() {
    this.mapService.getCountyMapByName(this.countryName.toLowerCase()).subscribe(async (worldMap) => {
      const bubbleData: MapBubble[] =await  this.getCountryBubbles();
      this.chartOptions =  {
        chart: {
          borderWidth: 1,
          map: worldMap,
          plotBackgroundColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#4C6CF0'],
                [1, '#3E4691']
                
            ]
          }
          
        },
    
        title: {
          text: "Confirmed cases by Country",
        },
    
    
        legend: {
          enabled: false
        },
    
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: "bottom"
          }
        },
        
        plotOptions: {
          maps: {
            color:{
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                [0, '#4C6CF0'],
                  [1, '#3E4691']
                  
              ]
            }
          },
          bubble: {
            opacity : 1
          }
      },

      colorAxis: {
        dataClasses: [
          {
            from: 0,
            to: 10000,
            color:'#F1E04E'
          },
          {
            from: 10000,
            to: 1000000,
            color:'#C6927C'
          },
          {
            from: 1000000,
            to: 100000000,
            color:'#DD4942'
          }
        ]
      },
    
        series: [
          {
            type: "map",
            name: "Countries",
            color: '#DD4942',
            enableMouseTracking: false
          },
          {
            type: "mapbubble",
            name: "Total Confirmed",
            color: '#DD4942',
            joinBy:  ["iso-a2", "code3"],
            data: bubbleData,
            minSize: 4,
            maxSize: 10,
            tooltip: {
              formatter: function() {    
                return '<b>'+JSON.stringify(this) +'</b><br/>';
            }
            },
            marker: {
              fillOpacity:1
            },
            borderColor: 'black',
                    borderWidth: 0.2,
                    states: {
                        hover: {
                            borderWidth: 1
                        }
                    },
    
          }
        ]
      };
    })
  }

  private getCountryBubbles(): Promise<MapBubble[]> {
    return new Promise((resolve) => {
      this.covidService.getSpecificCountry('in').subscribe((countryData: Countries) => {
        const bubbleData: MapBubble[] = [{
          code3: countryData.countryInfo.iso2,
          z: countryData.active,
          countryName: countryData.country
        }];
        resolve(bubbleData);
      });
    })
  }

  public getAllContinentCases(): void {
    this.covidService.getAllCountries().subscribe((countries: Countries[]) => {
      const allContnents = countries;
      for (let index = 0; index < allContnents.length; index++) {
        const element = allContnents[index];
        this.totalConfirmed += element.cases;
        this.totalDeaths += element.deaths;
        this.totalRecovered += element.recovered;
        this.tableData.push({
          code3: element.country,
          z: element.cases,
        })
        this.countryList.push({code : element.countryInfo.iso2, desc: element.country});
      }
    })
  }

  loadChart(countryName: string) {
    console.log(countryName);
    this.chartOptions = null;
    this.countryName= countryName;
    this.createContinentsMap();
  }



}
