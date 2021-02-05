import React, { useState } from 'react'; 
// import TextInput from "../../common/Inputs/TextInput"; 
// import {svgPath} from "../../../utils/helpers"; 
// import ROUTES from "../../../utils/routes"; 
import Sidebar from "../../common/Sidebar/Sidebar"; 
import NewAdminForm from './NewAdminForm/NewAdminForm';

export default function Settings() {

    return (
        <main className="d-flex flex">
            <Sidebar active="settings" />
        <div className="mainContainer">
            <NewAdminForm/>
        </div>
        </main>
    )
}
