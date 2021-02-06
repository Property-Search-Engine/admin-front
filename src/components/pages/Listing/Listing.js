import React from "react";
import { Spinner } from "react-bootstrap";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import List from "./List/List";

function Listing({ propertiesList, loading }) {
  return (
    <main className="d-flex flex">
      <Sidebar active="listing" />
      <div className="mainContainer">
        <Header />
        {propertiesList === null || loading ? (
          <Spinner />
        ) : (
          <List whichView="listing" properties={propertiesList} />
        )}
      </div>
    </main>
  );
}

export default Listing;
