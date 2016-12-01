import {
    SHOW_FIELD_TO_INSERT_PAYMENT,
    HIDE_FIELD_TO_INSERT_PAYMENT,
    SET_IMG_SOURCE
}
    from './actionTypes'

const initialState = {
    isPaymentLabelOpened: false,
    imgSource: ''
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
                imgSource: action.imgSource
            })

        default:
            return state
    }
}
