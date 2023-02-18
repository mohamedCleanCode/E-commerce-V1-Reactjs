import React from "react";
import { Carousel } from "react-bootstrap";
import pord3 from "../../assets/images/prod3.png";
import pord4 from "../../assets/images/prod4.png";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider4.png";

const Slider = () => {
  return (
    <div className="slider" style={{ height: "50vh" }}>
      <Carousel className="h-100" interval={1000}>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={slider1} alt="First slide" />
            <Carousel.Caption>
              <h3>there are a huge discount</h3>
              <p>arrive to 50% when you subscripe</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={slider2} alt="Second slide" />
            <Carousel.Caption>
              <h3>there are a huge discount</h3>
              <p>arrive to 50% when you subscripe</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={pord3} alt="Third slide" />
            <Carousel.Caption>
              <h3>there are a huge discount</h3>
              <p>arrive to 50% when you subscripe</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <div>
            <img className="d-block w-100" src={pord4} alt="Third slide" />
            <Carousel.Caption>
              <h3>there are a huge discount</h3>
              <p>arrive to 50% when you subscripe</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
