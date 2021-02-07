import PropertiesTypes from "./properties-types";
import { propertyEx, propertyEx2 } from "../../utils/mockOfProperties";
import { auth } from "../../firebase/firebase";
import { finalEndpoints } from "../../utils/endpoints";
import { authHeader, createFormData } from "../../utils/helpers";

export const propertyDetailsError = (message) => ({
  type: PropertiesTypes.DETAIL_PROPERTY_ERROR,
  payload: message,
});
export const propertyDetailsRequest = () => {
  return { type: PropertiesTypes.DETAIL_PROPERTY_REQUEST };
};
//* Action passed to component
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
//TODO: This has to be our own server fetch to propertyDetail endopoint
function getPropertyById(id) {
  const properties = [propertyEx, propertyEx2];
  return properties.filter((property) => property._id === id);
}

export const listPropertiesRequest = () => {
  return { type: PropertiesTypes.LIST_PROPERTIES_REQUEST };
};
export const listPropertiesError = (message) => ({
  type: PropertiesTypes.LIST_PROPERTIES_ERROR,
  payload: message,
});
//* Action passed to component
export const listProperties = (filters = { kind: "home" }) => {
  return async function listPropertiesThunk(dispatch) {
    //We info and change state to have lastRequest as LIST_PROPERTIES
    dispatch(listPropertiesRequest());
    try {
      const currentUserToken = await auth.currentUser.getIdToken();
      const AuthHeader = authHeader(currentUserToken);
      const formData = createFormData(filters);
      //TODO fetch to properties by filters get endpoint
      const res = await fetch(finalEndpoints.getPropertiesList, {
        headers: AuthHeader,
        body: formData,
      });
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
