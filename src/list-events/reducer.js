import {
    ADD_EVENT_TO_FAVOURITES,
    DELETE_EVENT_FROM_FAVOURITES
}
    from './actionTypes'

const initialState = {
    favouritesEventsIds: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT_TO_FAVOURITES:
            return Object.assign({}, state, {
                favouritesEventsIds: state.favouritesEventsIds.concat([action.eventId])
            })
        case DELETE_EVENT_FROM_FAVOURITES:
            return Object.assign({}, state, {
                favouritesEventsIds: state.favouritesEventsIds.filter(eventId => eventId !== action.eventId)
            })
        default:
            return state
    }
}