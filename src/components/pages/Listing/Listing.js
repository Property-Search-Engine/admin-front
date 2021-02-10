import React from "react";
import ListContainer from "../../../redux/containers/components/ListContainer";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import List from "./List/List";

function Listing({ propertiesList, loading, filters }) {
  return (
    <main className="d-flex flex">
      <Sidebar active="listing" />
      <div className="mainContainer">
        <Header />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <ListContainer
            whichView={
              !filters.kind || propertiesList === null ? "noFilters" : "listing"
            }
            properties={propertiesList}
          />
        )}
      </div>
    </main>
  );
}

export default Listing;
