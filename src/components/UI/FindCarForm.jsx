import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";


const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <h6>Brand</h6>
          <input type="" placeholder="carmake"  />
        </FormGroup>

        <FormGroup className="form__group">
          <h6>Modell</h6>
          <input type="text" placeholder="Modell"  />
        </FormGroup>

        <FormGroup className="form__group">
          <h6>Version</h6>
          <input type="text" placeholder="version"  />
        </FormGroup>

        <FormGroup className="form__group">
          <Link to='/carform'>
          <button  className="btn find__car-btn">Weiter &raquo;</button>
          </Link>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
