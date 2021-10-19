import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img-1.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 img" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Royal Care Pharmacy</h3>
            <p>“Let food be thy medicine and medicine be thy food.” ...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Royal Care Pharmacy</h3>
            <p>“Always laugh when you can, it is cheap medicine.” ...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Royal Care Pharmacy</h3>
            <p>
              Isn't it a bit unnerving that doctors call what they do
              “practice”?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
