import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private apiService: ApiService) { }

  public getAllCountryMap():Observable<any> {
    return this.apiService.get('../../assets/map/custom/world.geo.json');
  }

  getCountyMapByName(countryName: string): Observable<any> {
    return this.apiService.get(`../../assets/map/countries/${countryName}/${countryName}-all.geo.json`);
  }

}
