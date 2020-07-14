import { SAVE_PROFILE, LOAD_PROFILE, saveCardToStore } from "../actions";
import { serverProfile, loadServerProfile } from "../api";

export const profileMiddleware = (store) => (next) => async (action) => {
  if (action.type === SAVE_PROFILE) {
    const { number, date, name, cvc, token } = action.payload;
    const success = await serverProfile(number, date, name, cvc, token);
    if (success) {
      store.dispatch(saveCardToStore(number, date, name, cvc, token));
      const cardData = { number, date, name, cvc, token };
      localStorage.setItem("cardData", JSON.stringify(cardData));
    }
  }
  if (action.type === LOAD_PROFILE) {
    const success = await loadServerProfile("AUTH_TOKEN");
    if (localStorage.getItem("cardData")) {
      const { number, date, name, cvc, token } = JSON.parse(
        localStorage.getItem("cardData")
      );
      const success = await loadServerProfile("AUTH_TOKEN");
      if (success) {
        const cardNumber =
          number === success.cardNumber ? number : success.cardNumber;
        const cardDate =
          date === success.expiryDate ? date : success.expiryDate;
        const cardName = name === success.cardName ? name : success.cardName;
        const cardCvc = cvc === success.cvc ? cvc : success.cvc;
        const cardData = { cardNumber, cardDate, cardName, cardCvc };

        localStorage.setItem("cardData", JSON.stringify(cardData));
        store.dispatch(
          saveCardToStore(cardNumber, cardDate, cardName, cardCvc, token)
        );
      }
    } else {
      const success = await loadServerProfile("AUTH_TOKEN");
      if (success) {
        const cardNumber = success.cardNumber;
        const cardDate = success.expiryDate;
        const cardName = success.cardName;
        const cardCvc = success.cvc;
        const token = "AUTH_TOKEN";
        const cardData = { cardNumber, cardDate, cardName, cardCvc };

        localStorage.setItem("cardData", JSON.stringify(cardData));
        store.dispatch(
          saveCardToStore(cardNumber, cardDate, cardName, cardCvc, token)
        );
      }
    }
  } else {
    next(action);
  }
};
