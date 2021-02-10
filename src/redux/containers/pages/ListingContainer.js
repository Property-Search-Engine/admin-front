import { connect } from "react-redux";

/* import { currentUserStateSelector } from "../../user/user-selectors"; */
import { listProperties } from "../../properties/properties-actions";

import Listing from "../../../components/pages/Listing/Listing";

//Pass the properties state to be accessible by the component
const mapStateToProps = (state) => {
  return {
    propertiesList: state.propertiesState.propertiesList,
    loading: state.propertiesState.loading,
    filters: state.propertiesState.filters,
  };
};

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => ({
  fetchlistProperties: () => dispatch(listProperties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
