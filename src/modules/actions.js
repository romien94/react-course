export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOAD_PROFILE = "LOAD_PROFILE";
export const SAVE_PROFILE = "SAVE_PROFILE";
export const SAVE_TO_STORE = "SAVE_TO_STORE";
export const ERROR = "ERROR";
export const REGISTRATION = "REGISTRATION";
export const FETCH_ADDRESSES = "FETCH_ADDRESSES";
export const GET_ADDRESSES = "GET_ADDRESSES";
export const SEND_ROUTE = "SEND_ROUTE";
export const SAVE_COORDS = "SAVE_COORDS";

export const logIn = (token) => ({ type: LOG_IN, payload: token });
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

export const showError = (error) => ({
  type: ERROR,
  payload: error
});

export const registerUser = (email, password, firstName, secondName) => ({
  type: REGISTRATION,
  payload: {email, password, firstName, secondName}
})

export const getAddresses = (addresses) => ({
  type: GET_ADDRESSES,
  payload: addresses
});

export const fetchAddresses = () => ({
  type: FETCH_ADDRESSES,
})

export const sendRoute = (address1, address2) => ({
  type: SEND_ROUTE,
  payload: {address1, address2}
})

export const saveCoords = (coords) => ({
  type: SAVE_COORDS,
  payload: coords
})