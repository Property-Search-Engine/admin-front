import EmployeesTypes from "./employees-types";
import {
  singInWithGoogle,
  singInWithEmailAndPassword,
  auth,
} from "../../firebase/firebase";
import { finalEndpoints } from "../../utils/endpoints";
import { createFormData, authHeader } from "../../utils/helpers";

/* export const resetStoreAndLogOut = () => ({
  type: EmployeesTypes.RESET_STORE_AND_LOG_OUT,
});
 */
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
async function signUpInOwnServer(newEmployee, currentEmployeesToken) {
  const formData = createFormData(newEmployee);
  const AuthHeader = new Headers();
  AuthHeader.append("Authorization", "Bearer " + currentEmployeesToken);

  try {
    const res = await fetch(finalEndpoints.register, {
      method: "POST",
      body: formData,
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
      //Firebase signUp
      if (email && password) {
        await singInWithEmailAndPassword(email, password);
      } else {
        await singInWithGoogle();
      }

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
export function deleteEmployee(employeeEmail) {
  return async function deleteEmployeeThunk(dispatch) {
    dispatch(deleteEmployeeRequest());

    try {
      //Get firebase auth token with the started instance of firebase when logged in
      const currentUserToken = await auth.currentUser.getIdToken();

      //Connect with our server
      const formData = createFormData(employeeEmail);
      const AuthHeader = authHeader(currentUserToken);

      var deletedEmployee = await fetch(finalEndpoints.deleteEmployee, {
        method: "DELETE",
        body: formData,
        headers: AuthHeader,
      });

      dispatch(deleteEmployeeSuccess(deletedEmployee.data));
    } catch (error) {
      dispatch(deleteEmployeeError(error.message));
    }
  };
}

export const employeesListRequest = () => ({
  type: EmployeesTypes.DELETE_EMPLOYEE_REQUEST,
});
export const employeesListError = (message) => ({
  type: EmployeesTypes.DELETE_EMPLOYEE_ERROR,
  payload: message,
});
export const employeesListSuccess = (list) => ({
  type: EmployeesTypes.DELETE_EMPLOYEE_SUCCESS,
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

      var employeesList = await fetch(finalEndpoints.employeesList, {
        method: "GET",
        headers: AuthHeader,
      });

      dispatch(deleteEmployeeSuccess(employeesList.data));
    } catch (error) {
      dispatch(employeesListSuccess(error.message));
    }
  };
}
