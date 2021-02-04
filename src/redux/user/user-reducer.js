import UserTypes from "./user-types";

export const UserInitialState = {
  isLoggingIn: false,
  loginError: null,
  isAuthenticated: false,
  isSigningUp: false,
  signUpError: null,
  isSigningOut: false,
  signOutError: null,
  currentUser: {
    name: null,
    lastname: null,
    email: null,
    token: null,
  },
};

const UserReducer = (state = UserInitialState, action) => {
  switch (action.type) {
    case UserTypes.SIGNUP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        signUpError: null,
      };
    }
    case UserTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isSigningUp: false,
        loginError: null,
        currentUser: {
          name: action.payload.name,
          lastname: action.payload.lastname,
          email: action.payload.email,
          token: action.payload.token,
        },
      };
    }
    case UserTypes.SIGNUP_ERROR: {
      return {
        ...state,
        isSigningUp: false,
        signUpError: action.payload,
      };
    }
    case UserTypes.LOGIN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
        loginError: null,
      };
    }
    case UserTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isLoggingIn: false,
        loginError: null,
        currentUser: {
          name: action.payload.name,
          lastname: action.payload.lastname,
          email: action.payload.email,
          token: action.payload.token,
        },
      };
    }
    case UserTypes.LOGIN_ERROR: {
      return {
        ...state,
        isLoggingIn: false,
        loginError: action.payload,
      };
    }
    case UserTypes.SIGNOUT_REQUEST: {
      return {
        ...state,
        isSigningOut: true,
        signOutError: null,
      };
    }
    case UserTypes.SIGNOUT_ERROR: {
      return {
        ...state,
        isSigningOut: false,
        signOutError: action.payload,
      };
    }
    case UserTypes.SIGNOUT_SUCCESS: {
      return {
        ...state,
        isSigningOut: false,
        signOutError: null,
        isAuthenticated: false,
        currentUser: {
          name: null,
          lastname: null,
          email: null,
          token: null,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
