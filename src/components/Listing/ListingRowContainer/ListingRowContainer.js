import React from "react";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

export default function ListingRowContainer() {
  return (
    <tr>
      {Array.from({ length: 6 })}
      <td>
        <button className="btn listImg">
          <Image src="/assets/images/house1.jpg" width="125px" rounded />
        </button>
      </td>

      <td className="listing-street">
        <p className="boldSpan">4092 Morgan Street</p>
        <span className="notBoldSpan">Sabadell, BCN</span>
      </td>
      <td className="listing-price">
        <p>$457,000</p>
      </td>

      <td className="characteristics">
        <span className="iconBed">
          <Image className="listing-icons" src="/assets/icons/bed.svg" />
          <span>2</span>
        </span>
        <span className="iconBath">
          <Image className="listing-icons" src="/assets/icons/bath.svg" />
          <span>1</span>
        </span>
        <span className="iconSurface">
          <Form.Check type="checkbox" label="62" />m<sup>2</sup>
        </span>
      </td>

      <td>
        <button className="btn list">
          <Image
            className="listing-icons sold"
            src="/assets/icons/sold.svg"
            rounded
          />
        </button>
      </td>
      <td>
        <button className="btn list">
          <Image
            className="listing-icons"
            src="/assets/icons/delete.svg"
            rounded
          />
        </button>
      </td>
    </tr>
  );
}
