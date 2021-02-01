import React from 'react'; 
import ROUTES from "../../../utils/routes"; 
import NavItem from "../NavItem/NavItem"; 

export default function Sidebar(props) {

    const { active } = props; 
    return (
            <aside className="sidebar flex-column">
                    <div className="sidebar-container flex-column justify-content-around d-flex">
                        <NavItem src="/assets/icons/search.svg" href={ROUTES.DASHBOARD}/>
                        <NavItem src="/assets/icons/dashboard.svg" text="Dashboard" href={ROUTES.DASHBOARD} active={active === "dashboard" ? true : false}/>
                        <NavItem src="/assets/icons/home.svg" text="Listing" href={ROUTES.LISTING} active={active === "listing" ? true : false}/>
                        <NavItem src="/assets/icons/settings.svg" text="Settings" href={ROUTES.SETTINGS} active={active === "settings" ? true : false}/>
                    </div>
            </aside>
    )
}
