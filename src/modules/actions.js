export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOAD_PROFILE = "LOAD_PROFILE";
export const SAVE_PROFILE = "SAVE_PROFILE";
export const SAVE_TO_STORE = "SAVE_TO_LOCAL_STORAGE";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

export const loadProfile = (token) => ({
  type: LOAD_PROFILE,
  payload: token
}) 

export const saveProfile = (number, date, name, cvc, token) => ({
  type: SAVE_PROFILE,
  payload: { number, date, name, cvc, token },
});

export const saveCardToStore = (number, date, name, cvc, token) => ({
  type: SAVE_TO_STORE,
  payload: { number, date, name, cvc, token },
});
