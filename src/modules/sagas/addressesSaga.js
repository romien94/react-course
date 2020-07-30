import {takeEvery, call, put} from 'redux-saga/effects';
import {FETCH_ADDRESSES, getAddresses, ERROR, showError} from '../actions';
import {serverAddresses} from '../api'

export function* showAddressesSaga(action) {
    // const {startingPoint, endingPoint} = action.payload;
    try {
        const res = yield call(serverAddresses);
        if (res.addresses) {
            yield put(getAddresses(res.addresses))
        }
        else {
            throw new Error('Загрузить адреса не удалось. Попробуйте обновить страницу и сделать это снова')
        }
        // const res = yield call(serverAddresses, startingPoint,endingPoint);
    } catch (error) {
        yield put(showError(error))                
    }
}

export function* addressesSaga() {
    yield takeEvery(FETCH_ADDRESSES, showAddressesSaga)
}