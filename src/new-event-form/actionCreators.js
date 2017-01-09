import {
    SHOW_FIELD_TO_INSERT_PAYMENT,
    HIDE_FIELD_TO_INSERT_PAYMENT,
    SET_IMG_SOURCE,
    GET_COORDINATES_ON_CLICK,
    ADD_NEW_EVENT_START,
    ADD_NEW_EVENT_END,
    SHOW_IF_IMAGE_IS_INCORRECT
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
        reader.onloadend = (event => (file.size > 699392 || file.type !== 'image/jpeg')
            ?
            dispatch(showifImageIssIncorrect())
            :
            dispatch(setImgSource(reader.result)))
    }
}

function setImgSource(imgSource) {
    return {
        type: SET_IMG_SOURCE,
        imgSource: imgSource,
        imageTooBig: false
    }
}

function showifImageIssIncorrect() {
    return {
        type: SHOW_IF_IMAGE_IS_INCORRECT,
        imageTooBig: true
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

export function addNewEvent(eventName, target, cityName, address, eventDate, start, end, payment, imgSrc, coordinates, shortDescription, description, link) {
    console.log('imgSrc', imgSrc);
    console.log('target', target);
    return function (dispatch) {
        dispatch(addNewEventStart())
        return fetch('http://localhost:3005/api/events', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventName: eventName,
                target: target,
                cityName: cityName,
                address: address,
                eventDate: eventDate,
                start: start,
                end: end,
                payment: payment,
                imgSrc: imgSrc,
                coordinates: coordinates,
                shortDescription: shortDescription,
                description: description,
                link: link
            })
        })
            .then(response => response.json())
            .then(function (eventName, target, cityName, address, eventDate, start, end, payment, imgSrc, coordinates, shortDescription, description, link) {
                return dispatch(addNewEventEnd())
            })
    }
}