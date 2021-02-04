import UserTypes from "./user-types";
import {
  singInWithGoogle,
  singInWithEmailAndPassword,
  signOut,
} from "../../firebase/firebase";

/* export const resetStoreAndLogOut = () => ({
  type: UserTypes.RESET_STORE_AND_LOG_OUT,
});
 */
export const loginRequest = () => ({
  type: UserTypes.LOGIN_REQUEST,
});

export const loginError = (message) => ({
  type: UserTypes.LOGIN_ERROR,
  payload: message,
});

export const loginSuccess = ({ name, lastname, email, token }) => ({
  type: UserTypes.LOGIN_SUCCESS,
  payload: {
    name: name,
    lastname: lastname,
    email: email,
    token: token,
  },
});

export const signUpRequest = () => ({
  type: UserTypes.SIGNUP_REQUEST,
});

export const signUpError = (message) => ({
  type: UserTypes.SIGNUP_ERROR,
  payload: message,
});

export const signupSuccess = ({ name, lastname, email, token }) => ({
  type: UserTypes.SIGNUP_SUCCESS,
  payload: {
    name: name,
    lastname: lastname,
    email: email,
    token: token,
  },
});

export const signoutRequest = () => ({
  type: UserTypes.SIGNOUT_REQUEST,
});

export const signoutError = (message) => ({
  type: UserTypes.SIGNOUT_REQUEST,
  payload: message,
});

export const signoutSuccess = () => ({
  type: UserTypes.SIGNOUT_SUCCESS,
});

export function signUp({ name, lastname, phone, email, password }) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest());

    //Firebase signUp
    let res;
    if (email && password) {
      res = await singInWithEmailAndPassword(email, password);
    } else {
      res = await singInWithGoogle();
    }

    //Connect with our server
    if (res.ok) {
      try {
        // var newUser = await signUpInOwnServer( name, lastname, phone, email, password , res);
        //new User --> { name, lastname, email, token }
        // dispatch(signupSuccess(newUser));
      } catch (error) {
        dispatch(signUpError(error.message));
      }
    } else {
      dispatch(signUpError(res.message));
    }
  };
}

export function login({ email, password }) {
  return async function loginThunk(dispatch) {
    dispatch(loginRequest());

    try {
      var token;
      if (email && password) {
        token = await singInWithEmailAndPassword(email, password);
      } else {
        token = await singInWithGoogle();
      }

      // const userCredentials =  await gatherInfoByToken(token);
      // dispatch(loginSuccess(userCredentials) );
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
}

export function signout() {
  return async function logoutThunk(dispatch) {
    dispatch(signoutRequest());
    try {
      const res = await signOut();
      dispatch(signoutSuccess());
    } catch (error) {
      dispatch(signoutError("Missing auth token"));
    }
  };
}
