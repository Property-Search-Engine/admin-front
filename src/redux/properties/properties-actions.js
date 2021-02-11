import PropertiesTypes from "./properties-types";
import { auth, firebaseStorage } from "../../firebase/firebase";
import { finalEndpoints } from "../../utils/endpoints";
import { authHeader } from "../../utils/helpers";

//======================================
//===== Fetching list of properties
//======================================
export const listPropertiesRequest = () => {
  return { type: PropertiesTypes.LIST_PROPERTIES_REQUEST };
};
export const listPropertiesError = (message) => ({
  type: PropertiesTypes.LIST_PROPERTIES_ERROR,
  payload: message,
});
//* Action passed to component
export const listProperties = (filters) => {
  return async function listPropertiesThunk(dispatch) {
    //We info and change state to have lastRequest as LIST_PROPERTIES
    dispatch(listPropertiesRequest());
    try {
      const currentUserToken = await auth.currentUser.getIdToken();
      const AuthHeader = authHeader(currentUserToken);
      //TODO Buil url with filters
      if (filters.kind === "") filters.kind = "Home";
      if (filters.filters === []) filters.filters = "[]";
      console.log(filters);
      /* const formattedFilters = filtersToQueryParamaFormatter(filters); */
      const urlParams = new URLSearchParams(filters);
      const qs = Object.keys(filters)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`
        )
        .join("&");
      console.log(urlParams);
      console.log(finalEndpoints.getPropertiesList + "?sold=true&" + urlParams);
      console.log(finalEndpoints.getPropertiesList + "?sold=true&" + qs);
      //trim filter
      //if penthouse -> pentHouse | flat/Deparment -> flatDepartment

      /* function filtersToQueryParamaFormatter(filters) {
        return Object.entries(filters).map(([key, value]) => {
          switch (key) {
            case "homeType": {
              return value.map((homeType) =>
                homeType === "flat/Apatment" ? "flatApartment" : homeType
              );
            }
            case "equipment": {
              return "&equipment=" + value;
            }
            case "bedRoom": {
            }
            case "bathRoom": {
            }
            case "buildingUse": {
            }
            case "kind": {
            }
            case "sold": {
            }
            case "kind": {
            }
            case value:
            case value:
              break;

            default:
              break;
          }
        });
      }
 */
      const res = await fetch(finalEndpoints.getPropertiesList + "?kind=Home", {
        headers: AuthHeader,
      });
      const list = await res.json();
      console.log(list);
      if (list.data === null) {
        dispatch(
          listPropertiesError(
            "Null data fetching list of properties: " + list.error[0].message
          )
        );
      } else {
        dispatch({
          type: PropertiesTypes.LIST_PROPERTIES_SUCCESS,
          payload: list.data,
        });
      }
    } catch (error) {
      dispatch(listPropertiesError(error.message));
    }
  };
};

//======================================
//========== Update filters
//======================================
export const updatePropertiesFilters = (filterName, filterValue) => {
  return {
    type: PropertiesTypes.UPDATE_PROPERTIES_FILTERS,
    payload: [filterName, filterValue],
  };
};
//======================================
//===== Fetching property details
//======================================
export const propertyDetailsError = (message) => ({
  type: PropertiesTypes.DETAIL_PROPERTY_ERROR,
  payload: message,
});
export const propertyDetailsRequest = () => {
  return { type: PropertiesTypes.DETAIL_PROPERTY_REQUEST };
};
//* Action passed to component
export const propertyDetails = (id) => {
  return async function propertyDetailsThunk(dispatch) {
    dispatch(propertyDetailsRequest());
    try {
      const property = await getPropertyById(id);
      if (property) {
        dispatch({
          type: PropertiesTypes.DETAIL_PROPERTY_SUCCESS,
          payload: property,
        });
      } else {
        dispatch(propertyDetailsError("Not found property"));
      }
    } catch (error) {
      dispatch(propertyDetailsError(error.message));
    }
  };
};

async function getPropertyById(id) {
  try {
    const currentUserToken = await auth.currentUser.getIdToken();
    const AuthHeader = authHeader(currentUserToken);
    const responseOfOwnServer = await fetch(
      finalEndpoints.getPropertyById + id,
      {
        headers: AuthHeader,
      }
    );
    const property = await responseOfOwnServer.json();
    if (property.data) {
      return property.data;
    } else {
      throw new Error(
        "Request fetching property by Id not ok. Not data object."
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
//======================================
//========= Create property
//======================================
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
      const imagesBufferObj = newPropertyObj.images;
      const inputsToReorder = ["street", "number", "state", "country", "city"];

      const arrayOfImagesUrl = Object.values(imagesBufferObj).map(
        async (file) => {
          const snapshot = await firebaseStorage
            .ref(`/images/${file.name}`)
            .put(file);
          const url = await snapshot.ref.getDownloadURL();
          return url;
        }
      );
      newPropertyObj.images = await Promise.all(arrayOfImagesUrl);
      newPropertyObj.address = {};
      Object.entries(newPropertyObj).forEach(([inputName, inputValue]) => {
        if (inputsToReorder.some((input) => input === inputName)) {
          newPropertyObj.address[inputName] = inputValue;
          delete newPropertyObj[inputName];
        }
        if (inputName === "sold") {
          inputValue === "available"
            ? (newPropertyObj.sold = false)
            : (newPropertyObj.sold = true);
        }
      });
      //Get firebase auth token with the started instance of firebase when logged in
      const currentUserToken = await auth.currentUser.getIdToken();
      //Connect with our server
      const AuthHeader = authHeader(currentUserToken);
      const responseFromOwnServer = await fetch(finalEndpoints.createProperty, {
        method: "POST",
        body: JSON.stringify(newPropertyObj),
        headers: AuthHeader,
      });
      if (responseFromOwnServer.ok) {
        const newProperty = await responseFromOwnServer.json();
        dispatch(createPropertySuccess(newProperty.data));
      } else {
        dispatch(createPropertyError(responseFromOwnServer.message));
      }
    } catch (error) {
      dispatch(createPropertyError(error.message));
    }
  };
}

//======================================
//========= Delete property
//======================================
export const deletePropertyRequest = () => {
  return { type: PropertiesTypes.DELETE_PROPERTY_REQUEST };
};
export const deletePropertyError = (message) => ({
  type: PropertiesTypes.DELETE_PROPERTY_ERROR,
  payload: message,
});
export function deleteProperty(id) {
  return async function deletePropertyThunk(dispatch) {
    dispatch(deletePropertyRequest());
    try {
      const currentUserToken = await auth.currentUser.getIdToken();
      const AuthHeader = authHeader(currentUserToken);
      const responseOfOwnServer = await fetch(
        finalEndpoints.deleteProperty + id,
        {
          method: "DELETE",
          headers: AuthHeader,
        }
      );
      const deletedProperty = await responseOfOwnServer.json();
      return dispatch({
        type: PropertiesTypes.DELETE_PROPERTY_SUCCESS,
        payload: deletedProperty,
      });
    } catch (error) {
      dispatch(deletePropertyError(error.message));
    }
  };
}

//======================================
//========= Delete property
//======================================
export const markAsSoldRequest = () => {
  return { type: PropertiesTypes.MARK_AS_SOLD_REQUEST };
};
export const markAsSoldError = (message) => ({
  type: PropertiesTypes.MARK_AS_SOLD_ERROR,
  payload: message,
});
export function markAsSold(id) {
  return async function markAsSold(dispatch) {
    dispatch(markAsSoldRequest());
    try {
      const currentUserToken = await auth.currentUser.getIdToken();
      const AuthHeader = authHeader(currentUserToken);
      const responseOfOwnServer = await fetch(
        finalEndpoints.markPropertyAsSold + id + "/sold",
        {
          method: "PATCH",
          headers: AuthHeader,
        }
      );
      const markedPropertyResponse = await responseOfOwnServer.json();
      return dispatch({
        type: PropertiesTypes.DELETE_PROPERTY_SUCCESS,
        payload: markedPropertyResponse,
      });
    } catch (error) {
      dispatch(markAsSoldError(error.message));
    }
  };
}
