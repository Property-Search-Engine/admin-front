import UserTypes from "./user-types";
import {
  singInWithGoogle,
  singInWithEmailAndPassword,
  firebaseSignout,
  auth,
} from "../../firebase/firebase";
import { finalEndpoints } from "../../utils/endpoints";

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

export const loginSuccess = ({ firstname, lastname, email, phone }, token) => ({
  type: UserTypes.LOGIN_SUCCESS,
  payload: {
    firstname,
    lastname,
    email,
    phone,
    token,
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

export function login(email, password) {
  return async function loginThunk(dispatch) {
    dispatch(loginRequest());

    try {
      var res;
      if (email && password) {
        res = await singInWithEmailAndPassword(email, password);
      } else {
        res = await singInWithGoogle();
      }
      //Use auth class from firebase to get token
      const token = await auth.currentUser.getIdToken();

      const loggedInUser = await gatherUserInfoByToken(token);
      dispatch(loginSuccess(loggedInUser, token));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
}
async function gatherUserInfoByToken(token) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  try {
    const res = await fetch(finalEndpoints.login, {
      method: "POST",
      headers: new Headers({ Authorization: "Bearer " + token }),
    });
    const user = await res.json();
    return user.data;
  } catch (error) {
    return error.message;
  }
}
export function signout() {
  return async function logoutThunk(dispatch) {
    dispatch(signoutRequest());
    try {
      await firebaseSignout();
      dispatch(signoutSuccess());
    } catch (error) {
      dispatch(signoutError("Missing auth token"));
    }
  };
}
