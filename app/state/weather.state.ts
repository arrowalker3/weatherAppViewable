import { WeatherListItem } from './../models/WeatherListItem.model';

export interface IWeatherResponsesState {
    errorMessage: string,
    chronological: boolean,
    searchedItem: WeatherListItem | null,
    responses: WeatherListItem[]
}

export const initialState = {
    errorMessage: "",
    chronological: false,
    searchedItem: null,
    responses: []
    
}


/**
 * Made as a way to test inputs before implementing calls to api
 */
export const testResponse = {
    location: {
        name: "Rexburg",
        region: "Idaho",
        country: "United States of America",
        lat: 43.83,
        lon: -111.79,
        tz_id: "America/Boise",
        localtime_epoch: 1645583144,
        localtime: "2022-02-22 19:25"
    },
    current: {
        last_updated_epoch: 1645582500,
        last_updated: "2022-02-22 19:15",
        temp_c: -12.8,
        temp_f: 9,
        is_day: 0,
        condition: {
            text: "Clear",
            icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
            code: 1000
        },
        wind_mph: 13.6,
        wind_kph: 22,
        wind_degree: 60,
        wind_dir: "ENE",
        pressure_mb: 1013,
        pressure_in: 29.91,
        precip_mm: 0,
        precip_in: 0,
        humidity: 60,
        cloud: 0,
        feelslike_c: -20.2,
        feelslike_f: -4.4,
        vis_km: 16,
        vis_miles: 9,
        uv: 2,
        gust_mph: 15.2,
        gust_kph: 24.5
    }
};