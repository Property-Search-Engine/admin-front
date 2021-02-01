import React from 'react'; 
import { Carousel } from "react-bootstrap"; 
import ListContainer from "../ListingContainer/ListContainer"; 

export default function ImageCarousel() {

    return (
        <div>
            <div>
                <ListContainer whichView="details"/>
            </div>
            <div className="carousel-container">
            <Carousel>
                <Carousel.Item >
                    <img className="d-block w-100" src="/assets/images/house1.jpg" alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/assets/images/house1.jpg" alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/assets/images/house1.jpg" alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}
