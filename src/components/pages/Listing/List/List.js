import React, { useState } from "react";

import { Table, Image, Button } from "react-bootstrap";
import ListingRowContainer from "../ListingRowContainer/ListingRowContainer.js";
import Result from "../Result/Results";
import Thead from "../Thead/Thead.js";
import Filters from "../Filters/Filters.js";
import ModalFormContainer from "../../../../redux/containers/components/ModalFormContainer.js";

export default function List({
  whichView,
  properties,
  filters,
  updateFilters,
  fetchlistProperties,
}) {
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

  function handleClick(e) {
    e.preventDefault();
    e.target.id === "homeKindFilter"
      ? updateFilters("kind", "Home")
      : updateFilters("kind", "Office");
    fetchlistProperties(filters);
  }
  return (
    <div className="detailsContainer">
      {whichView !== "noFilters" && <p>You selected {filters.kind}</p>}
      <div>Which kind of property you want to index?</div>
      <div>
        <Button
          variant="primary"
          id="homeKindFilter"
          onClick={handleClick}
          className="d-inline"
        >
          Home
        </Button>
        <Button
          variant="secondary"
          id="officeKindFilter"
          onClick={handleClick}
          className="d-inline"
        >
          Office
        </Button>
      </div>
      {whichView !== "noFilters" && (
        <>
          {whichView === "listing" && (
            <div className="manageList">
              <Result />
              <Filters filters={filters} setFilters={updateFilters} />
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
                {/* {objetoQueDevuelva.map(obj => <ListingRowContainer whichView={whichView} property={obj}/> )} */}
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
        </>
      )}
    </div>
  );
}
