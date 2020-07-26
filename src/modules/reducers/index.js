import {combineReducers} from 'redux';
import auth from './auth'
import profile from './profile';
import map from './map';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({form: formReducer, auth,profile, map});