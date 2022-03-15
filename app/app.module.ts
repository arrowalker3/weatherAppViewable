import { IWeatherResponsesState } from './state/weather.state';
import { WeatherEffects } from './state/weather.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ngrx related imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { weatherReducer } from './state/weather.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ReturnHomeComponent } from './return-home/return-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    AddLocationComponent,
    LocationDetailsComponent,
    HomepageComponent,
    NotFoundComponent,
    ReturnHomeComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([WeatherEffects]),
    StoreModule.forRoot({ weather: weatherReducer }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
