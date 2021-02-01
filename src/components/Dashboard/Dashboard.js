import React from "react";
import { withRouter } from "react-router";
import Sidebar from "../common/Sidebar/Sidebar";
import Header from "../common/Header/Header"; 

export default function Dashboard (props) {
    return (
        <main className="d-flex flex">
            <Sidebar active="dashboard"/>
            <div className="mainContainer">
                <Header/>
            </div>
        </main>
        );
  };

