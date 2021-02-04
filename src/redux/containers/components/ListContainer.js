import { connect } from "react-redux";

/* import { currentUserStateSelector } from "../../user/user-selectors"; */
import { listProperties } from "../../properties/properties-actions";

import List from "../../../components/pages/Listing/List/List";

//Pass the properties state to be accessible by the component
const mapStateToProps = (state, ownProps) => {
  return {
    propertiesList: state.properties,
    whichView: ownProps.whichView,
  };
};

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => ({
  fetchlistProperties: () => dispatch(listProperties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
