import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import Gallary from "../assets/data/Gallary";

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              {/* <img src={singleCarItem.imgUrl} alt="" className="w-100" /> */}
              {/* <imageGallary /> */}
              <div className="w-100"></div>
              <Gallary />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.price} dollar
                  </h6>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-roadster-" style={{ color: "#000000" }}>
                      Model
                    </i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-settings-2-lin" style={{ color: "#000000" }}>
                      {" "}
                      Engine Capacity
                    </i>{" "}
                    {singleCarItem.engineCapacity}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-timer-flash-lin" style={{ color: "#000000" }}>
                      Number of Doors
                    </i>{" "}
                    {singleCarItem.numberOfDoors}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.9rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-lin" style={{ color: "#000000" }}>
                      Drivetrain Type
                    </i>{" "}
                    {singleCarItem.drivetrain}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-wheelchair-lin" style={{ color: "#000000" }}>
                      enginePower
                    </i>{" "}
                    {singleCarItem.enginePower}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-building-2-lin" style={{ color: "#000000" }}>
                      numberOfSeats
                    </i>{" "}
                    {singleCarItem.numberOfSeats}
                  </span>
                </div>
                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-roadster-" style={{ color: "#000000" }}>
                      Car checked
                    </i>{" "}
                    {singleCarItem.theCcarIsChecked}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-settings-2-lin" style={{ color: "#000000" }}>
                      {" "}
                      Car Accident
                    </i>{" "}
                    {singleCarItem.carAccident}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-timer-flash-lin" style={{ color: "#000000" }}>
                      Car Condition
                    </i>{" "}
                    {singleCarItem.carCondition}
                  </span>
                </div>
                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-roadster-" style={{ color: "#000000" }}>
                      The car is swiss or imported
                    </i>{" "}
                    {singleCarItem.TheCarIsSwissOrImported}
                  </span>
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-roadster-" style={{ color: "#000000" }}>
                      Contact Information
                    </i>{" "}
                    {singleCarItem.phoneNumber}
                  </span>
                </div>
                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span>
                    <button
                      className="car__hold"
                      style={{
                        padding: "5px 60px",
                        background: "#435089",
                        color: "#fff",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Hold
                    </button>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
