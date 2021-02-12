import React, { useState } from "react";
import NewAdminFormContainer from "../../../redux/containers/components/NewAdminFormContainer";
import ButtonToggler from "../../common/ButtonToggler/ButtonToggler";
// import TextInput from "../../common/Inputs/TextInput";
// import {svgPath} from "../../../utils/helpers";
// import ROUTES from "../../../utils/routes";
import Sidebar from "../../common/Sidebar/Sidebar";
import EmployeesList from "./EmployeesList/EmployeesList";

export default function Settings() {
  const [empToggle, setEmpToggle] = useState(true);
  const handleToggleClick = (e) => {
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
