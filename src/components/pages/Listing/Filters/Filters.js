import React, { useState } from "react";
import { Collapse, Image } from "react-bootstrap";
import GroupButtons from "../../../common/GroupButtons/GroupButtons";
import CheckInputs from "../../../common/Inputs/CheckInput";
import SelectInput from "../../../common/Inputs/SelectInput";
import DoubleRangeSlider from "../RangeSlider/RangeSlider";

export default function Filters(props) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: [],
    bedrooms: [],
    bathrooms: [],
    equipment: "null",
    publication: "null",
    filters: [],
    condition: [],
    range: "",
  });
  const { formData = {} } = props;

  function handleFilterChange(filterKey, filterValue) {
    setFilters({ ...filters, [filterKey]: filterValue });
  }
  return (
    <>
      <div>
        <Collapse in={open}>
          <div className="">
            <CheckInputs
              options={["Flat/Department", "House", "Duplex", "Penthouse"]}
              labelText="Type of home"
              inputsName="type"
              onChange={handleFilterChange}
              values={filters.type}
            />

            <div className="filtersColumn">
              Bedrooms
              <Image
                src="/assets/icons/bed.svg"
                width="15px"
                rounded
                className="form-icon-label"
              />
              <GroupButtons className="filters-btn"
                handleChange={handleFilterChange}
                filterKey="bedrooms"
                clicked={filters.bedrooms}
                buttons={{
                  0: "0 (Studio Flat)",
                  1: "1",
                  2: "2",
                  3: "3",
                  "4+": "4 or +",
                }}
              />
            </div>
            <div className="filtersColumn">
              Bathrooms
              <Image
                src="/assets/icons/bath.svg"
                width="15px"
                rounded
                className="form-icon-label"
              />
              <div className="bedroomsCol">
                <GroupButtons
                  handleChange={handleFilterChange}
                  filterKey="bedrooms"
                  clicked={filters.bedrooms}
                  buttons={{
                    1: "1",
                    2: "2",
                    "3+": "3 or +",
                  }}
                />
              </div>
            </div>
            <div className="filtersColumn">
              <SelectInput
                options={{
                  full: "Fully furnished",
                  partial: "Partial furnished",
                  none: "Not furnished",
                  null: "No filter added",
                }}
                inputName="equipment"
                labelText="Equipment"
                onChange={handleFilterChange}
                value={filters.equipment}
              />
            </div>
          </div>
        </Collapse>
        <Collapse in={open}>
          <div>
            <CheckInputs
              options={["New home", "Need renovation", "Good Conditions"]}
              labelText="Conditions"
              inputsName="condition"
              onChange={handleFilterChange}
              values={filters.condition}
            />
            <div className="filtersColumn">
              Price Range
              <DoubleRangeSlider />
            </div>
            <div className="filtersColumn">
              <SelectInput
                options={{
                  24: "Last 24 hours",
                  week: "Last week",
                  month: "Last month",
                  null: "No filter added",
                }}
                inputName="publication"
                labelText="Publication date"
                onChange={handleFilterChange}
                value={filters.publication}
              />

              {/* <Form.Control name="publication" as="select" custom>
                <option value="24" selected="">
                  Last 24 hours
                </option>
                <option value="week" selected="">
                  Last week
                </option>
                <option value="month" selected="">
                  Last month
                </option>
              </Form.Control> */}
            </div>
            <div className="filtersColumn">
              <CheckInputs
                options={[
                  "Pets Allowed",
                  "Lift",
                  "Garden",
                  "Air conditioning",
                  "Pool",
                  "Terrace",
                ]}
                labelText="More Filters"
                inputsName="filters"
                onChange={handleFilterChange}
                values={filters.filters}
              />
            </div>
          </div>
        </Collapse>
      </div>
      <div className="manageList btn-addNew">
        <a
          className="listingAddNew"
          href="#"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <Image src="/assets/icons/filters.svg" width="15px" rounded />
          Filters
        </a>
      </div>
    </>
  );
}
