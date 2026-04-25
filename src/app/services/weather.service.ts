import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  private apiUrl = 'https://weather-app-x9sd.onrender.com/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string, units: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?city=${city}&units=${units}`);
  }
}