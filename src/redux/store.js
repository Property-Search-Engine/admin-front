import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(
  rootReducer, // {infoUser: {}, infoProperties: {currentProperty:{}, lastListing:{}}}
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
