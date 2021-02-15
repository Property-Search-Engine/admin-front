import EmployeesTypes from "./employees-types";
import { auth } from "../../firebase/firebase";
import { finalEndpoints } from "../../utils/endpoints";
import { authHeader } from "../../utils/helpers";

export const createEmployeeRequest = () => ({
  type: EmployeesTypes.CREATE_EMPLOYEE_REQUEST,
});
export const createEmployeeError = (message) => ({
  type: EmployeesTypes.CREATE_EMPLOYEE_ERROR,
  payload: message,
});
export const createEmployeeSuccess = (newEmployee) => ({
  type: EmployeesTypes.CREATE_EMPLOYEE_SUCCESS,
  payload: newEmployee,
});
async function signUpInOwnServer(newEmployeeObj, currentEmployeesToken) {
  const AuthHeader = new Headers();
  AuthHeader.append("Authorization", "Bearer " + currentEmployeesToken);
  AuthHeader.append("Content-Type", "application/json");
  newEmployeeObj.phone = String(newEmployeeObj.phone);
  try {
    const res = await fetch(finalEndpoints.register, {
      method: "POST",
      body: JSON.stringify(newEmployeeObj),
      headers: AuthHeader,
    });
    const newEmployee = await res.json();
    return newEmployee.data;
  } catch (error) {
    return error.message;
  }
}

//** Function/Action to pass to components
export function createEmployee({
  firstname,
  lastname,
  phone,
  email,
  password,
}) {
  return async function createEmployeeThunk(dispatch) {
    dispatch(createEmployeeRequest());
    try {
      //Get firebase auth token with the started instance of firebase when logged in
      const currentUserToken = await auth.currentUser.getIdToken();

      //Connect with our server
      var newEmployee = await signUpInOwnServer(
        {
          firstname,
          lastname,
          phone,
          email,
          password,
        },
        currentUserToken
      );
      dispatch(createEmployeeSuccess(newEmployee));
    } catch (error) {
      dispatch(createEmployeeError(error.message));
    }
  };
}

export const deleteEmployeeRequest = () => ({
  type: EmployeesTypes.DELETE_EMPLOYEE_REQUEST,
});
export const deleteEmployeeError = (message) => ({
  type: EmployeesTypes.DELETE_EMPLOYEE_ERROR,
  payload: message,
});
export const deleteEmployeeSuccess = (newEmployee) => ({
  type: EmployeesTypes.DELETE_EMPLOYEE_SUCCESS,
  payload: newEmployee,
});

//** Function/Action to pass to components
export function deleteEmployee(employeeId) {
  return async function deleteEmployeeThunk(dispatch) {
    dispatch(deleteEmployeeRequest());

    try {
      //Get firebase auth token with the started instance of firebase when logged in
      const currentUserToken = await auth.currentUser.getIdToken();

      //Connect with our server
      const AuthHeader = authHeader(currentUserToken);

      var response = await fetch(finalEndpoints.deleteEmployee + employeeId, {
        method: "DELETE",
        headers: AuthHeader,
      });
      if (response.ok) {
        dispatch(deleteEmployeeSuccess());
      } else {
        dispatch(deleteEmployeeError("Response not ok deleted"));
      }
    } catch (error) {
      dispatch(deleteEmployeeError(error.message));
    }
  };
}

export const employeesListRequest = () => ({
  type: EmployeesTypes.EMPLOYEES_LIST_REQUEST,
});
export const employeesListError = (message) => ({
  type: EmployeesTypes.EMPLOYEES_LIST_ERROR,
  payload: message,
});
export const employeesListSuccess = (list) => ({
  type: EmployeesTypes.EMPLOYEES_LIST_SUCCESS,
  payload: list,
});

//** Function/Action to pass to components
export function fetchEmployeesList() {
  return async function fetchEmployeesListThunk(dispatch) {
    dispatch(employeesListRequest());

    try {
      //Get firebase auth token with the started instance of firebase when logged in
      const currentUserToken = await auth.currentUser.getIdToken();

      //Connect with our server
      const AuthHeader = authHeader(currentUserToken);

      const responseFromServer = await fetch(finalEndpoints.getEmployeesList, {
        method: "GET",
        headers: AuthHeader,
      });
      const employeeList = await responseFromServer.json();

      dispatch(employeesListSuccess(employeeList.data));
    } catch (error) {
      dispatch(employeesListSuccess(error.message));
    }
  };
}
