import EmployeesTypes from "./employees-types";

export const employeesInitialState = {
  employeesList: [],
  isFetchingEmployees: false,
  fetchingEmployeesError: null,

  isCreatingEmployee: false,
  creatingEmployeeError: null,
  createdEmployees: [],

  isDeletingEmployee: false,
  deletingEmployeeError: null,
  deletedEmployees: [],
};

const EmployeesReducer = (state = employeesInitialState, action) => {
  switch (action.type) {
    case EmployeesTypes.CREATE_EMPLOYEE_REQUEST: {
      return {
        ...state,
        isCreatingEmployee: true,
        creatingEmployeeError: null,
      };
    }
    case EmployeesTypes.CREATE_EMPLOYEE_ERROR: {
      return {
        ...state,
        isCreatingEmployee: false,
        creatingEmployeeError: action.payload,
      };
    }
    case EmployeesTypes.CREATE_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        isCreatingEmployee: false,
        employeesList: [...state.employeesList, action.payload],
        createdEmployees: [...state.createdEmployees, action.payload],
      };
    }
    case EmployeesTypes.DELETE_EMPLOYEE_REQUEST: {
      return {
        ...state,
        isDeletingEmployee: true,
        deletingEmployeeError: null,
      };
    }
    case EmployeesTypes.DELETE_EMPLOYEE_ERROR: {
      return {
        ...state,
        isDeletingEmployee: false,
        deletingEmployeeError: action.payload,
      };
    }
    case EmployeesTypes.DELETE_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        isCreatingEmployee: false,
        deletedEmployees: [...state.deletedEmployees, action.payload],
        employeesList: state.employeesList.filter(
          (emp) => emp._id !== action.payload._id
        ),
      };
    }
    case EmployeesTypes.EMPLOYEES_LIST_REQUEST: {
      return {
        ...state,
        isFetchingEmployees: true,
        deletingEmployeeError: null,
      };
    }
    case EmployeesTypes.EMPLOYEES_LIST_ERROR: {
      return {
        ...state,
        isFetchingEmployees: false,
        deletingEmployeeError: action.payload,
      };
    }
    case EmployeesTypes.EMPLOYEES_LIST_SUCCESS: {
      return {
        ...state,
        isFetchingEmployees: false,
        employeesList: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default EmployeesReducer;
