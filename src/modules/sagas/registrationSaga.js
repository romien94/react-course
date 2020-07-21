import {takeEvery, call, put} from 'redux-saga/effects';
import {REGISTRATION, showError} from '../actions';
import {serverRegister} from '../api';

// export function* authenticateSaga(action) {
//     const {email, password} = action.payload;
//     const res = yield call(serverLogIn, email, password);
//     try {
//         if (res.success) {
//             yield put(logIn(res.token));
//         }
//         else {
//             throw new Error('Неудалось войти. Проверьте введенные данные')
//         }
        
//     } catch (error) {
//         yield put(showError(error.message))
//     }
// }

export function* showRegistrationResult(action) {
    const {email, password, firstName, secondName} = action.payload;
    try {
        const res = yield call(serverRegister, email, password, firstName, secondName);
        if (res.success) {
            console.log('registration successful')
        }
        else {
            throw new Error(res.error);
        }
        
    } catch (error) {
        yield put(showError(error.message))        
    }
}

export function* registrationSaga() {
    yield takeEvery(REGISTRATION, showRegistrationResult);
}