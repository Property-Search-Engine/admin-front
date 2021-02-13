const BASE_URL = "https://property-search-admin-server.herokuapp.com";

const userEndpoint = BASE_URL + "/user";
const propertiesEndpoint = BASE_URL + "/properties";
export const finalEndpoints = {
  register: userEndpoint + "/register",
  login: userEndpoint + "/login",
  deleteEmployee: userEndpoint + "/",
  getEmployeesList: userEndpoint + "/employees",
  getPropertiesList: propertiesEndpoint + "/",
  deleteProperty: propertiesEndpoint + "/", //* DELETE WITH ID Param
  createProperty: propertiesEndpoint + "/", //* METHOD POST
  getPropertyById: propertiesEndpoint + "/", //* To add as param propertyId
  markPropertyAsSold: propertiesEndpoint + "/", //* Add property Id and then /sold
};
