import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE, logIn, showError } from "../actions";
import { serverLogIn } from "../api";

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  try {
    const res = yield call(serverLogIn, email, password);
    if (res.success) {
      yield put(logIn(res.token));
    } else {
      throw new Error("Неудалось войти. Проверьте введенные данные");
    }
  } catch (error) {
    yield put(showError(error.message));
  }
}
export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}
