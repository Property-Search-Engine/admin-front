import React from "react";
import { Redirect } from "react-router-dom";
import ListContainer from "../../../redux/containers/components/ListContainer";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ROUTES from "../../../utils/routes";

function Listing({ propertiesList, loading, userToken }) {
  if (!userToken || userToken === "null") return <Redirect to={ROUTES.LOGIN} />;
  return (
    <main className="d-flex flex">
      <Sidebar active="listing" />
      <div className="mainContainer">
        <Header />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <ListContainer whichView={"listing"} properties={propertiesList} />
        )}
      </div>
    </main>
  );
}

export default Listing;
