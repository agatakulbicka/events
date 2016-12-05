import {
    SHOW_FIELD_TO_INSERT_PAYMENT,
    HIDE_FIELD_TO_INSERT_PAYMENT,
    SET_IMG_SOURCE,
    GET_COORDINATES_ON_CLICK
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
