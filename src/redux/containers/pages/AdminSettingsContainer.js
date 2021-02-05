import { connect } from "react-redux"; 
import { signout } from "../../user/user-actions"; 
import AdminSettings from "../../../components/common/AdminSettings/AdminSettings"; 

const mapStateToProps = (finalState) => ({
    currentUserState: finalState.user,
}); 

const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(signout)
}); 

export default connect(mapStateToProps, mapDispatchToProps)(AdminSettings); 