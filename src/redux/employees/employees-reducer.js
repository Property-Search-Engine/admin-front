import EmployeesTypes from "./employees-types";

export const employeesInitialState = {
  employeeList: [],
  isFetchingEmployees: false,
  fetchingEmployeesError: null,

  isCreatingEmployee: false,
  creatingEmployeeError: null,
  createdEmployees: [],

  isDeletingEmployee: false,
  deletingEmployeeError: null,
  deletedSuccess: false,
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
        employeeList: action.payload,
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
        deletedSuccess: false,
        isDeletingEmployee: false,
        deletingEmployeeError: action.payload,
      };
    }
    case EmployeesTypes.DELETE_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        isCreatingEmployee: false,
        deletedSuccess: true,
        deletedEmployees: [...state.deletedEmployees, action.payload],
        employeeList: [
          ...state.employeeList.filter((emp) => emp._id !== action.payload._id),
        ],
      };
    }
    case EmployeesTypes.EMPLOYEES_LIST_REQUEST: {
      return {
        ...state,
        deletedSuccess: false,
        isFetchingEmployees: true,
        fetchingEmployeesError: null,
      };
    }
    case EmployeesTypes.EMPLOYEES_LIST_ERROR: {
      return {
        ...state,
        isFetchingEmployees: false,
        fetchingEmployeesError: action.payload,
      };
    }
    case EmployeesTypes.EMPLOYEES_LIST_SUCCESS: {
      return {
        ...state,
        isFetchingEmployees: false,
        fetchingEmployeesError: null,
        employeeList: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default EmployeesReducer;
