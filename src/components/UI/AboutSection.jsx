import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "270px" }
      }
    >
      <Container>
        <Row>
          <Col lg="12" md="12">
            <div className="about__section-content-contairner">
              <div className="about__section__paragraph">
                <p className="section__description">
                  Wir sind eine Kostenlose Online-Plattform, auf der Sie Ihr
                  Auto privat anbieten und es nur Autohändlern zeigt, die um den
                  Kauf konkurrieren und Ihnen den besten Preis zahlen
                </p>
                <div
                  className="about__section-item d-flex align-items-center"
                  style={{ justifyContent: "" }}
                >
                  <div className="left-p-container">
                    <p className="section__description d-flex align-items-center gap-1">
                      <i class="ri-checkbox-circle-line"></i> Kostenlose
                      Auflistung, kostenloser Verkauf
                    </p>
                    <p className="section__description d-flex align-items-center gap-1">
                      <i class="ri-checkbox-circle-line"></i> Zum Top Preis
                      verkaufen
                    </p>
                    <p className="section__description d-flex align-items-center gap-1">
                      <i class="ri-checkbox-circle-line"></i> Hohem Datenschutz
                    </p>
                  </div>
                  <div className="right-p-container">
                    <p className="section__description d-flex align-items-center gap-1">
                      <i class="ri-checkbox-circle-line"></i> Kostenlose
                      Wertermittlung für Ihr Auto
                    </p>
                    <p className="section__description d-flex align-items-center gap-1">
                      <i class="ri-checkbox-circle-line"></i> Stornierung
                      jederzeit möglich
                    </p>
                    <p className="section__description d-flex align-items-center gap-1">
                      <i class="ri-checkbox-circle-line"></i> Schnell verkaufen
                    </p>
                  </div>
                </div>

                <div>
                  <p className="section__description">
                    Sie müssen keine Zeit und Energie damit verschwenden,
                    potenzielle Käufer zu suchen oder mit mehreren Parteien zu
                    verhandeln. Verkaufen Sie Ihr Auto stressfrei an
                    vertrauenswürdige Autohändler
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
