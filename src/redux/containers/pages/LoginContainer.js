import { connect } from "react-redux";

/* import { currentUserStateSelector } from "../../user/user-selectors"; */
import { login, signout } from "../../user/user-actions";

import Login from "../../../components/pages/Login/Login";

const mapStateToProps = (state) => ({
  currentUser: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
  signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
