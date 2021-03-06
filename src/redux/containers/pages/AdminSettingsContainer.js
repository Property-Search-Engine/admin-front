import { connect } from "react-redux";
import { signout } from "../../user/user-actions";
import AdminSettings from "../../../components/common/AdminSettings/AdminSettings";

const mapStateToProps = (finalState) => {
  return {
    currentUser: finalState.userState.currentUser,
    isSignOut: finalState.userState.isSignOut,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSettings);
