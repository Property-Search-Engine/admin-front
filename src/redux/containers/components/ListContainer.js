import { connect } from "react-redux";

import {
  listProperties,
  updatePropertiesFilters,
} from "../../properties/properties-actions";

import List from "../../../components/pages/Listing/List/List";

//Pass the properties state to be accessible by the component
const mapStateToProps = (state, ownProps) => {
  return {
    whichView: ownProps.whichView,
    properties: state.propertiesState.propertiesList,
    loading: state.propertiesState.loading,
    filters: state.propertiesState.filters,
  };
};

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => {
  return {
    fetchlistProperties: () => dispatch(listProperties()),
    updateFilters: (filterName, filterValue) =>
      dispatch(updatePropertiesFilters(filterName, filterValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
