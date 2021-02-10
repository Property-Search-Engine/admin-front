import React, { useState } from "react";

import Image from "react-bootstrap/Image";
import { Redirect } from "react-router-dom";
import { svgPath } from "../../../../utils/helpers";
import ROUTES from "../../../../utils/routes";

export default function ListingRow(props) {
  const {
    whichView,
    property,
    deleteProperty,
    filters,
    fetchlistProperties,
  } = props;
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [isPropertyDeleted, setIsPropertyDeleted] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    whichView !== "deatils" && setIsRowClicked(true);
  }
  function handleDelete(e) {
    setIsPropertyDeleted(true);
    deleteProperty(property._id);
    fetchlistProperties(filters);
  }
  if (isPropertyDeleted) {
    return <Redirect to={ROUTES.LISTING} />;
  }
  if (isRowClicked) {
    return <Redirect to={"listing/" + property._id} />;
  }

  return (
    <tr key={property._id} onClick={handleClick}>
      {whichView === "listing" && (
        <td>
          <Image
            className="firstCellMargin"
            src={property.images[0]}
            width="125px"
            id="btn-img"
            rounded
          />
        </td>
      )}
      <td className={whichView === "listing" ? "" : "firstCellMargin"}>
        <p className="boldSpan">{property.address.street}</p>
        <span className="notBoldSpan">{property.address.city}</span>
      </td>
      <td>
        <p>{property.price}</p>
      </td>

      <td className="characteristics">
        <span>
          <Image className="listing-icons" src={svgPath("bed")} />
          <span>{property.bedRooms}</span>
        </span>
        <span>
          <Image className="listing-icons" src={svgPath("bath")} />
          <span>{property.bathRooms}</span>
        </span>
        <span className="iconSurface">
          <Image className="listing-icons" src={svgPath("m2")} />
          <span>
            {property.surface}m<sup>2</sup>
          </span>
        </span>
      </td>

      <td>
        <button className="btn list">
          <Image
            className="listing-icons sold"
            src={svgPath(property.sold ? "sold-active" : "sold")}
            rounded
          />
        </button>
      </td>
      <td>
        <button className="btn list" onClick={handleDelete}>
          <Image className="listing-icons" src={svgPath("delete")} rounded />
        </button>
      </td>
    </tr>
  );
}
