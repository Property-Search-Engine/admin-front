import React from "react";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import ListContainer from "../../../redux/containers/components/ListContainer";

function Listing() {
  return (
    <main className="d-flex flex">
      <Sidebar active="listing" />
      <div className="mainContainer">
        <Header />
        <ListContainer whichView="listing" />
      </div>
    </main>
  );
}

export default Listing;
