import { AUTHENTICATE, logIn, saveToken, showError} from "../actions";
import { serverLogIn } from "../api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    try {
      const success = await serverLogIn(email, password);
      if (success) {
        const token = success.token;
        store.dispatch(logIn(token));
      }
      else {
        throw new Error('Login failed. Please, enter valid credentials')
      }
    } catch (error) {
      store.dispatch(showError(error))
    }
    // try {
    //   const success = await serverLogIn(email, password);
    //   if(success) {
    //     const token = success.token;
    //     return store.dispatch(logIn(token));
    //   }
    //   else {
    //     throw new Error('Login failed')
    //   }
    // } catch (error) {
    //   console.log('error happened');
    //   store.dispatch(showError(error));      
    // } 
  } else {
    next(action);
  }
};