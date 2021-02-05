import React, { useState } from "react";
import { DropdownButton, Dropdown, ButtonGroup, Image } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import ROUTES from "../../../utils/routes"; 
import { Redirect } from "react-router-dom";

export default function AdminSettings(props) {

  const [isSignOut, setisSignOut] = useState(false); 

  const { currentUserState, signout } = props; 

  console.log(currentUserState); 

  if(isSignOut || currentUserState.currentUser === null) {
    return <Redirect to={ROUTES.LOGIN} />
  }

  function handleClick(e) {
      e.preventDefault()
      signout()
      setisSignOut(true) 
  }; 

  return (
    <div className="d-flex flex-row">
      {/* <Image
        src="/assets/testing_images/IMG_7429.jpg"
        className="notification-icon btn-circle"
      /> */}
      <Dropdown className="main-btn">
        <button className="dropdown-btn-overlay">
          {currentUserState && `${currentUserState.currentUser.firstname} ${currentUserState.currentUser.lastname}`}
          <span>
            {" "}
            <Image
              src="/assets/icons/arrow-down.svg"
              className="arrow-down-btn"
            />
          </span>
        </button>
        <Dropdown.Toggle
          style={{ opacity: "0", zIndex: "1" }}
          variant="outline-primary"
          id=""
        >
          Cris Garcia
        </Dropdown.Toggle>
        <DropdownMenu>
          <Dropdown.Item href="">Profile</Dropdown.Item>
          <Dropdown.Item href="/settings">Settings</Dropdown.Item>
          <Dropdown.Item onClick={handleClick}>Log Out</Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
