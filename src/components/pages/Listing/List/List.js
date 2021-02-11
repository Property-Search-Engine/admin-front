import React, { useState } from "react";

import { Table, Image, Button } from "react-bootstrap";
import Thead from "../Thead/Thead.js";
import Filters from "../Filters/Filters.js";
import ButtonToggler from "../../../common/ButtonToggler/ButtonToggler";
import ModalFormContainer from "../../../../redux/containers/components/ModalFormContainer.js";
import ListingRowContainer from "../../../../redux/containers/components/ListingRowContainer.js";
import { Redirect } from "react-router-dom";
import ROUTES from "../../../../utils/routes.js";

export default function List({
  whichView,
  properties,
  filters,
  updateFilters,
  fetchlistProperties,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [kind, setKind] = useState(filters.kind === "Home" ? true : false);
  const headerTexts = [
    "Address",
    "Price",
    "Characteristics",
    "Add as sold",
    "Remove",
  ];
  if (properties === null) {
    fetchlistProperties(filters);
    return <Redirect to={ROUTES.LISTING} />;
  }

  function handleToggleModalOpen() {
    setModalOpen(!modalOpen);
  }
  function handleToggleFiltersOpen(e) {
    e.preventDefault();
    console.log(filters);
    filtersOpen && fetchlistProperties(filters);
    setFiltersOpen(!filtersOpen);
  }
  function handleClick(e) {
    e.preventDefault();
    e.target.classList.contains("spanNew")
      ? updateFilters("kind", "Home")
      : updateFilters("kind", "Office");
    setKind(!kind);
    fetchlistProperties(filters);
  }
  function handleClickFetch(e) {
    e.preventDefault();
    fetchlistProperties(filters);
  }
  return (
    <div className="detailsContainer">
      <Button
        variant="primary"
        id="homeKindFilter"
        onClick={handleClickFetch}
        className="d-inline"
      >
        RefreshList of properties
      </Button>
      {whichView !== "details" && (
        <>
          <div className="text-center">
            Which kind of property you want to index?
          </div>
          <ButtonToggler
            toggled={kind}
            onClick={handleClick}
            texts={{ true: "Home", false: "Office" }}
          />
        </>
      )}
      {whichView === "listing" && (
        <div className="manageList">
          {properties !== null && (
            <span className="spanResult">{properties.length} Results</span>
          )}
          <Filters
            filters={filters}
            setFilters={updateFilters}
            open={filtersOpen}
            handleToggleFiltersOpen={handleToggleFiltersOpen}
          />
        </div>
      )}
      <div className="manageList btn-addNew">
        <span className="listingAddNew" onClick={handleToggleModalOpen}>
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
        </span>
      </div>
      <div className="listContainer">
        <Table responsive>
          <thead>
            <tr>
              {whichView === "listing" && properties !== null && (
                <th>
                  <p className="h-img">Image</p>
                </th>
              )}

              {headerTexts.map((ht, i) => (
                <Thead key={`table-header-cell-${i}`} headerText={ht} />
              ))}
            </tr>
          </thead>
          <tbody>
            {properties.map((property, i) => (
              <ListingRowContainer
                key={`list-row-${i}`}
                whichView={whichView}
                property={property}
              />
            ))}
          </tbody>
        </Table>
      </div>
      <ModalFormContainer
        isModalFormOpen={modalOpen}
        handleModalToggle={handleToggleModalOpen}
      />
    </div>
  );
}
