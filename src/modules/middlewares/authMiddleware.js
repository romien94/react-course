import { AUTHENTICATE, logIn } from "../actions";
import { serverLogIn } from "../api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    try {
      const success = await serverLogIn(email, password);
      if(success) {
        store.dispatch(logIn());
        // store.dispatch(error()) 
      }    
    } catch (error) {
      // store.dispatch(error())      
    }    

  } else {
    next(action);
  }
};