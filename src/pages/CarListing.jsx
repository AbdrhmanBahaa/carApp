import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By 
                </span>

                <select>
                  <option>price</option>
                  <option value="low">Low </option>
                  <option value="high">High </option>
                </select>
                <select>
                  <option>marka</option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                  <option value="low">bmw </option>
                  <option value="high">marced </option>
                </select>

                <select>
                  <option>Body Type</option>
                  <option value="coupe">COUPE</option>
                  <option value="sedan">SEDAN</option>
                  <option value="hatch">HATCH</option>
                  <option value="wagon">WAGON</option>
                  <option value="suv">SUV</option>
                  <option value="pickup">PICKUP</option>
                  <option value="minivan">MINIVAN</option>
                </select>
               
               
                <button
                      className="car__hold"
                      style={{
                        padding: "5px 60px",
                        background: "#E39A66",
                        color: "black",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Apply
                    </button>

              </div>
              



            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
