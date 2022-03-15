import { getResponseList, getErrors, getRecentSearch } from './../state/weather.selector';
import { requestWeather } from './../state/weather.actions';
import { IWeatherResponsesState } from './../state/weather.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherListItem } from '../models/WeatherListItem.model';

function uniqueEntry(input: string, list: string[]) {
  return (list.indexOf(input) === -1);
}

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  searchString: string = "";
  errorMessage$: Observable<string>;
  searchedItem$: Observable<WeatherListItem>;
  idList: string[] = [];
  

  constructor(private store:Store<{ weather: IWeatherResponsesState }>) {
    this.errorMessage$ = store.select(getErrors);
    store.select(getResponseList).subscribe(responses => {
      responses.forEach(item => {
        this.idList.push(item.id);
      })
    });
    this.searchedItem$ = store.select(getRecentSearch);
  }

  ngOnInit(): void {
  }

  onSearch() {
    let cleanedString = this.searchString;  // meant to sanitize input
    
    cleanedString = cleanedString.toLowerCase();
    cleanedString = cleanedString.replace(/[^a-z0-9\s]/g, '');
    this.store.dispatch(requestWeather({searchString: cleanedString}));
    this.searchString = "";

  }

}
