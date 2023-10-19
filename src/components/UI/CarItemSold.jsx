import React from "react";
import { Col } from "reactstrap";
// import { Link } from "react-router-dom";
import "../../styles/car-item-sold.css";

const CarItemSold = (props) => {
  const { imgUrl, carName } = props.item;

  return (
 
    <Col lg="4" md="4" sm="6" className="mb-5 car-item-wrapper">
       
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            <span>sold</span>
          </h6>
        </div>
      </div>
     
    </Col>
  
 
  );
};

export default CarItemSold;
