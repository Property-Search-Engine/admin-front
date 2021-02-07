const BASE_URL = "http://localhost:5000";

const userEndpoint = BASE_URL + "/user";
const propertiesEndpoint = BASE_URL + "/properties";
export const finalEndpoints = {
  register: userEndpoint + "/register",
  login: userEndpoint + "/login",
  deleteEmployee: userEndpoint + "/",
  employeesList: userEndpoint + "/",
  getPropertiesList: propertiesEndpoint + "/",
  createProperty: propertiesEndpoint + "/", //* METHOD POST
  getPropertyById: propertiesEndpoint + "/", //* To add as param propertyId
};
