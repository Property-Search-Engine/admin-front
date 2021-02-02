import React, {useState} from "react";

import {Table, Image} from "react-bootstrap";
import ListingRowContainer from "../ListingRowContainer/ListingRowContainer.js";
import Result from "../Result/Results";
import ModalForm from "../../common/ModalForm/ModalForm.js";
import Thead from "../Thead/Thead.js";

export default function ListContainer(props) {
  const[modalOpen, setModalOpen] = useState(false);
  const headerTexts = ['Address', 'Price', 'Characteristics', 'Add as sold', 'Remove'];

  function handleToggleModalOpen (){
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  }

  const { whichView } = props
  
  return (
    <div className="detailsContainer">

      {whichView === "listing" &&  <div className="manageList">
        <Result />
      </div>}

      <div className="manageList btn-addNew">
          <a className="listingAddNew" onClick={handleToggleModalOpen}>

          {whichView === "listing" ?  (<><Image className="mr-2" src="/assets/icons/addNew.svg" width="15px" rounded />
            Add New</>) :  (<><Image className="mr-2" src="/assets/icons/addNew.svg" width="15px" rounded />
            Edit</>)}

          </a>
      </div>
      <div className="listContainer">
        <Table responsive>
             <thead>
             <tr>
               {
               whichView === "listing" &&  
                <th>
                  <p className="h-img">Image</p>
                </th>
               }

               {headerTexts.map(ht => <Thead headerText={ht} /> )}
             </tr>
           </thead>
           <tbody>
             {/* {objetoQueDevuelva.map(obj => <ListingRowContainer whichView={whichView} property={obj}/> )} */}
              <ListingRowContainer whichView={whichView}/>
              <ListingRowContainer whichView={whichView}/>
              <ListingRowContainer whichView={whichView}/>
              <ListingRowContainer whichView={whichView}/>
         </tbody>
        </Table>
      </div>
      <ModalForm isModalFormOpen={modalOpen} handleModalToggle={handleToggleModalOpen}/>
    </div>
  );
}
