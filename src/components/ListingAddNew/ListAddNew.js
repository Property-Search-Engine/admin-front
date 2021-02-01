import React from "react";
//import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";

export default function ListAddNew() {
  return (
    <span className="listingAddNew">
      <a href="#">
        <Image src="/assets/icons/addNew.svg" width="15px" rounded />
        Add New
      </a>
    </span>
  );
}
