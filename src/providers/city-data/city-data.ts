import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { city } from './city';
/*
  Generated class for the CityDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CityDataProvider {
  public cities: any[];
  constructor(public http: HttpClient) {
    // console.log('Hello CityDataProvider Provider');
    this.cities = city;
  }

}
