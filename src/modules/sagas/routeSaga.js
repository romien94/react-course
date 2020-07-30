import {takeEvery, put, call} from 'redux-saga/effects';
import {SEND_ROUTE, saveCoords, showError} from '../actions';
import {serverRoute} from '../api'

export function* showRouteSaga(action) {
    const {address1, address2} = action.payload;
    const res = yield call(serverRoute, address1, address2);
    try {
        const res = yield call(serverRoute, address1, address2);
        if (res) {
            yield put(saveCoords(res))
        }
        else {
            throw new Error('Не было найдено координат')
        }         
    } catch (error) {
        yield put(showError(error));
    }
}

export function* routeSaga() {
    yield takeEvery(SEND_ROUTE, showRouteSaga);
}