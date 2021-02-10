import React, { useEffect } from "react";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import ImageCarousel from "../Listing/ImageCarousel/ImageCarousel";
import ExtraPropertyDetails from "./ExtraPropertyDetails/ExtraPropertyDetails";
import List from "../Listing/List/List";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";

export default function PropertyDetails({
  id,
  fetchPropertyDetails,
  property,
  loading,
  filters,
}) {
  useEffect(() => {
    if (property === null) {
      fetchPropertyDetails(id);
    }
  }, []);
  useEffect(() => {
    fetchPropertyDetails(id);
  }, [id]);
  return (
    <main className="d-flex flex">
      <Sidebar active="listing" />
      <div className="mainContainer">
        <Header />
        {property === null || loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <List whichView="details" properties={[property]} />
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
