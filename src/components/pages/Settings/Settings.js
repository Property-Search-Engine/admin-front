import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchEmployeesList } from "../../../redux/employees/employees-actions";
import NewAdminFormContainer from "../../../redux/containers/components/NewAdminFormContainer";
import ButtonToggler from "../../common/ButtonToggler/ButtonToggler";
import Sidebar from "../../common/Sidebar/Sidebar";
import EmployeesList from "./EmployeesList/EmployeesList";
function Settings() {
  const [empToggle, setEmpToggle] = useState(true);
  const handleToggleClick = (e) => {
    if (empToggle) fetchEmployeesList();
    setEmpToggle(!empToggle);
  };
  return (
    <main className="d-flex flex">
      <Sidebar active="settings" />
      <div className="mainContainer">
        <ButtonToggler
          toggled={empToggle}
          onClick={handleToggleClick}
          texts={{ false: "Employees", true: "Create new" }}
        />
        {empToggle && <NewAdminFormContainer />}
        {!empToggle && <EmployeesList />}
      </div>
    </main>
  );
}

//Pass the actions functions to be accessible by the component
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployeesList()),
  };
};

export default connect(null, mapDispatchToProps)(Settings);
