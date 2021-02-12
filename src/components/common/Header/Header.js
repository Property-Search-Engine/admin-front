import React, { useState } from "react";
import { connect } from "react-redux";
import { Navbar, FormControl, Form, Button, Image } from "react-bootstrap";
import Notification from "../Notification/Notification";
import AdminSettingsContainer from "../../../redux/containers/pages/AdminSettingsContainer";
import { updatePropertiesFilters } from "../../../redux/properties/properties-actions";

function Header({ filters, setFilters }) {
  const [value, setValue] = useState(filters.city ? filters.city : "");
  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  function handleCityFilterSet(e) {
    e.preventDefault();
    setFilters("city", e.target.querySelector("#citySearch").value);
  }
  return (
    <Navbar className="mainNav d-flex justify-content-between">
      <div className="fullWidth">
        <Form className="d-flex flex-row " onSubmit={handleCityFilterSet}>
          <FormControl
            id="citySearch"
            type="text"
            placeholder="Search"
            className="halfWidth"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit">
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

const mapStateToProps = (state) => {
  return {
    filters: state.propertiesState.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setFilters: (inputName, inputValue) =>
    dispatch(updatePropertiesFilters(inputName, inputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
