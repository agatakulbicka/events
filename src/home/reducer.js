import {
    REQUEST_EVENTS,
    RECEIVE_EVENTS,
    REQUEST_CITIES,
    RECEIVE_CITIES,
    SHOW_EVENTS_IN_CITY,
    RECEIVE_CURRENT_LOCALISATION,
    FAILED_TO_RECEIVE_CURRENT_LOCALISATION
}
    from './actionTypes'

const initialState = {
    events: [],
    cities: [],
    fetchingEvents: false,
    fetchingCities: false,
    currentLocalisation: {
        currentCity: 'Olsztyn',
        cityLat: 53.77595689376808,
        cityLng: 20.476584434509277
    },
    currentGeoLocalisation: {
        currentCity: 'Twoja obecna lokalizacja',
        cityLat: null,
        cityLng: null
    }

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
                currentLocalisation: {
                    currentCity: action.currentCity,
                    cityLat: action.cityLat,
                    cityLng: action.cityLng
                }
            });
        case RECEIVE_CURRENT_LOCALISATION:
            return Object.assign({}, state, {
                currentGeoLocalisation: {
                    currentCity: 'Twoja obecna lokalizacja',
                    cityLat: action.currentPosition.coords.latitude,
                    cityLng: action.currentPosition.coords.longitude
                },
                currentLocalisation: {
                    currentCity: 'Twoja obecna lokalizacja',
                    cityLat: action.currentPosition.coords.latitude,
                    cityLng: action.currentPosition.coords.longitude
                }
            });
        case FAILED_TO_RECEIVE_CURRENT_LOCALISATION:
            return Object.assign({}, state, {
                currentGeoLocalisation: null
            });

        default:
            return state
    }
}