import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";


import "../../styles/company-slid.css";

const CompanySlid = () => {

  return (
    <Slider className="company__slider">
      <div className="slider__item slider__item-001 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-4">Effizienter  </h1>
            <h1 className="text-light mb-4">Flottenverkauf </h1>
            <h1 className="text-light mb-4"> ohne Aufwand</h1>
            <h3 className="text-light mb-4"><b>Kontaktieren Sie uns an +41763680008</b></h3>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default CompanySlid;
