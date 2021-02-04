import { connect } from "react-redux";

/* import { currentUserStateSelector } from "../../user/user-selectors"; */
import { login } from "../../user/user-actions";

import Login from "../../../components/pages/Login/Login";

const mapStateToProps = (state) => ({
  currentUserState: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: ({ email, password }) => dispatch(login({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
