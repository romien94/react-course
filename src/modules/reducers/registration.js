import {REGISTRATION} from '../actions';

const initialState = {
    registrationStatus: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION:
            return action.payload
        default:
            return state;
    }
}