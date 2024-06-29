import React from "react";
import Carousel from "react-bootstrap/Carousel";
import furniture1 from "../../../images/furniture1.jpeg";
import furniture2 from "../../../images/furniture2.jpeg";
import furniture3 from "../../../images/furniture3.jpeg";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import "./Slider.css";
const Simpleslider = () => {
  return (
    <>
     <div className="main-div">
      <Carousel style={{ backgroundColor: "#000000" }} >
       
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={furniture1} alt="First slide" />

          <Carousel.Caption bsPrefix="my-carousel-caption" >
            <h2 style={{ fontWeight: "bolder", fontSize: "2.7vmax",color:"white" }} className="carousel-h2">
              #1 Furniture Rent Service In Your City
            </h2>
            <p  className="carousel-para">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <div>
              <Link to='/furnitures'>
                  <button className="carousel-button">Book Now</button>
              </Link>  
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={furniture2} alt="Second slide" />
          <Carousel.Caption bsPrefix="my-carousel-caption">
            <h2 style={{ fontWeight: "bolder", fontSize: "2.7vmax",color:"black" }} className="carousel-h2">
              Quality Furnitures with Unlimited Miles
            </h2>
            <p  className="carousel-para">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <div>
              <Link to='/cars'>
                  <button className="carousel-button">Book Now</button>
              </Link>  
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={furniture3} alt="Third slide" />
          <Carousel.Caption bsPrefix="my-carousel-caption">
            <h2 style={{ fontWeight: "bolder", fontSize: "2.7vmax",color:"black" }} className="carousel-h2">
              24/7 Customer Support Guarantee  
            </h2>

            <p className="carousel-para">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
           
            <div>
              <Link to='/cars'>
                  <button className="carousel-button">Book Now</button>
              </Link>  
            </div>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    </div>
    </>
  );
};

export default Simpleslider;
