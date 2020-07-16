import {LOG_IN, LOG_OUT, ERROR} from '../actions';

const initialState = {
    isLoggedIn: false,
    token: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {isLoggedIn: true, token: action.payload, error: null}
        case LOG_OUT:
            return {isLoggedIn: false, token: null,error: null};
        case ERROR:
            return {isLoggedIn: false, error: action.payload}
        default:
            return state
    }
}