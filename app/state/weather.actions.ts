import { IWeatherResponsesState } from './weather.state';
import { WeatherResponseData } from './../models/WeatherResponseData.model';
import { createAction, props } from "@ngrx/store";

export const REQUEST_WEATHER = 'requestWeather';
export const WEATHER_SUCCESS = 'weatherSuccess';
export const WEATHER_ADD = 'weatherAdd';
export const DELETE_WEATHER = 'deleteWeather';
export const FLIP_ORDER = 'flipOrder';
export const SEARCH_ERROR_MESSAGE = 'searchError';
export const DUPLICATE_ERROR_MESSAGE = 'duplicateError';

export const requestWeather = createAction(
    REQUEST_WEATHER,
    props<{ searchString: string }>()
);

export const weatherSuccess = createAction(
    WEATHER_SUCCESS,
    props<{ weatherData }>()
);

export const deleteWeather = createAction(
    DELETE_WEATHER,
    props<{ index: number }>()
);

export const flipOrder = createAction(
    FLIP_ORDER
);

export const searchError = createAction(
    SEARCH_ERROR_MESSAGE,
    props<{message: string}>()
)

export const browserReload = createAction(
    'browserReload',
    props<{ savedState: IWeatherResponsesState}>()
)