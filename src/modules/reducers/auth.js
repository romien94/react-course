import {LOG_IN, LOG_OUT} from '../actions';

const initialState = {
    isLoggedIn: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {isLoggedIn: true};
        case LOG_OUT:
            return {isLoggedIn: false};
        default:
            return state
    }
}