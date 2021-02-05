import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { propertyEx, propertyEx2 } from "../../../utils/mockOfProperties";
import ROUTES from "../../../utils/routes";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import List from "./List/List";

function Listing({ fetchlistProperties, propertiesList }) {
  if (propertiesList === null) {
    fetchlistProperties();
    return <Redirect to={ROUTES.LISTING} />;
  }
  console.log(propertiesList);
  return (
    <main className="d-flex flex">
      <Sidebar active="listing" />
      <div className="mainContainer">
        <Header />
        <List whichView="listing" properties={propertiesList} />
      </div>
    </main>
  );
}

export default Listing;
