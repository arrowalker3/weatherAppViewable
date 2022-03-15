import { browserReload } from './state/weather.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialState, IWeatherResponsesState } from './state/weather.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  state: IWeatherResponsesState;
  constructor(private store: Store<{ weather: IWeatherResponsesState }>) {
    try {
      this.state = JSON.parse(localStorage.getItem('weatherState'));
      if (this.state === null) {
        this.state = initialState;
      }
    } catch(error) {
      this.state = initialState;
    }
  }

  ngOnInit(): void {
      this.store.dispatch(browserReload({savedState: this.state}));
  }
}
