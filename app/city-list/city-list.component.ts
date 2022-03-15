import { deleteWeather, flipOrder } from './../state/weather.actions';
import { getResponseList } from './../state/weather.selector';
import { IWeatherResponsesState } from './../state/weather.state';
import { WeatherListItem } from '../models/WeatherListItem.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  responses$: Observable<WeatherListItem[]>;

  constructor(private store: Store<{ weather: IWeatherResponsesState }>) {
    this.responses$ = store.select(getResponseList);
  }

  onFlipOrder() {
    this.store.dispatch(flipOrder());
  }

  onDelete(index) {
    this.store.dispatch(deleteWeather({ index: index }));
  }

  onToggle(i) {
    document.querySelector("#dropdown_" + i).classList.add('active');
  }

  ngOnInit(): void {
  }

}
