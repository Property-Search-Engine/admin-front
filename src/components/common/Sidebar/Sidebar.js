import React from 'react'; 
import { Nav, Image } from "react-bootstrap"; 
import ROUTES from "../../../utils/routes"; 
import NAVITEM from "../NavItem/NavItem"; 

export default function Sidebar(props) {

    const { active } = props; 
    return (
        <aside>
            <Nav className="sidebar flex-column" activeKey={ROUTES.DASHBOARD}>
                <div className="sidebar-container flex-column justify-content-around d-flex">
                    <NAVITEM src="/assets/icons/search.svg" href={ROUTES.DASHBOARD}/>
                    <NAVITEM src="/assets/icons/dashboard.svg" text="Dashboard" href={ROUTES.DASHBOARD} active={active == "dashboard" ? true : false}/>
                    <NAVITEM src="/assets/icons/home.svg" text="Listing" href={ROUTES.LISTING} active={active == "listing" ? true : false}/>
                    <NAVITEM src="/assets/icons/settings.svg" text="Settings" href={ROUTES.SETTINGS} active={active == "settings" ? true : false}/>
                </div>
            </Nav>
        </aside>
    )
}
