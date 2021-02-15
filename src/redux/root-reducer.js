import { combineReducers } from "redux";

import UserReducer from "./user/user-reducer";
import PropertiesReducer from "./properties/properties-reducer";
import EmployeesReducer from "./employees/employees-reducer";
import BookingsReducer from "./bookings/bookings-reducer";

const rootReducer = combineReducers({
  userState: UserReducer, // infoUser: {}
  propertiesState: PropertiesReducer, // infoProperties: {}
  employeesState: EmployeesReducer, // infoEmployees: {}
  bookingsState: BookingsReducer,
});

export default rootReducer;
