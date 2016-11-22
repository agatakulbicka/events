import {
    REQUEST_EVENTS,
    RECEIVE_EVENTS,
    REQUEST_CITIES,
    RECEIVE_CITIES,
    SHOW_EVENTS_IN_CITY
}
    from './actionTypes'

const initialState = {
    events: [],
    cities: [],
    fetchingEvents: false,
    fetchingCities: false,
    currentCity: "Olsztyn",
    cityLat: 53.77595689376808,
    cityLng: 20.476584434509277
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_EVENTS:
            return Object.assign({}, state, {
                fetchingEvents: true
            });
        case RECEIVE_EVENTS:
            return Object.assign({}, state, {
                events: action.events,
                fetchingEvents: false
            });
        case REQUEST_CITIES:
            return Object.assign({}, state, {
                fetchingCities: true
            });
        case RECEIVE_CITIES:
            return Object.assign({}, state, {
                cities: action.cities,
                fetchingCities: false
            });
        case SHOW_EVENTS_IN_CITY:
            return Object.assign({}, state, {
                currentCity: action.currentCity,
                cityLat: action.cityLat,
                cityLng: action.cityLng
            });
        default:
            return state
    }
}