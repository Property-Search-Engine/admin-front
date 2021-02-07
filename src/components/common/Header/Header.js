import React from "react";
import { Navbar, FormControl, Form, Button, Image } from "react-bootstrap";
import Notification from "../Notification/Notification";
import AdminSettings from "../AdminSettings/AdminSettings";
import AdminSettingsContainer from "../../../redux/containers/pages/AdminSettingsContainer";

export default function Header() {
  return (
    <Navbar className="mainNav d-flex justify-content-between">
      <div className="fullWidth">
        <Form className="d-flex flex-row ">
          <FormControl type="text" placeholder="Search" className="halfWidth" />
          <Button>
            <Image src="/assets/icons/magnifying-glass.svg" />
          </Button>
        </Form>
      </div>
      <div className="d-flex flex-row admin-settings-container justify-content-around">
        <Notification />
        <AdminSettingsContainer />
      </div>
    </Navbar>
  );
}
