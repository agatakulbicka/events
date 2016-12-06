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

import fetch from 'isomorphic-fetch';

function requestEvents() {
    return {
        type: REQUEST_EVENTS
    }
}

function receiveEvents(events) {
    return {
        type: RECEIVE_EVENTS,
        events: events
    }
}

function requestCities() {
    return {
        type: REQUEST_CITIES
    }
}

function receiveCities(cities) {
    return {
        type: RECEIVE_CITIES,
        cities: cities
    }
}


export function fetchEvents() {
    return function (dispatch) {
        dispatch(requestEvents());
        return fetch(`${process.env.PUBLIC_URL}/data/events.json`)
            .then(response => response.json())
            .then(events => dispatch(receiveEvents(events)))
    }

}


export function fetchCities() {
    return function (dispatch) {
        dispatch(requestCities());
        return fetch('http://212.59.240.158:3010/api/cities')
            .then(response => response.json())
            .then(cities=> dispatch(receiveCities(cities)))
    }

}


export function showEventsInCity(currentCity, cityLat, cityLng) {
    return {
        type: SHOW_EVENTS_IN_CITY,
        currentCity: currentCity,
        cityLat: cityLat,
        cityLng: cityLng
    }
}

function receiveCurrentLocalisation(currentPosition) {
    return {
        type: RECEIVE_CURRENT_LOCALISATION,
        currentPosition: currentPosition
    }
}

function failedToReceiveCurrentlocalisation() {
    return {
        type: FAILED_TO_RECEIVE_CURRENT_LOCALISATION
    }
}

export function requestCurrentLocalisation() {
    return function (dispatch) {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(currentPosition => dispatch(receiveCurrentLocalisation(currentPosition)))
        } else {
            return dispatch(failedToReceiveCurrentlocalisation())
        }
    }
}