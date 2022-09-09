import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Continents, Countries, HistoricalData, LastDaysHistory } from '../models/covid-response.model';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  constructor(private apiService: ApiService) { }
  public getAllContinents():Observable<Continents[]> {
    return this.apiService.get(`${environment.apiUrl + environment.allContinents}`);
  }

  public getAllCountries():Observable<Countries[]> {
    return this.apiService.get(`${environment.apiUrl + environment.allCountries}`);
  }

  public getSpecificContinent(ContinentName: string):Observable<Continents> {
    return this.apiService.get(`${environment.apiUrl + environment.specificCountry + ContinentName + environment.suffix}`);
  }

  public getSpecificCountry(CountryName: string):Observable<Countries> {
    return this.apiService.get(`${environment.apiUrl + environment.specificCountry + CountryName + environment.suffix}`);
  }

  public getAllCumulative():Observable<HistoricalData>{
    return this.apiService.get(`${environment.apiUrl + environment.cumulativeAll}`);
  }

  public getLastDaysHistoryAll(days: number):Observable<HistoricalData> {
    return this.apiService.get(`${environment.apiUrl + environment.lastDaysHistoryAll+ days}`);
  }
}
