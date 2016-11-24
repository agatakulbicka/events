import {
    ADD_EVENT_TO_FAVOURITES,
    DELETE_EVENT_FROM_FAVOURITES,
    ACTIVATE_FILTER
}
    from './actionTypes'

export function addEventToFavourites(eventId) {
    return {
        type: ADD_EVENT_TO_FAVOURITES,
        eventId: eventId
    }
}

export function deleteEventFromFavourites(eventId) {
    return {
        type: DELETE_EVENT_FROM_FAVOURITES,
        eventId: eventId
    }
}

export function activateFilter(filterName) {
    return {
        type: ACTIVATE_FILTER,
        nameOfFilterToActivate: filterName
    }
}