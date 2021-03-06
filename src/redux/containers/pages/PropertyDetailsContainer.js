import { connect } from "react-redux";

import { propertyDetails } from "../../properties/properties-actions";

import PropertyDetails from "../../../components/pages/PropertyDetails/PropertyDetails";

//Pass the properties state to be accessible by the component
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    id: id,
    property: state.propertiesState.singlePropertyDetails,
    loading: state.propertiesState.loading,
    filters: state.propertiesState.filters,
  };
};

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => ({
  fetchPropertyDetails: (id) => dispatch(propertyDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails);
