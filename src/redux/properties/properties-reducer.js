import PropertiesTypes from "./properties-types";

export const PropertiesInitialState = {
  lastRequest: null,
  error: null,
  success: null,
  lastErrorMessage: null,
  singlePropertyDetails: null,
  propertiesList: null,
  lastCreatedProperty: null,
  lastEditedProperty: null,
  userStatistics: null,
  loading: false,
};

//@param state is store state in every moment
//@param action equals to the object you insert as argument in dispath() function
const PropertiesReducer = (state = PropertiesInitialState, action) => {
  switch (action.type) {
    case PropertiesTypes.LIST_PROPERTIES_REQUEST:
    case PropertiesTypes.CREATE_PROPERTY_REQUEST:
    case PropertiesTypes.EDIT_PROPERTY_REQUEST:
    case PropertiesTypes.DELETE_PROPERTY_REQUEST:
    case PropertiesTypes.DETAIL_PROPERTY_REQUEST: {
      return {
        ...state,
        lastRequest: action.type,
        loading: true,
      };
    }
    case PropertiesTypes.LIST_PROPERTIES_ERROR:
    case PropertiesTypes.CREATE_PROPERTY_ERROR:
    case PropertiesTypes.EDIT_PROPERTY_ERROR:
    case PropertiesTypes.DELETE_PROPERTY_ERROR:
    case PropertiesTypes.DETAIL_PROPERTY_ERROR: {
      return {
        ...state,
        error: "Failed " + state.lastRequest,
        loading: false,
        lastErrorMessage: action.payload,
      };
    }
    case PropertiesTypes.LIST_PROPERTIES_SUCCESS: {
      return {
        ...state,
        success: state.lastRequest + " was successful",
        loading: false,
        propertiesList: action.payload, //action.payload is list of properties
      };
    }
    case PropertiesTypes.CREATE_PROPERTY_SUCCESS: {
      return {
        ...state,
        lastCreatedProperty: action.payload,
      };
    }
    case PropertiesTypes.EDIT_PROPERTY_SUCCESS: {
      return {
        ...state,
        success: state.lastRequest + " was successful",
        lastEditedProperty: action.payload,
      };
    }
    case PropertiesTypes.DETAIL_PROPERTY_SUCCESS: {
      return {
        ...state,
        singlePropertyDetails: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default PropertiesReducer;
