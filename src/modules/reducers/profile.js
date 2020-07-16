import { SAVE_TO_STORE, ERROR } from "../actions";

const initialState = {
  number: "",
  date: "",
  name: "",
  cvc: "",
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TO_STORE:
      return action.payload;
    case ERROR:
      return action.payload;
    default:
      return state;
  }
};
