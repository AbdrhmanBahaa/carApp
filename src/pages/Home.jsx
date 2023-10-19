import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import Testimonial from "../components/UI/Testimonial";
import carSolded from "../assets/data/carSolded";
import CarItemSold from "../components/UI/CarItemSold";
// import CompanysSection from "../components/UI/CompanySection";
import CompanySlid from "../components/UI/CompanySlid";
import BootstrapCarousel from "../assets/data/BootstrapCarousel";
// import Register from "../assets/data/Register";
// import ProductPage from "../components/UI/ProductPage";
// import Gallary from "../assets/data/Gallary";
// import Dotted from "../components/UI/Dotted";
// import Privacy from "../assets/data/Privacy";



const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Einfach Verkaufen</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              
              <h2 className="section__title">Wie es Funktioniert</h2>
            </Col>
            <ServicesList />

            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title">Listen Sie Ihr Auto Gratis</h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">our</h6>
              <h2 className="section__title">solded Offers</h2>
            </Col>
            {carSolded.slice(0, 9).map((item) => (
              <CarItemSold item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== video slider section =========== */}
      <BootstrapCarousel />
      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
           
      
    </Helmet>
  );
};

export default Home;
