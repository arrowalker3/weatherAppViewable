import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherListItem } from '../models/WeatherListItem.model';
import { getWeatherData } from '../state/weather.selector';
import { IWeatherResponsesState } from '../state/weather.state';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  weatherData$: Observable<WeatherListItem>;
  directionMap = {  // The data comes with reference to a 16-point compass, with 22.5deg difference between neighboring directions
    "E": 0,
    "ENE": 22.5,
    "NE": 45,
    "NNE": 67.5,
    "N": 90,
    "NNW": 112.5,
    "NW": 135,
    "WNW": 157.5,
    "W": 180,
    "WSW": -157.5,
    "SW": -135,
    "SSW": -112.5,
    "S": -90,
    "SSE": -67.5,
    "SE": -45,
    "ESE": -22.5
  }
  directionRotation: number;

  constructor(private store: Store<{ weather: IWeatherResponsesState }>, private route: ActivatedRoute, public router: Router) {
    route.paramMap.subscribe((params) => {
        const location = params.get('location');
        this.weatherData$ = store.select(getWeatherData(location));
        this.weatherData$.subscribe(city => {
          if (city.id === "") {
            router.navigate([`/location-not-found/${location}`]);
          } else {
            this.directionRotation = this.directionMap[city.current.wind_dir];
          }
        });
    });
  }

  ngOnInit(): void {
  }

}
