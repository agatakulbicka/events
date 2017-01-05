import {
    SHOW_FIELD_TO_INSERT_PAYMENT,
    HIDE_FIELD_TO_INSERT_PAYMENT,
    SET_IMG_SOURCE,
    GET_COORDINATES_ON_CLICK,
    SHOW_IF_IMAGE_IS_INCORRECT
}
    from './actionTypes'

const initialState = {
    isPaymentLabelOpened: false,
    imgSource: '',
    place: [],
    isPlaceMarked: false,
    imageTooBig: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FIELD_TO_INSERT_PAYMENT:
            return Object.assign({}, state, {
                isPaymentLabelOpened: true
            })
        case HIDE_FIELD_TO_INSERT_PAYMENT:
            return Object.assign({}, state, {
                isPaymentLabelOpened: false
            })
        case SET_IMG_SOURCE:
            return Object.assign({}, state, {
                imgSource: action.imgSource,
                imageTooBig: action.imageTooBig
            })
        case  SHOW_IF_IMAGE_IS_INCORRECT:
            return Object.assign({}, state, {
                imageTooBig: action.imageTooBig
            })

        case GET_COORDINATES_ON_CLICK:
            return Object.assign({}, state, {
                place: action.place,
                isPlaceMarked: true
            })

        default:
            return state
    }
}
