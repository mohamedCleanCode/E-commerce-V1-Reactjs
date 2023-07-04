import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/images/slider/1.png";
import slider2 from "../../assets/images/slider/2.png";
import slider3 from "../../assets/images/slider/3.png";
import slider4 from "../../assets/images/slider/4.png";
import slider5 from "../../assets/images/slider/5.png";
import slider6 from "../../assets/images/slider/6.png";
import slider7 from "../../assets/images/slider/7.png";

const Slider = () => {
  return (
    <div className="slider" style={{ height: "50vh" }}>
      <Carousel className="h-100" interval={1000}>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={slider1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={slider2} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={slider3} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={slider4} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={slider5} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={slider6} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={slider7} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
