import React from "react";

import Table from "react-bootstrap/Table";
import ListingRowContainer from "../ListingRowContainer/ListingRowContainer.js";
import Result from "../Result/Results";
import ListAddNew from "../ListingAddNew/ListAddNew";

export default function ListContainer() {
  return (
    <div>
      <div className="manageList">
        <Result />
      
      </div>
      <div className="manageList btn-addNew">
        <ListAddNew />
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
    </div>
  );
}
