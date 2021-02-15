import { connect } from "react-redux";

import { listProperties } from "../properties/properties-actions";

import App from "../../App";

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => ({
  fetchlistProperties: () => dispatch(listProperties()),
});

export default connect(null, mapDispatchToProps)(App);
