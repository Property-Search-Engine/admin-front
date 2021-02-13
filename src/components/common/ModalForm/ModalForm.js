import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import Modal from "../Modal/Modal";
import TextInput from "../Inputs/TextInput";
import RadioInputs from "../Inputs/RadioInputs";
import CheckInput from "../Inputs/CheckInput";
import DateInput from "../Inputs/DateInput";
import NumberInput from "../Inputs/NumberInput";
import SelectInput from "../Inputs/SelectInput";

import { svgPath, fadeOut, toCamelCase } from "../../../utils/helpers";

function ModalForm(props) {
  const typeOptions = ["Apartment", "Duplex", "House", "Penthouse"];
  const conditionOptions = ["New Home", "Good condition", "Needs renovation"];
  const filterOptions = [
    "Pets Allowed",
    "Lift",
    "Garden",
    "Air Conditioning",
    "Swimming",
    "Terrace",
  ];
  const soldOptions = ["Available", "Sold"];
  const equipmentOptions = {
    full: "Fully furnished",
    partial: "Partial furnished",
    none: "Not furnished",
  };
  const getDefaultOptions = (options) => options[0].toLowerCase();
  const {
    createProperty,
    isModalFormOpen,
    handleModalToggle,
    comingFormData = {
      kind: "Home",
      street: "",
      number: "",
      city: "",
      state: "",
      country: "",
      sold: getDefaultOptions(soldOptions),
      homeType: getDefaultOptions(typeOptions),
      condition: toCamelCase(conditionOptions[0]),
      equipment: "full",
      price: "",
      bedRooms: 1,
      bathRooms: 1,
      surface: 1,
      filters: [],
      description: "",
      images: {},
    },
  } = props;
  const [formData, setFormData] = useState(comingFormData);
  const {
    kind,
    street,
    number,
    city,
    state,
    country,
    sold,
    homeType,
    condition,
    equipment,
    price,
    bedRooms,
    bathRooms,
    surface,
    filters,
    description,
    images,
  } = formData;
  const [imagesInputValue, setImagesInputValue] = useState("");
  const handleInputChange = (inputName, inputValue) => {
    setFormData({ ...formData, [inputName]: inputValue });
  };

  // useEffect(() => {
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const handleSubmit = (e) => {
    e.preventDefault();
    // close();
    // e.target.reset();

    createProperty(formData);
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
              options={soldOptions}
              inputsName="sold"
              labelText="Status"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={sold}
            />
            <RadioInputs
              options={typeOptions}
              inputsName="homeType"
              labelText="Type of property"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={homeType}
            />
            <RadioInputs
              options={conditionOptions}
              inputsName="condition"
              labelText="Condition of Property"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={condition}
            />
            <SelectInput
              options={equipmentOptions}
              inputName="equipment"
              labelText="Equipment"
              labelImgSrc={svgPath("tagblue")}
              onChange={handleInputChange}
              value={equipment}
            />
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
                inputName="bedRooms"
                labelContent={{ type: "image", content: svgPath("bed") }}
                onChange={handleInputChange}
                value={bedRooms}
              />
              <NumberInput
                inputName="bathRooms"
                labelContent={{ type: "image", content: svgPath("bath") }}
                onChange={handleInputChange}
                value={bathRooms}
              />
              <NumberInput
                inputName="surface"
                labelContent={{ type: "image", content: svgPath("m2") }}
                onChange={handleInputChange}
                value={surface}
              />
            </div>
            <CheckInput
              options={filterOptions}
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
            <Form.Group>
              <Form.Label>
                <Image src={svgPath("tagblue")} className="form-icon-label" />
                Upload Property Images
              </Form.Label>
              <input
                type="file"
                name="images"
                value={imagesInputValue}
                multiple
                onChange={(e) => {
                  setImagesInputValue(e.target.value);
                  handleInputChange("images", e.target.files);
                }}
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
