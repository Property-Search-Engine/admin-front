import { connect } from "react-redux";

/* import { currentUserStateSelector } from "../../user/user-selectors"; */
import { createEmployee } from "../../employees/employees-actions";

import NewAdminForm from "../../../components/pages/Settings/NewAdminForm/NewAdminForm";

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => ({
  createEmployee: (newEmployee) => dispatch(createEmployee(newEmployee)),
});

export default connect(null, mapDispatchToProps)(NewAdminForm);
