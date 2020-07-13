import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index'
import {authMiddleware} from './middlewares/authMiddleware';
import {profileMiddleware} from './middlewares/profileMiddleware';


export const store = createStore(rootReducer, compose(
    applyMiddleware(authMiddleware),
    applyMiddleware(profileMiddleware)
));