import { combineReducers } from "redux";

import UserReducer from "./user/user-reducer";
import PropertiesReducer from "./properties/properties-reducer";
import EmployeesReducer from "./employees/employees-reducer";

const rootReducer = combineReducers({
  userState: UserReducer, // infoUser: {}
  propertiesState: PropertiesReducer, // infoProperties: {}
  employeesState: EmployeesReducer, // infoEmployees: {}
});

export default rootReducer;

//Props --> React

//Properties --> Buildings
