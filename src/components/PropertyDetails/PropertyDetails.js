import React from 'react'; 
import Header from '../common/Header/Header';
import Sidebar from '../common/Sidebar/Sidebar';
import ListContainer from "../Listing/ListingContainer/ListContainer"; 
import ImageCarousel from "../Listing/ImageCarousel/ImageCarousel"; 
import ExtraPropertyDetails from "../ExtraPropertyDetails/ExtraPropertyDetails"; 

const propertyEx = {
    homeType: "house",
    _id: "601828c9b15fb000e2050f93",
    filters: ["petsAllowed", "lift"],
    images: [
      "https://geekculture.co/wp-content/uploads/2019/12/Pickle-Rick-3.jpeg",
    ],
    sold: true,
    kind: "Home",
    bedRooms: 3,
    bathRooms: 2,
    equipment: "none",
    condition: "newHome",
    surface: 200,
    price: 200000,
    description: "This is the house of your dreams",
    address: {
      street: "C/Sant Antoni",
      number: 50,
      city: "Cerdañola del Vallés",
      state: "Catalonia",
      country: "Spain",
      coordinates: { lat: 0.1234, long: 1.2314 },
    },
    contactInfo: {
      _id: "5d6ede6a0ba62570afcedd3a",
      phone: "7569283938",
      email: "patata@mail.com",
    },
    createdAt: "2021-02-01T16:14:01.088Z",
    updatedAt: "2021-02-01T16:14:01.088Z",
  };
  
  const propertyEx2 = {
    homeType: "duplex",
    _id: "601828c9b15fb000e2050f94",
    filters: ["petsAllowed", "AirConditioning", "terrace"],
    images: [
      "https://geekculture.co/wp-content/uploads/2019/12/Pickle-Rick-2.jpeg",
      "https://geekculture.co/wp-content/uploads/2019/12/Pickle-Rick-3.jpeg", 
      "https://geekculture.co/wp-content/uploads/2019/12/Pickle-Rick-1.jpeg"
    ],
    sold: true,
    kind: "Home",
    bedRooms: 2,
    bathRooms: 1,
    equipment: "full",
    condition: "needsRenovation",
    surface: 90,
    price: 400000,
    description: "This is the house of your dreams",
    address: {
      street: "C/Marina",
      number: 303,
      city: "Barcelona",
      state: "Catalonia",
      country: "Spain",
      coordinates: { lat: 0.1234, long: 1.2314 },
    },
    contactInfo: {
      _id: "5d6ede6a0ba62570afcedd3b",
      phone: "7569283938",
      email: "boniato@mail.com",
    },
    createdAt: "2021-02-01T16:14:01.088Z",
    updatedAt: "2021-02-01T16:14:01.088Z",
  };


export default function PropertyDetails(props) {
    const currentProperty = propertyEx2;
    return (
        <main className="d-flex flex">
            <Sidebar active="listing"/>
            <div className="mainContainer">
                <Header/>
                <ListContainer whichView="details" properties={[currentProperty]} />
                <div className="d-flex flex-row px-5 mt-5 justify-content-center">
                        <ExtraPropertyDetails property={currentProperty}/>
                        <ImageCarousel property={currentProperty}/>
                </div>
            </div>
        </main>
        
    )
}
