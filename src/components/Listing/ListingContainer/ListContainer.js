import React, {useState} from "react";

import {Table, Image} from "react-bootstrap";
import ListingRowContainer from "../ListingRowContainer/ListingRowContainer.js";
import Result from "../Result/Results";
import ModalForm from "../../common/ModalForm/ModalForm.js";

export default function ListContainer() {
  const[modalOpen, setModalOpen] = useState(false);

  function handleToggleModalOpen (){
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  }
  
  return (
    <div>
      <div className="manageList">
        <Result />
      
      </div>
      <div className="manageList btn-addNew">
        <a className="listingAddNew" onClick={handleToggleModalOpen}>
          <Image className="mr-2" src="/assets/icons/addNew.svg" width="15px" rounded />
          Add New
        </a>
      </div>
      <div className="listContainer">
        <Table responsive>
          <thead>
            <tr>
              {Array.from({ length: 6 })}
              <th>
                <p className="h-img">Image</p>
              </th>
              <th>
                <p>Address</p>
              </th>
              <th>
                <p>Price</p>
              </th>
              <th>
                <p>Characteristics</p>
              </th>
              <th>
                <p>Add as sold</p>
              </th>
              <th>
                <p>Remove</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <ListingRowContainer />
            <ListingRowContainer />
            <ListingRowContainer />
            <ListingRowContainer />
          </tbody>
        </Table>
      </div>
      <ModalForm isModalFormOpen={modalOpen} handleModalToggle={handleToggleModalOpen}/>
    </div>
  );
}
