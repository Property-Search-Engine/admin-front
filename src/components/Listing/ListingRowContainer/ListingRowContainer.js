import React from "react";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form"; 
import { svgPath } from "../../../utils/helpers";

export default function ListingRowContainer(props) {

  const { whichView, property} = props; 


  function handleClick(e) {
    e.preventDefault(); 
    //window.location.href = '/listing/' + property._id ;
    // setCurrentProperty(property);
  }
  

  return (
    <tr key={property._id} onClick={handleClick}>

      {whichView === "listing" && <td>
          <Image className="firstCellMargin" src={ property.images[0]} width="125px" id="btn-img" rounded />
      </td>}
      <td className={whichView === "listing" ? "" : "firstCellMargin"}>
        <p className="boldSpan">{property.address.street}</p>
        <span className="notBoldSpan">{property.address.city}</span>
      </td>
      <td>
        <p>{property.price}</p>
      </td>

      <td className="characteristics">
        <span>
          <Image className="listing-icons" src={svgPath('bed')} />
          <span>{property.bedRooms}</span>
        </span>
        <span>
          <Image className="listing-icons" src={svgPath('bath')}/>
          <span>{property.bathRooms}</span>
        </span>
        <span className="iconSurface">
          <Image className="listing-icons" src={svgPath("m2")} />
          <span>{property.surface}m<sup>2</sup></span>
        </span>
      </td>

      <td>
        <button className="btn list">
          <Image
            className="listing-icons sold"
            src={svgPath(property.sold ? 'sold-active': 'sold')}
            rounded
          />
        </button>
      </td>
      <td>
        <button className="btn list">
          <Image
            className="listing-icons"
            src={svgPath("delete")}
            rounded
          />
        </button>
      </td>
    </tr>
  );
}
