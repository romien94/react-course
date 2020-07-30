import {GET_ADDRESSES, SAVE_COORDS} from '../actions';

const initialState = {
    addressesList: [],
    coords: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESSES:
            return {addressesList: action.payload}
        case SAVE_COORDS:
            return {coords: action.payload}
        default:
            return state;
    }
}