const CarForm = () => {
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="Container">
          <div className="card">
            <div className="card-header">
              {" "}
              <h1>Car Information</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Marka<span className="errmsg"></span>
                    </label>
                    <input className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Preis<span className="errmsg"></span>
                    </label>
                    <input type="password" className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {""}
                      Motorleistung
                      <span className="errmsg"></span>
                    </label>
                    <input className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Drivetrain<span className="errmsg"></span>
                    </label>
                    <input className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Anzahl der Türen<span className="errmsg"></span>
                    </label>
                    <input className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Anzahl Sitzplätze<span className="errmsg"></span>
                    </label>
                    <input className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Hubraum<span className="errmsg"></span>
                    </label>
                    <input className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Telefon<span className="errmsg"></span>
                    </label>
                    <input className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Whatsapp<span className="errmsg"></span>
                    </label>
                    <input className="form-control"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    Arabisch wird untersucht<span className="errmsg"></span>
                  </label>
                  <div></div>
                  <input type="radio" value="Male" name="gender" /> Ja{" "}
                  <input type="radio" value="Female" name="gender" /> Nein{" "}
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    Autounfall<span className="errmsg"></span>
                  </label>
                  <div></div>
                  <input type="radio" value="Male" name="gender" /> Ja{" "}
                  <input type="radio" value="Female" name="gender" /> Nein{" "}
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    Fahrzeugstatus<span className="errmsg"></span>
                  </label>
                  <div></div>
                  <input type="radio" value="Male" name="gender" /> Normal{" "}
                  <input type="radio" value="Female" name="gender" /> gut{" "}
                  <input type="radio" value="Other" name="gender" /> Ausgezeichnet
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    Das Auto ist in der Schweiz oder importiert<span className="errmsg"></span>
                  </label>
                  <div></div>
                  <input type="radio" value="Male" name="gender" /> Schweiz{" "}
                  <input type="radio" value="Female" name="gender" /> importiert{" "}
                </div>
                <div className="contact__form">
                  <label>
                    {" "}
                    Notizen <span className="errmsg"></span>
                  </label>
                  <input className="form-control"></input>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                submit
              </button>{" "}
              |
              <a href="/home" className="btn btn-danger">
                Back
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarForm;
