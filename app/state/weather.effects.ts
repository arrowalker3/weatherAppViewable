import { searchError } from './weather.actions';
// import { weatherResponse } from './weather.state';
import { WeatherService } from './weather.service';
import { requestWeather, weatherSuccess } from './weather.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private authService: WeatherService) {}

    getWeather$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(requestWeather),
            exhaustMap((action) => {
                return this.authService.getWeather(action.searchString).pipe(
                    map((data) => {
                        console.log(data);
                        return weatherSuccess({ weatherData: data });
                    }),
                    catchError(errResponse => {
                        console.log(errResponse);
                        return of(searchError({message: "Sorry, we couldn't find a place with that name"}));
                    })
                );
            })
        );
    });
}