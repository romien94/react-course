import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
// import { authMiddleware } from "./middlewares/authMiddleware";
import {authSaga} from '../modules/sagas/authSaga';
import {profileSaga} from '../modules/sagas/profileSaga';
import {registrationSaga} from '../modules/sagas/registrationSaga';
import {addressesSaga} from '../modules/sagas/addressesSaga';
import {routeSaga} from '../modules/sagas/routeSaga';
import createSagaMiddleware from "redux-saga";
import profile from "./reducers/profile";
// import { profileMiddleware } from "./middlewares/profileMiddleware";

const sagaMiddleware = createSagaMiddleware();


// export const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(authMiddleware), applyMiddleware(profileMiddleware))
// );

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(authSaga);
sagaMiddleware.run(profileSaga);
sagaMiddleware.run(registrationSaga);
sagaMiddleware.run(addressesSaga);
sagaMiddleware.run(routeSaga);