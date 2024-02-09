import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries, DefaultService } from '../core/modules/openapi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesDisplayService {
  private url = 'http://samms.archton.io:8080/countries';


  constructor(private http: HttpClient) {

  }

  // getCountries(): Observable<Countries[]> {
  //   return this.api.getCountries()
  // }
 // let localVarPath = `/countries`;
     //   let url ='';
     getCountries() {
    return this.http.get(this.url);
  }
}
