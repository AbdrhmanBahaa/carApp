import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import driveImg from "../assets/all-images/slider-img/slider-2.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Smart and easy Solutions
                </h2>

                <p className="section__description">
                  Es war einmal eine Zeit in der, der Verkauf der Verkauf deines
                  Autos eine stressige Angelegenheit. Es erforderte
                  stundenlanges Suchen nach potenziellen Käufern, Verhandlungen
                  mit Fremden und die Unsicherheit, ob du den besten Preis
                  erzielen würdest. Der Prozess raubte dir Zeit und Energie und
                  hinterließ dich frustriert. Doch dann kam eine Lösung auf den
                  Markt - eine Plattform, die den Verkauf deines Autos zum
                  Kinderspiel macht. Willkommen in unserer Welt, wo wir die
                  Herausforderungen verstehen, vor denen du stehst, wenn du dich
                  von deinem geliebten Fahrzeug trennen möchtest. Unsere Mission
                  ist es, dir von Anfang an eine stressfreie und lohnende
                  Erfahrung zu bieten. Mit unserem Service kannst du dein Auto
                  mühelos zum Verkauf anbieten, ohne stundenlang Anzeigen zu
                  verfassen oder verzweifelt potenzielle Käufer zu erreichen.
                  Wir bieten eine einfache und benutzerfreundliche Oberfläche,
                  auf der du die Daten deines Autos schnell und genau eingeben
                  kannst.
                </p>

                <p className="section__description">
                  Das Beste daran? Es ist komplett kostenlos. Du kannst die
                  Vorteile unserer Plattform geniessen, ohne versteckte Gebühren
                  oder Kosten. Wir sind der Überzeugung, dass der Verkauf deines
                  Autos keine finanzielle Belastung mit sich bringen sollte.
                  Deshalb haben wir es uns zur Aufgabe gemacht, dir einen
                  kostenlosen Service anzubieten. Aber damit nicht genug. Wir
                  gehen noch einen Schritt weiter, um sicherzustellen, dass du
                  den besten Preis für dein Auto erhältst. Wir verwenden
                  fortschrittliche Algorithmen, um den Preis deines Autos mit
                  den aktuellen Markttrends zu vergleichen und zu bewerten. Auf
                  diese Weise kannst du sicher sein, dass du einen
                  wettbewerbsfähigen Preis setzt, der potenzielle Käufer anzieht
                  und gleichzeitig deinen Gewinn maximiert.
                </p>
                <p className="section__description">
                  Sobald dein Auto gelistet ist, verbinden wir dich mit unserem
                  Netzwerk vertrauenswürdiger Autohändler, die darum
                  konkurrieren, dir den besten Preis anzubieten. Kein lästiges
                  Feilschen oder Zweifeln, ob du einen fairen Deal bekommst.
                  Unsere Händler bieten wettbewerbsfähige Angebote, sodass du
                  den bestmöglichen Wert für dein Fahrzeug erhältst. Wir kümmern
                  uns um die Logistik. Sobald du ein Angebot annimmst,
                  übernehmen wir die gesamte Organisation der Abholung. Du musst
                  dir keine Sorgen machen, Termine abzustimmen oder den
                  Transport zu organisieren. Unser Team sorgt für eine
                  reibungslose und bequeme Übergabe deines Fahrzeugs an deinem
                  bevorzugten Ort.
                </p>
                <p className="section__description">
                  Warum also Stress beim Verkauf deines Autos, wenn es einen
                  besseren Weg gibt? Nutze unsere stressfreie Plattform, auf der
                  das Ausfschalten deines Autos zum Kinderspiel wird und die
                  Vorteile zahlreich sind. Erfahre die Gelassenheit, zu wissen,
                  dass du die Kontrolle hast, den besten Preis erhältst und
                  einen kostenlosen Service geniesst. Schließe dich uns noch
                  heute an und entdecke die Freude am Verkauf deines Autos ohne
                  Stress. Gemeinsam machen wir deine Autoverkaufsreise zu einer
                  reibungslosen und belohnenden Erfahrung.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                  
                    <h6 className="section__subtitle">
                      Kontaktieren Sie uns an
                    </h6>
                  
                    <h4>+41763680008</h4>
                    
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
