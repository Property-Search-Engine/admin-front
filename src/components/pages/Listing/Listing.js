import React from "react";
import ListContainer from "../../../redux/containers/components/ListContainer";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import List from "./List/List";

function Listing({ propertiesList, loading, filters }) {
  console.log(filters);
  return (
    <main className="d-flex flex">
      <Sidebar active="listing" />
      <div className="mainContainer">
        <Header />
        <ListContainer
          whichView={loading || !filters.kind ? "noFilters" : "listing"}
          properties={propertiesList}
        />
      </div>
    </main>
  );
}

export default Listing;
