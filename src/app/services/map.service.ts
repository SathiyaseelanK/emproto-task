import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private apiService: ApiService) { }

  public getCountryMap():Observable<any> {
    return this.apiService.get('../../assets/map/custom/world.geo.json');
  }
}
