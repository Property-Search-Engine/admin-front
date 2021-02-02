import React from 'react'; 
import { Carousel } from "react-bootstrap"; 
import ListContainer from "../ListingContainer/ListContainer"; 

export default function ImageCarousel() {

    return (
        <div className="listing-container">
                <ListContainer whichView="details"/>
            <div className="d-flex align-items-center justify-content-center w-100 p-10">
                <div className="w-25 h-70 border">Info</div>
            <Carousel className="carousel-slider">
                <Carousel.Item className="carousel-image">
                    <img className="d-block w-100" src="/assets/images/house1.jpg" alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item className="carousel-image">
                    <img className="d-block w-100" src="/assets/images/house1.jpg" alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item className="carousel-image">
                    <img className="d-block w-100" src="/assets/images/house1.jpg" alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
            </div>
           
        </div>
    )
}
