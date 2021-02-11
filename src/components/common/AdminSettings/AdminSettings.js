import React, { useState } from "react";
import { Dropdown, Image } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import ROUTES from "../../../utils/routes";
import { Redirect, Link } from "react-router-dom";

export default function AdminSettings(props) {
  const { currentUser, signout, isSignOut } = props;

  if (isSignOut || currentUser.token === null) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  function handleClick(e) {
    e.preventDefault();
    signout();
  }

  return (
    <div className="d-flex flex-row">
      {/* <Image
        src="/assets/testing_images/IMG_7429.jpg"
        className="notification-icon btn-circle"
      /> */}
      <Dropdown className="main-btn">
        <button className="dropdown-btn-overlay">
          {currentUser
            ? `${currentUser.firstname} ${currentUser.lastname}`
            : "Not user own server connection working"}
          <span>
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
          <Dropdown.Item as="button">
            <Link to={ROUTES.DASHBOARD}>Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link to={ROUTES.SETTINGS}>Settings</Link>
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={handleClick}>
            Log Out
          </Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
