import {
    SHOW_FIELD_TO_INSERT_PAYMENT,
    HIDE_FIELD_TO_INSERT_PAYMENT,
    SET_IMG_SOURCE,
    GET_COORDINATES_ON_CLICK,
    ADD_NEW_EVENT_START,
    ADD_NEW_EVENT_END
}
    from './actionTypes'

export function showFieldToInsertPayment() {
    return {
        type: SHOW_FIELD_TO_INSERT_PAYMENT
    }
}
export function hideFieldToInsertPayment() {
    return {
        type: HIDE_FIELD_TO_INSERT_PAYMENT
    }
}

export function showFile(file) {
    return function (dispatch) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (event =>
            dispatch(setImgSource(reader.result)))
    }
}

function setImgSource(imgSource) {
    return {
        type: SET_IMG_SOURCE,
        imgSource: imgSource
    }
}


export function getCoordinatesOnClick(place) {
    return {
        type: GET_COORDINATES_ON_CLICK,
        place: place
    }
}

function addNewEventStart() {
    return {
        type: ADD_NEW_EVENT_START
    }
}

function addNewEventEnd() {
    return {
        type: ADD_NEW_EVENT_END
    }
}

export function addNewEvent(title, description, cost, start) {
    console.log('tytuł', title)
    console.log('data', start)
    return function (dispatch) {
        dispatch(addNewEventStart())
        return fetch('http://localhost:3005/api/events', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                cost: cost,
                description: description,
                start: start
            })
        })
            .then(response => response.json())
            .then(function (title, description, cost, start) {
                return dispatch(addNewEventEnd())
            })
    }
}