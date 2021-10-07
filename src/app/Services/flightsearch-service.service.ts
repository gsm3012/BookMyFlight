import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FlightsearchServiceService {

  constructor(private http : HttpClient) { }

  findFlight(flightData:any)
  {
    console.log(flightData);
    return this.http.get(`${baseUrl}/api/v1.0/user`, flightData);
  }
}
