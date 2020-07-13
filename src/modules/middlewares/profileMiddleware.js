import {SAVE_PROFILE, LOAD_PROFILE, saveCardToStore} from '../actions';
import {serverProfile} from '../api';

export const profileMiddleware = (store) => (next) => async (action) => {
  if (action.type === SAVE_PROFILE) {
    const {number, date, name, cvc, token} = action.payload;
    const success = await serverProfile(number, date, name, cvc, token);
    if (success) {
      store.dispatch(saveCardToStore(number, date, name, cvc, token));
      const cardData = {number, date, name, cvc, token};
      localStorage.setItem('cardData', JSON.stringify(cardData));      
    }
  }
  if (action.type === LOAD_PROFILE) {
    if (localStorage.getItem('cardData')) {
      const {number, date, name, cvc, token} = JSON.parse(localStorage.getItem('cardData'));
      store.dispatch(saveCardToStore(number, date, name, cvc, token));
    }
  } else {
    next(action);
  }
}