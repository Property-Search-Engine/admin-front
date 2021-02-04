import React from "react";
import { DropdownButton, Dropdown, ButtonGroup, Image } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

export default function AdminSettings() {
  return (
    <div className="d-flex flex-row">
      <Image
        src="/assets/testing_images/IMG_7429.jpg"
        className="notification-icon btn-circle"
      />
      <Dropdown className="main-btn">
        <button className="dropdown-btn-overlay">
          Cris Garcia{" "}
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
          <Dropdown.Item href="/logOut">Log Out</Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
