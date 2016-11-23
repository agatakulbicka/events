import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'
import eventsCitiesReducer from './home/reducer'
import listEventsReducer from './list-events/reducer'


let reducer = combineReducers({
    eventsCitiesData: eventsCitiesReducer,
    favouritesEvents: listEventsReducer
})

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware
        )
    ),
    persistState(['favouritesEvents'])
)

store.subscribe(() => {
    localStorage.setItem('favouritesEvents', JSON.stringify(store.getState().favouritesEvents.favouritesEvents|| []))

})

export default store