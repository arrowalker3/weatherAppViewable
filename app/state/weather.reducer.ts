import { createReducer, on } from "@ngrx/store";
import { browserReload, deleteWeather, flipOrder, requestWeather, searchError, weatherSuccess } from "./weather.actions";
import { initialState } from "./weather.state";


const _weatherReducer = createReducer(
    initialState,
    on(weatherSuccess, (state, action) => {
        let newState = { ...state, searchedItem: action.weatherData };

        newState = _updateState(newState);
        localStorage.setItem('weatherState', JSON.stringify(newState));

        return newState;
    }),
    on(deleteWeather, (state, action) => {
        let newList = [...state.responses];
        newList.splice(action.index, 1);

        let newState = {...state, responses: newList };
        localStorage.setItem('weatherState', JSON.stringify(newState));
        return newState;
    }),
    on(flipOrder, (state) => {
        const reversed = state.responses.slice().reverse();
        let newState = {...state, responses: reversed, chronological: !state.chronological};
        localStorage.setItem('weatherState', JSON.stringify(newState));
        
        return newState;
    }),
    on(searchError, (state, action) => {
        return {...state, errorMessage: action.message};
    }),
    on(browserReload, (state, action) => {
        return action.savedState;
    })
);

export function weatherReducer(state, action) {
    return _weatherReducer(state, action);
}

function _updateState(state) {
    // Check if unique first
    const oldListIds = [];
    const newItem = {...state.searchedItem, id: (state.searchedItem.location.name + state.searchedItem.location.region).replace(/\s/g, "")};
    
    state.responses.forEach(weatherItem => {
        oldListIds.push(weatherItem.id);
    });

    if (_uniqueItem(oldListIds, newItem.id)) {
        state.errorMessage = "";
    
        if (state.chronological) {
            state.responses = [...state.responses, newItem];
        } else {
            state.responses = [newItem, ...state.responses];
        }
    } else {
        state.errorMessage = `${newItem.location.name}, ${newItem.location.region} is already on the list.`;
    }

    return state;
}

function _uniqueItem(oldListIds, toAddId) {
    return (oldListIds.indexOf(toAddId) === -1);
}