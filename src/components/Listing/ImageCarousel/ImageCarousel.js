import React from 'react'; 
import { Carousel } from "react-bootstrap"; 

export default function ImageCarousel() {

    return (
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
    )
}
