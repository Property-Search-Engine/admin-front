import React from "react";
import Sidebar from "../../common/Sidebar/Sidebar";
import Header from "../../common/Header/Header";
import Charts from "./Charts";

export default function Dashboard(props) {
  return (
    <main className="d-flex flex">
      <Sidebar active="dashboard" />
      <div className="mainContainer">
        <Header />
        <Charts />
      </div>
    </main>
  );
}
