import React, { useEffect } from "react";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import List from "./List/List";

function Listing({ fetchlistProperties, propertiesList, loading }) {
  if (propertiesList === null) fetchlistProperties();

  return (
    <main className="d-flex flex">
      <Sidebar active="listing" />
      <div className="mainContainer">
        <Header />
        {propertiesList === null || loading ? (
          <LoadingSpinner />
        ) : (
          <List whichView="listing" properties={propertiesList} />
        )}
      </div>
    </main>
  );
}

export default Listing;
