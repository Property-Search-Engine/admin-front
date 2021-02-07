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
      });
      /* const list = await res.json(); */
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

export const createPropertyRequest = () => ({
  type: PropertiesTypes.CREATE_PROPERTY_REQUEST,
});
export const createPropertyError = (message) => ({
  type: PropertiesTypes.DELETE_PROPERTY_ERROR,
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
      const imagesBufferObj = newPropertyObj.images;
      const arrayOfImagesUrl = [];
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
      newPropertyObj.surface = newPropertyObj.m2;
      //Get firebase auth token with the started instance of firebase when logged in
      const currentUserToken = await auth.currentUser.getIdToken();

      //Connect with our server
      const formData = createFormData(newPropertyObj);
      const AuthHeader = authHeader(currentUserToken);

      var newProperty = await fetch(finalEndpoints.createProperty, {
        method: "POST",
        body: formData,
        headers: AuthHeader,
      });

      dispatch(createPropertySuccess(newProperty.data));
    } catch (error) {
      dispatch(createPropertyError(error.message));
    }
  };
}
