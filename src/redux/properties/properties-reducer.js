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
  deletedPropertySucces: null,
  markAsSoldSuccess: null,
  filters: {
    kind: "Home",
    homeType: [],
    bedRooms: [],
    bathRooms: [],
    equipment: "null",
    publication: "null",
    filters: [],
    condition: [],
    range: { max: 10000000, min: 0 },
  },
  kindChanged: false,
};

//@param state is store state in every moment
//@param action equals to the object you insert as argument in dispath() function
const PropertiesReducer = (state = PropertiesInitialState, action) => {
  switch (action.type) {
    case PropertiesTypes.LIST_PROPERTIES_REQUEST:
    case PropertiesTypes.CREATE_PROPERTY_REQUEST:
    case PropertiesTypes.EDIT_PROPERTY_REQUEST:
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
    case PropertiesTypes.DETAIL_PROPERTY_ERROR:
    case PropertiesTypes.MARK_AS_SOLD_ERROR: {
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
        kindChanged: false,
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
      const [filterName, filterValue] = action.payload.filterToUpdate;
      const isNewKind = action.payload.isNewKind;
      return {
        ...state,
        filters: { ...state.filters, [filterName]: filterValue },
        success: "updated filters to:" + action.payload,
        kindChanged: isNewKind,
      };
    }
    case PropertiesTypes.DELETE_PROPERTY_REQUEST: {
      return {
        ...state,
        lastRequest: action.type,
        deletedPropertySucces: null,
        loading: true,
      };
    }
    case PropertiesTypes.DELETE_PROPERTY_SUCCESS: {
      return {
        ...state,
        success: state.lastRequest + " was successful",
        error: null,
        deletedPropertySucces: action.payload,
        loading: false,
      };
    }
    case PropertiesTypes.MARK_AS_SOLD_REQUEST: {
      return {
        ...state,
        lastRequest: action.type,
        markAsSoldSuccess: null,
        loading: true,
      };
    }
    case PropertiesTypes.MARK_AS_SOLD_SUCCESS: {
      return {
        ...state,
        success: state.lastRequest + " was successful",
        error: null,
        markAsSoldSuccess: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default PropertiesReducer;
