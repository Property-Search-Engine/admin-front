import PropertiesTypes from "./properties-types";
import { propertyEx, propertyEx2 } from "../../utils/mockOfProperties";
/* export const resetStoreAndLogOut = () => ({
  type: UserTypes.RESET_STORE_AND_LOG_OUT,
});
 */

export const propertyDetails = (id) => {
  try {
    const property = getPropertyById(id);
    if (property !== []) {
      return {
        type: PropertiesTypes.DETAIL_PROPERTY_SUCCESS,
        payload: property[0],
      };
    } else {
      propertyDetailsError("Not found property");
    }
  } catch (error) {
    propertyDetailsError(error.message);
  }
};
function getPropertyById(id) {
  const properties = [propertyEx, propertyEx2];
  return properties.filter((property) => property._id === id);
}
export const propertyDetailsError = (message) => ({
  type: PropertiesTypes.EDIT_PROPERTY_ERROR,
  payload: message,
});
export const propertyDetailsRequest = () => {
  return { type: PropertiesTypes.EDIT_PROPERTY_REQUEST };
};

export const listPropertiesError = (message) => ({
  type: PropertiesTypes.LIST_PROPERTIES_ERROR,
  payload: message,
});
export const listPropertiesRequest = () => {
  return { type: PropertiesTypes.LIST_PROPERTIES_REQUEST };
};
export const listProperties = (filters = "", token = "") => {
  return async function listPropertiesThunk(dispatch) {
    //We info and change state to have lastRequest as LIST_PROPERTIES
    dispatch(listPropertiesRequest());
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const list = await res.json();
      /*  const myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + token);
            const list = await fetch('', {
                headers: myHeaders,
              }); */
      dispatch({
        type: PropertiesTypes.LIST_PROPERTIES_SUCCESS,
        payload: [propertyEx, propertyEx2],
      });
    } catch (error) {
      dispatch(listPropertiesError(error.message));
    }
  };
};
