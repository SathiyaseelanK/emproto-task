import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private customHeader(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set( 'Content-Type','application/json; charset=utf-8')
    headers.set('Access-Control-Allow-Origin', environment.apiUrl);
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    headers.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    return headers;
  }

  public get(url: string): Observable<any> {
    const headers = this.customHeader();
    return this.http.get(url, {headers: headers});
  }

  public post(url: string, body: Object): Observable<any>  {
    const headers = this.customHeader();
    return this.http.post(url, body, {headers: headers});
  }

  public put(url: string, body: Object): Observable<any>  {
    const headers = this.customHeader();
    return this.http.put(url, body, {headers: headers});
  }

  public delete(url: string): Observable<any> {
    const headers = this.customHeader();
    return this.http.delete(url, {headers: headers});
  }
}
