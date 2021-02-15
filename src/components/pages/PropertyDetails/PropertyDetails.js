import React from "react";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import ImageCarousel from "../Listing/ImageCarousel/ImageCarousel";
import ExtraPropertyDetails from "./ExtraPropertyDetails/ExtraPropertyDetails";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ListContainer from "../../../redux/containers/components/ListContainer";

export default function PropertyDetails({
  id,
  fetchPropertyDetails,
  property,
  loading,
  filters,
}) {
  if (property === null || property._id !== id) {
    fetchPropertyDetails(id);
  }

  return (
    <main className="d-flex flex">
      <Sidebar active="listing" />
      <div className="mainContainer">
        <Header />
        {property === null || loading || !filters ? (
          <LoadingSpinner />
        ) : (
          <>
            <ListContainer whichView="details" singleProperty={property} />
            <div className="d-flex flex-row px-5 mt-5 justify-content-center">
              <ExtraPropertyDetails property={property} />
              <ImageCarousel property={property} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
