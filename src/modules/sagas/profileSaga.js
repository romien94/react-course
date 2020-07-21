import { takeEvery, call, put } from "redux-saga/effects";
import {
  LOAD_PROFILE,
  SAVE_PROFILE,
  loadProfile,
  saveCardToStore,
} from "../actions";
import { serverProfile, loadServerProfile } from "../api";

export function* loadProfileSaga(action) {
  const { token } = action.payload;
  const success = yield call(loadServerProfile, token);

  if (success) {
    if (localStorage.getItem("cardData")) {
      const { number, date, name, cvc, token } = JSON.parse(
        localStorage.getItem("cardData")
      );
      const cardNumber =
        number === success.cardNumber ? number : success.cardNumber;
      const cardDate = date === success.expiryDate ? date : success.expiryDate;
      const cardName = name === success.cardName ? name : success.cardName;
      const cardCvc = cvc === success.cvc ? cvc : success.cvc;
      const registrationToken = token === success.id? token: success.id;
      const cardData = { cardNumber, cardDate, cardName, cardCvc, registrationToken };

      localStorage.setItem("cardData", JSON.stringify(cardData));
      yield put(
        saveCardToStore(cardNumber, cardDate, cardName, cardCvc, registrationToken)
      );
    } else {
      const cardNumber = success.cardNumber;
      const cardDate = success.expiryDate;
      const cardName = success.cardName;
      const cardCvc = success.cvc;
      const registrationToken = success.id;
      const cardData = { cardNumber, cardDate, cardName, cardCvc, registrationToken };

      localStorage.setItem("cardData", JSON.stringify(cardData));
      yield put(
        saveCardToStore(cardNumber, cardDate, cardName, cardCvc, registrationToken)
      );
    }
  }
}

export function* saveProfileSaga(action) {
    // console.log(action);
  const { number, date, name, cvc, token } = action.payload;
  try {
    const result = yield call(serverProfile, number, date, name, cvc, token);
    if (result.success) {
      console.log('successful');
    } else {
      throw new Error('saving failed')
    }
  } catch (error) {
    console.log('error');
    
  }
}

export function* profileSaga() {
  yield takeEvery(LOAD_PROFILE, loadProfileSaga);
  yield takeEvery(SAVE_PROFILE, saveProfileSaga);
}