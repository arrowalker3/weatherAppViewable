import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(searchFor: string) {
    const url = 'https://api.weatherapi.com/v1/current.json';
    const queryString = `?key=${environment.WEATHER_API_KEY}&q=${searchFor}`;
    const endingQueries = '&aqi=no';
    return this.http.get(url + queryString + endingQueries);
  }
}
