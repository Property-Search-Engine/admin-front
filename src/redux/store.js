import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/* import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; */

import rootReducer from "./root-reducer";

/* const persistConfig = {
  key: "mern-seed-client",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); */

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(
  /* persistedReducer, */
  rootReducer, // {infoUser: {}, infoProperties: {currentProperty:{}, lastListing:{}}}
  composeWithDevTools(applyMiddleware(...middleware))
);

/* export const persistor = persistStore(store); */

export default store;
