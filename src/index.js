import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './app/App';
import ListEvents from './list-events/ListEvents'
import Home from './home/Home'

import {fetchEvents, fetchCities} from './home/actionCreators'


function fetchEventsCitiesData() {
    store.dispatch(fetchEvents())
    store.dispatch(fetchCities())
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} onEnter={() => fetchEventsCitiesData()}>
                <IndexRoute component={Home}/>
                <Route path="/list-events" component={ListEvents}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
