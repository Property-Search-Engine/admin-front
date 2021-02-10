import { connect } from "react-redux";

import {
  deleteProperty,
  listProperties,
} from "../../properties/properties-actions";

import ListingRow from "../../../components/pages/Listing/ListingRow/ListingRow";

const mapStateToProps = (state, ListingRowOwnProps) => {
  return {
    whichView: ListingRowOwnProps.whichView,
    property: ListingRowOwnProps.property,
    filters: state.propertiesState.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteProperty: (id) => dispatch(deleteProperty(id)),
  fetchlistProperties: (filters) => dispatch(listProperties(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingRow);
