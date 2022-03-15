import { IWeatherResponsesState } from './weather.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getWeatherState = createFeatureSelector<IWeatherResponsesState>('weather');

export const getResponseList = createSelector(getWeatherState, state => {
    return state.responses;
});

export const getWeatherData = (id: string) => createSelector(getWeatherState, (state) => {
    const index = state.responses.findIndex(location => location.id === id);
    if (index === -1) {
        return {...state.responses[0], id: ""};
    }
    return state.responses[index];
});

export const getErrors = createSelector(getWeatherState, (state) => {
    return state.errorMessage;
});

export const getRecentSearch = createSelector(getWeatherState, state => {
    return state.searchedItem;
});