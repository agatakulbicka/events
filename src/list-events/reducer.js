import {
    ADD_EVENT_TO_FAVOURITES,
    DELETE_EVENT_FROM_FAVOURITES,
    ACTIVATE_FILTER
}
    from './actionTypes'

const initialState = {
    favouritesEventsIds: [],
    activeFilterName: 'wszyscy',
    availableFilters: ['wszyscy', 'dzieci', 'kobiety', 'mezczyzni', 'seniorzy', 'mlodziez']
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT_TO_FAVOURITES:
            return Object.assign({}, state, {                favouritesEventsIds: state.favouritesEventsIds.concat([action.eventId])
            })
        case DELETE_EVENT_FROM_FAVOURITES:
            return Object.assign({}, state, {
                favouritesEventsIds: state.favouritesEventsIds.filter(eventId => eventId !== action.eventId)
            })
        case ACTIVATE_FILTER:
            return Object.assign({}, state, {
                activeFilterName: action.nameOfFilterToActivate
            })
        default:
            return state
    }
}