import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import Modal from "../Modal/Modal";
import TextInput from "../Inputs/TextInput";
import RadioInputs from "../Inputs/RadioInputs";
import CheckInput from "../Inputs/CheckInput";
import DateInput from "../Inputs/DateInput";
import NumberInput from "../Inputs/NumberInput";

import { svgPath } from "../../../utils/helpers";
import { fadeOut } from "../../../utils/helpers";

function ModalForm(props) {
  const {
    isModalFormOpen,
    handleModalToggle,
    comingFormData = {
      street: "",
      number: "",
      city: "",
      state: "",
      country: "",
      status: "",
      type: "",
      condition: "",
      equipment: "",
      price: "",
      bedroom: "",
      bath: "",
      m2: "",
      date: "",
      filters: [],
      description: "",
    },
  } = props;
  const [formData, setFormData] = useState(comingFormData);
  const {
    street,
    number,
    city,
    state,
    country,
    status,
    type,
    condition,
    equipment,
    price,
    bedroom,
    bath,
    m2,
    date,
    filters,
    description
  } = formData;
  const handleInputChange = (inputName, inputValue) => {
    setFormData({ ...formData, [inputName]: inputValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //Fetch to endpoint

    close();
    e.target.reset();
  };
  function close() {
    const fadeOutTime = 300;
    const fadeOutElement = document.querySelector(".modalOverlay");
    fadeOut(fadeOutElement, fadeOutTime);
    setTimeout(() => handleModalToggle(), fadeOutTime);
  }
  return (
    <Modal isOpen={isModalFormOpen} handleModalToggle={handleModalToggle}>
      <Form id="property-form" onSubmit={handleSubmit}>
        <Button
          variant="secondary"
          onClick={close}
          className="close-modal-button"
        >
          X
        </Button>
        <h2 className="modal-form-title">Add a new property to the system </h2>
        <div className="d-flex">
          <div className="modal-form-column">
            <TextInput
              inputName="street"
              labelText="Street"
              placeholder="Property Street"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={street}
            />
            <TextInput
              inputName="number"
              labelText="Number"
              placeholder="Property Number"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={number}
            />
            <TextInput
              inputName="city"
              labelText="City"
              placeholder="Property City"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={city}
            />
            <TextInput
              inputName="state"
              labelText="State"
              placeholder="Property State"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={state}
            />
            <TextInput
              inputName="country"
              labelText="Country"
              placeholder="Property Country"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={country}
            />
            <RadioInputs
              options={["Available", "Sold"]}
              inputsName="status"
              labelText="Status"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={status}
            />
            <RadioInputs
              options={["Apartment", "Duplex", "House", "Penthouse"]}
              inputsName="type"
              labelText="Type of property"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={type}
            />
            <RadioInputs
              options={["New House", "Good condition", "Needs renovation"]}
              inputsName="condition"
              labelText="Condition of Property"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={condition}
            />
            <Form.Group controlId="equipment" size="sm">
              <Form.Label>
                <Image src={svgPath("tagblue")} className="form-icon-label" />
                Furnished
              </Form.Label>
              <Form.Control
                name="equipment"
                onChange={(e) => handleInputChange("equipment", e.target.value)}
                as="select"
                custom
              >
                <option
                  value="full"
                  selected={equipment === "full" ? true : false}
                >
                  Fully furnished
                </option>
                <option
                  value="partial"
                  selected={equipment === "partial" ? true : false}
                >
                  Partial furnished
                </option>
                <option
                  value="none"
                  selected={equipment === "none" ? true : false}
                >
                  Not furnished
                </option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="modal-form-column">
            <TextInput
              inputName="price"
              labelText="Price"
              placeholder="Property Price"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={price}
            />
            <p className="m-0">
              <Image
                src={svgPath("tagblue")}
                className="form-icon-label mb-2"
              />
              characteristics
            </p>
            <div className="input-container-number">
              <NumberInput
                inputName="bedroom"
                labelContent={{ type: "image", content: svgPath("bed") }}
                onChange={handleInputChange}
                value={bedroom}
              />
              <NumberInput
                inputName="bath"
                labelContent={{ type: "image", content: svgPath("bath") }}
                onChange={handleInputChange}
                value={bath}
              />
              <NumberInput
                inputName="m2"
                labelContent={{ type: "image", content: svgPath("m2") }}
                onChange={handleInputChange}
                value={m2}
              />
            </div>
            <DateInput
              inputName="date"
              labelText="Publication date"
              placeholder={new Date().toLocaleString("en-GB", {
                timeZone: "UTC",
              })}
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={date}
            />
            <CheckInput
              options={[
                "Pets Allowed",
                "Lift",
                "Garden",
                "Air Conditioning",
                "Pool",
                "Terrace",
              ]}
              labelText="More Filters"
              inputsName="filters"
              labelImgSrc={svgPath("filter")}
              onChange={handleInputChange}
              values={filters}
            />
            <Form.Group controlId="description">
              <Form.Label>
                <Image src={svgPath("tagblue")} className="form-icon-label" />
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Add here the description...  "
                value={description}
              />
            </Form.Group>
            <div className="d-flex">
              <Button variant="primary" type="submit" className="mr-3">
                Submit
              </Button>
              <Button variant="secondary" onClick={close}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </Modal>
  );
}

export default ModalForm;
