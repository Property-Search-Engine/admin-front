import { combineReducers } from "redux";

import UserReducer from "./user/user-reducer";
import PropertiesReducer from "./properties/properties-reducer";

const rootReducer = combineReducers({
  user: UserReducer, // infoUser: {}
  properties: PropertiesReducer, // infoProperties: {}
});

export default rootReducer;



//Props --> React


//Properties --> Buildings