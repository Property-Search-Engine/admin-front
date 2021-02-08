import PropertiesTypes from "./properties-types";
import { propertyEx, propertyEx2 } from "../../utils/mockOfProperties";
import { auth, firebaseStorage } from "../../firebase/firebase";
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
export const listProperties = (filters = { kind: "Home" }) => {
  return async function listPropertiesThunk(dispatch) {
    //We info and change state to have lastRequest as LIST_PROPERTIES
    dispatch(listPropertiesRequest());
    try {
      const currentUserToken = await auth.currentUser.getIdToken();
      const AuthHeader = authHeader(currentUserToken);
      //TODO Buil url with filters
      const res = await fetch(finalEndpoints.getPropertiesList + "?kind=Home", {
        headers: AuthHeader,
      });
      const list = await res.json();
      dispatch({
        type: PropertiesTypes.LIST_PROPERTIES_SUCCESS,
        payload: list.data,
      });
    } catch (error) {
      dispatch(listPropertiesError(error.message));
    }
  };
};
export const createPropertyRequest = () => ({
  type: PropertiesTypes.CREATE_PROPERTY_REQUEST,
});
export const createPropertyError = (message) => ({
  type: PropertiesTypes.CREATE_PROPERTY_ERROR,
  payload: message,
});
export const createPropertySuccess = (newProperty) => ({
  type: PropertiesTypes.CREATE_PROPERTY_SUCCESS,
  payload: newProperty,
});

//** Function/Action to pass to components in this case ModalFormComponent
export function createProperty(newPropertyObj) {
  return async function createPropertyThunk(dispatch) {
    dispatch(createPropertyRequest());

    try {
      //Storage in firebase to have urls back
      const arrayOfImagesUrl = [];
      const imagesBufferObj = newPropertyObj.images;
      const inputsToReorder = ["street", "number", "state", "country", "city"];
      Object.values(imagesBufferObj).forEach(async (file) => {
        const uploadTask = await firebaseStorage
          .ref(`/images/${file.name}`)
          .put(file);
        const imgUrl = await firebaseStorage
          .ref("images")
          .child(file.name)
          .getDownloadURL();
        arrayOfImagesUrl.push(imgUrl);
      });

      newPropertyObj.images = arrayOfImagesUrl;
      newPropertyObj.address = {};
      Object.entries(newPropertyObj).forEach(([inputName, inputValue]) => {
        if (inputsToReorder.some((input) => input === inputName)) {
          newPropertyObj.address[inputName] = inputValue;
          delete newPropertyObj[inputName];
        }
        if (inputName === "sold") {
          inputValue === "Available"
            ? (newPropertyObj.sold = false)
            : (newPropertyObj.sold = true);
        }
      });
      //Get firebase auth token with the started instance of firebase when logged in
      const currentUserToken = await auth.currentUser.getIdToken();

      //Connect with our server
      const formData = createFormData(newPropertyObj);
      const AuthHeader = authHeader(currentUserToken);
      console.log(newPropertyObj);
      var newProperty = await fetch(finalEndpoints.createProperty, {
        method: "POST",
        body: JSON.stringify(newPropertyObj),
        headers: AuthHeader,
      });
      console.log(newProperty);
      newProperty.ok
        ? dispatch(createPropertySuccess(newProperty.data))
        : dispatch(createPropertyError(newProperty.message));
    } catch (error) {
      dispatch(createPropertyError(newProperty.message));
    }
  };
}

export const updatePropertiesFilters = (filterName, filterValue) => {
  return async function createPropertyThunk(dispatch) {
    dispatch({
      type: PropertiesTypes.UPDATE_PROPERTIES_FILTERS,
      payload: [filterName, filterValue],
    });
  };
};
