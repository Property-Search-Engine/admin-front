import PropertiesTypes from "./properties-types";

export const PropertiesInitialState = {
  lastRequest: null,
  error: null,
  success: null,
  lastRequestErrorMessage: null,
  singlePropertyDetails: null,
  propertiesList: null,
  createdPropertiesInSession: [],
  lastEditedProperty: null,
  userStatistics: null,
  loading: false,
  filters: {
    kind: "",
    homeType: [],
    bedRooms: [],
    bathRooms: [],
    equipment: "null",
    publication: "null",
    filters: [],
    condition: [],
    range: { max: 0, min: 0 },
  },
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
        lastRequestErrorMessage: action.payload,
        success: null,
      };
    }
    case PropertiesTypes.LIST_PROPERTIES_SUCCESS: {
      return {
        ...state,
        success: state.lastRequest + " was successful",
        error: null,
        loading: false,
        propertiesList: action.payload, //action.payload is list of properties
      };
    }
    case PropertiesTypes.CREATE_PROPERTY_SUCCESS: {
      return {
        ...state,
        createdPropertiesInSession: [
          ...state.createdPropertiesInSession,
          action.payload,
        ],
        loading: false,
        error: null,
        success: state.lastRequest + " was successful",
      };
    }
    case PropertiesTypes.EDIT_PROPERTY_SUCCESS: {
      return {
        ...state,
        success: state.lastRequest + " was successful",
        lastEditedProperty: action.payload,
        error: null,
      };
    }
    case PropertiesTypes.DETAIL_PROPERTY_SUCCESS: {
      return {
        ...state,
        singlePropertyDetails: action.payload,
        loading: false,
        error: null,
        success: state.lastRequest + " was successful",
      };
    }
    case PropertiesTypes.UPDATE_PROPERTIES_FILTERS: {
      const filterName = action.payload[0];
      const filterValue = action.payload[1];
      return {
        ...state,
        filters: { ...state.filters, [filterName]: filterValue },
        success: "updated filters to:" + action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default PropertiesReducer;
