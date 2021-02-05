import { connect } from "react-redux";

/* import { currentUserStateSelector } from "../../user/user-selectors"; */
import { listProperties } from "../../properties/properties-actions";

import Listing from "../../../components/pages/Listing/Listing";

//Pass the properties state to be accessible by the component
const mapStateToProps = (state) => {
  return {
    propertiesList: state.properties.propertiesList,
  };
};

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => ({
  fetchlistProperties: () => dispatch(listProperties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
