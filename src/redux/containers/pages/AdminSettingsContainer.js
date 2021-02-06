import { connect } from "react-redux";
import { signout } from "../../user/user-actions";
import AdminSettings from "../../../components/common/AdminSettings/AdminSettings";

const mapStateToProps = (finalState) => {
  console.log("We are using the final state User: ", finalState.user);
  return {
    currentUser: finalState.userState.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSettings);
