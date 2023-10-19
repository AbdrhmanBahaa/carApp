import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

  const Vertrag = ()=>{

  return (
    <Container>
      <Row>
        <Col lg="12" md="12" sm="12">
          <div>
            <h1>VERTRAG</h1>
            <h3>**VERTRAG ÜBER DIE NUTZUNG VON FAHRZEUGINFORMATIONEN**</h3>
            <p>
              <p>Dieser Vertrag ("Vertrag") wird abgeschlossen zwischen:</p>
              <ol>
                <li>**DER DIENSTLEISTER**:</li>
                <ol>
                  {" "}
                  Verkauf.ch by Eliekhudari, im Folgenden als "Dienstleister"
                  bezeichnet, Adresse: [Adresse des Dienstleisters]
                </ol>
                <li>**DER HÄNDLER**:</li>
                <ol>
                  Jeder Autohändler, der sich auf der Website registriert, im
                  Folgenden als "Händler" bezeichnet.
                </ol>
              </ol>
            </p>
            <p>
              <ol>
                <li>
                  <h6>Gemeinsam als "Vertragsparteien" bezeichnet.</h6>
                </li>

                <ol>
                  1.1. Der Dienstleister betreibt eine Website, auf der
                  Autoverkäufer ihre Fahrzeuge zum Verkauf anbieten können.
                </ol>
                <ol>
                  1.2. Der Händler möchte die Möglichkeit erhalten,
                  Informationen zu den auf der Website des Dienstleisters
                  aufgeführten Fahrzeugen zu erhalten und diese in Reservierung
                  zu halten, um sie zu einem späteren Zeitpunkt zu kaufen.
                </ol>
                <li>**ZAHLUNG UND GEBÜHREN**</li>

                <ol>
                  2.1. Der Händler erklärt sich damit einverstanden, dem
                  Dienstleister eine nicht erstattungsfähige Gebühr von 300 CHF
                  (ohne Steuern) plus zusätzlich 7,5% für die Mehrwertsteuer für
                  jede Reservierung eines Fahrzeugs zu zahlen.
                </ol>
                <ol>
                  2.2. Der Händler muss bei der Registrierung eine Kaution von
                  mindestens 10.000 CHF hinterlegen, die vom Dienstleister
                  verwaltet wird. Diese Kaution wird verwendet, um die
                  Website-Gebühren zu decken, sobald der Händler ein Fahrzeug
                  reserviert oder in Reserve nimmt.
                </ol>
                <ol>
                  2.3. Der Händler stimmt zu, dass die Kaution oder der
                  verbleibende Betrag davon für einen Zeitraum von 12 Monaten
                  nicht abgehoben werden kann.
                </ol>
                <ol>
                  2.4. Der Händler verpflichtet sich, die Kaution erneut
                  aufzufüllen, sobald der verbleibende Betrag weniger als 5000
                  CHF beträgt.
                </ol>
                <li>**NUTZUNGSRECHTE**</li>
                <ol>
                  3.1. Dem Händler wird das Recht eingeräumt, die Informationen
                  zu den reservierten Fahrzeugen ausschließlich für den
                  persönlichen Gebrauch und die mögliche Kaufentscheidung zu
                  verwenden.
                </ol>
                <ol>
                  3.2. Der Händler darf die Informationen nicht an Dritte
                  weitergeben oder für andere Zwecke als den potenziellen Kauf
                  der reservierten Fahrzeuge verwenden.
                </ol>
                <ol>
                  3.3. Der Händler verpflichtet sich, die Login-Informationen
                  und Passwörter sowie die Informationen über Fahrzeughalter
                  privat und sicher aufzubewahren und nicht mit Dritten zu
                  teilen.
                </ol>
                <li>**HAFTUNGSAUSSCHLUSS**</li>

                <ol>
                  4.1. Der Dienstleister übernimmt keine Haftung für die
                  Richtigkeit oder Vollständigkeit der auf der Website
                  angezeigten Fahrzeuginformationen.
                </ol>

                <ol>
                  4.2. Der Händler versteht und akzeptiert, dass der
                  Dienstleister nicht für Transaktionen zwischen dem Händler und
                  dem Autoverkäufer haftet.
                </ol>
                <li>**DATENSCHUTZ**</li>
                <ol>
                  5.1. Der Dienstleister verpflichtet sich, die
                  Datenschutzbestimmungen gemäß den geltenden Gesetzen und
                  Vorschriften einzuhalten.
                </ol>
                <ol>
                  5.2. Der Händler erklärt sich damit einverstanden, dass seine
                  personenbezogenen Daten für die Zwecke dieses Vertrags
                  verwendet werden dürfen.
                </ol>
                <li>**STRAFE UND BEENDIGUNG**</li>
                <ol>
                  6.1. Im Falle eines Missbrauchs der Dienste durch den Händler
                  behält sich der Dienstleister das Recht vor, die Registrierung
                  des Händlers zu stornieren, den Händler von der Nutzung der
                  Website auszuschließen und die Kaution zu behalten, ohne sie
                  zurückzuerstatten.
                </ol>
                <ol>
                  6.2. Der Händler stimmt zu, im Falle eines Verstoßes gegen
                  diesen Vertrag eine Strafgebühr von 500.000 CHF an den
                  Dienstleister zu zahlen, sowie sämtliche Gerichts- und
                  Anwaltsgebühren, die im Zusammenhang mit dem Verstoß
                  entstehen.
                </ol>
                <li>**GERICHTSSTAND UND ANWENDBARES RECHT**</li>
                <ol>
                  Dieser Vertrag unterliegt dem schweizerischen Recht. Alle
                  Streitigkeiten aus diesem Vertrag werden vor dem zuständigen
                  Gericht am Sitz des Dienstleisters ausgetragen.
                </ol>
                <li>**AKZEPTANZ**</li>
                <ol>
                  Durch die Registrierung als Händler auf der Website,
                  Bereitstellung der erforderlichen Kaution und Nutzung der
                  Website erklärt sich der Händler mit den in diesem Vertrag
                  festgelegten Bedingungen, einschließlich der Strafklausel,
                  einverstanden.
                </ol>
              </ol>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Vertrag;

