import { connect } from "react-redux";

import {
  deleteProperty,
  listProperties,
  markAsSold,
  propertyDetails,
} from "../../properties/properties-actions";

import ListingRow from "../../../components/pages/Listing/ListingRow/ListingRow";

const mapStateToProps = (state, ListingRowOwnProps) => {
  return {
    whichView: ListingRowOwnProps.whichView,
    property: ListingRowOwnProps.property,
    filters: state.propertiesState.filters,
    deletedPropertySucces: state.propertiesState.deletedPropertySucces,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteProperty: (id) => dispatch(deleteProperty(id)),
  fetchlistProperties: (filters) => dispatch(listProperties(filters)),
  markAsSold: (id) => dispatch(markAsSold(id)),
  fetchPropertyDetails: (id) => dispatch(propertyDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingRow);
