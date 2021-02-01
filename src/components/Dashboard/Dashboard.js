import React from "react";
import { withRouter } from "react-router";
import Sidebar from "../common/Sidebar/Sidebar";
import Header from "../common/Header/Header"; 
import ImageCarousel from "../Listing/ImageCarousel/ImageCarousel"

export default function Dashboard (props) {
    return (
        <main className="d-flex flex">
            <Sidebar active="dashboard"/>
            <div className="mainContainer">
                <Header/>
                <ImageCarousel/>
            </div>
        </main>
        );
  };

