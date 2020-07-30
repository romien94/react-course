import {combineReducers} from 'redux';
import auth from './auth'
import profile from './profile';
import map from './map';

export default combineReducers({auth,profile, map});