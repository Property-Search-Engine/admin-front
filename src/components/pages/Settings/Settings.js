import React from "react";
import NewAdminFormContainer from "../../../redux/containers/components/NewAdminFormContainer";
// import TextInput from "../../common/Inputs/TextInput";
// import {svgPath} from "../../../utils/helpers";
// import ROUTES from "../../../utils/routes";
import Sidebar from "../../common/Sidebar/Sidebar";

export default function Settings() {
  return (
    <main className="d-flex flex">
      <Sidebar active="settings" />
      <div className="mainContainer">
        <NewAdminFormContainer />
      </div>
    </main>
  );
}
