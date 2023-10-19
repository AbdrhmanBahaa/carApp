import React from "react";
import CompanysSection from "../components/UI/CompanySection";
import CompanySlid from "../components/UI/CompanySlid";


const CompanysSection = ({ companyClass }) => {
  return (
    <Helmet title="Company">
    <section
      className="company__section"
      style={
        companyClass === "companyPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
          
      }
    >
      <Container>
        <Row>
          
          <Col lg="12" md="12">
            <div className="company__section-content">
              <div className="company__page-img"style={{ width: "100%" }} >
              </div>
              <div className="company__section__description">
              
              <p className="companyــsection__description">
                <b>
              Wenn Sie den zeitaufwändigen und fragmentierten Prozess der individuellen Kontaktaufnahme mit mehreren Händlern satt haben, haben wir die perfekte Lösung für Sie.
              </b>
                </p>
                
                <p className="company__section__description" >
              Wir verstehen die Herausforderungen und Komplexitäten, mit denen Unternehmen beim Verkauf ihrer Fahrzeugflotte konfrontiert sind. 
              Die Koordination mit zahlreichen Händlern, die Aushandlung separater Geschäfte und die Verwaltung der Logistik können überwältigend und ineffizient sein.
                </p>
                <p className="company__section__description">  
                <b>Mit unserem innovativen Ansatz rationalisieren wir den gesamten Prozess, </b>indem wir Ihnen eine zentrale Plattform bieten, über die Sie sich mit einem breiten Netzwerk vertrauenswürdiger Autohändler verbinden können, die bereit und begierig sind, 
                Ihre gesamte Flotte zu kaufen.
                </p>
                
              
                <div className="company__section__description d-flex align-items-center" style={{justifyContent: 'left',}}>                            
                <p className="company__section__description d-flex align-items-center gap-1">
                  <i class="ri-checkbox-circle-line"></i> Stellt unsere Plattform sicher, dass Sie wettbewerbsfähige Angebote von unserem 
                  Netzwerk seriöser Autohändler erhalten und so den Wert Ihrer Flotte maximieren.
                </p>               
              </div>
              <div className="company__section__description d-flex align-items-center" style={{justifyContent: 'left',}}>                            
                <p className="company__section__description d-flex align-items-center gap-1">
                  <i class="ri-checkbox-circle-line"></i> Genissen Sie den Komfort einer vereinfachten Transaktion, sodass Sie nicht mit mehreren Parteien verhandeln müssen.
                </p>               
              </div>
              <div className="company__section__description d-flex align-items-center" style={{justifyContent: 'left',}}>                            
                <p className="company__section__description d-flex align-items-center gap-1">
                  <i class="ri-checkbox-circle-line"></i> Sicherer und transparenter Flottenverkauf auf unserer Plattform.
                </p>               
              </div>
              </div>

              <div><p className="company__section__description">
              Erleben Sie die Effizienz, den Komfort und die Sicherheit, die eine Zusammenarbeit mit uns mit sich bringt. Wir sind bestrebt, herausragenden Service zu bieten und Ihnen dabei zu helfen, das bestmögliche Ergebnis für Ihren Flottenverkauf zu erzielen.
              Verschwenden Sie keine Zeit und Ressourcen mehr mit fragmentierten Flottenverkäufen.
              </p>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
    </Helmet>
    
  );
};

export default CompanysSection;
