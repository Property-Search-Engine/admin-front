import React, { useEffect, useState } from "react";

import { Table, Image } from "react-bootstrap";
import ListingRowContainer from "../ListingRowContainer/ListingRowContainer.js";
import Result from "../Result/Results";
import ModalForm from "../../../common/ModalForm/ModalForm.js";
import Thead from "../Thead/Thead.js";
import Filters from "../Filters/Filters.js";

const propertyEx = {
  homeType: "house",
  _id: "601828c9b15fb000e2050f93",
  filters: ["petsAllowed"],
  images: [
    "https://geekculture.co/wp-content/uploads/2019/12/Pickle-Rick-3.jpeg",
  ],
  sold: true,
  kind: "Home",
  bedRooms: 3,
  bathRooms: 2,
  equipment: "none",
  condition: "newHome",
  surface: 200,
  price: 200000,
  description: "This is the house of your dreams",
  address: {
    street: "C/Sant Antoni",
    number: 50,
    city: "Cerdañola del Vallés",
    state: "Catalonia",
    country: "Spain",
    coordinates: { lat: 0.1234, long: 1.2314 },
  },
  contactInfo: {
    _id: "5d6ede6a0ba62570afcedd3a",
    phone: "7569283938",
    email: "patata@mail.com",
  },
  createdAt: "2021-02-01T16:14:01.088Z",
  updatedAt: "2021-02-01T16:14:01.088Z",
};

const propertyEx2 = {
  homeType: "duplex",
  _id: "601828c9b15fb000e2050f94",
  filters: ["petsAllowed", "AirConditioning", "terrace"],
  images: [
    "https://geekculture.co/wp-content/uploads/2019/12/Pickle-Rick-2.jpeg",
  ],
  sold: true,
  kind: "Home",
  bedRooms: 2,
  bathRooms: 1,
  equipment: "full",
  condition: "needsRenovation",
  surface: 90,
  price: 400000,
  description: "This is the house of your dreams",
  address: {
    street: "C/Marina",
    number: 303,
    city: "Barcelona",
    state: "Catalonia",
    country: "Spain",
    coordinates: { lat: 0.1234, long: 1.2314 },
  },
  contactInfo: {
    _id: "5d6ede6a0ba62570afcedd3b",
    phone: "7569283938",
    email: "boniato@mail.com",
  },
  createdAt: "2021-02-01T16:14:01.088Z",
  updatedAt: "2021-02-01T16:14:01.088Z",
};

export default function List({
  propertiesList,
  fetchlistProperties,
  whichView,
}) {
  const properties = [propertyEx];

  const [modalOpen, setModalOpen] = useState(false);
  const headerTexts = [
    "Address",
    "Price",
    "Characteristics",
    "Add as sold",
    "Remove",
  ];

  function handleToggleModalOpen() {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  }

  useEffect(() => {
    fetchlistProperties();
  }, []);
  useEffect(() => {
    console.log(propertiesList);
  }, [propertiesList]);
  return (
    <div className="detailsContainer">
      {whichView === "listing" && (
        <div className="manageList">
          <Result />
          <Filters />
        </div>
      )}

      <div className="manageList btn-addNew">
        <a className="listingAddNew" onClick={handleToggleModalOpen}>
          {whichView === "listing" ? (
            <>
              <Image
                className="mr-2"
                src="/assets/icons/addNew.svg"
                width="15px"
                rounded
              />
              Add New
            </>
          ) : (
            <>
              <Image
                className="mr-2"
                src="/assets/icons/addNew.svg"
                width="15px"
                rounded
              />
              Edit
            </>
          )}
        </a>
      </div>
      <div className="listContainer">
        <Table responsive>
          <thead>
            <tr>
              {whichView === "listing" && (
                <th>
                  <p className="h-img">Image</p>
                </th>
              )}

              {headerTexts.map((ht) => (
                <Thead headerText={ht} />
              ))}
            </tr>
          </thead>
          <tbody>
            {/* {objetoQueDevuelva.map(obj => <ListingRowContainer whichView={whichView} property={obj}/> )} */}
            {properties.map((property) => (
              <ListingRowContainer whichView={whichView} property={property} />
            ))}
          </tbody>
        </Table>
      </div>
      <ModalForm
        isModalFormOpen={modalOpen}
        handleModalToggle={handleToggleModalOpen}
      />
    </div>
  );
}
