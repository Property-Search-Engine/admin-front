export const BASE_URL = "http://localhost:5000";

export const userEndpoint = "/user";

export const finalEndpoints = {
  register: BASE_URL + userEndpoint + "/register",
  login: BASE_URL + userEndpoint + "/login",
  deleteEmployee: "/",
  employeesList: "/",
};
