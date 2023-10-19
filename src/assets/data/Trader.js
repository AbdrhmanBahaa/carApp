import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Trader = () => {
  const [traderId, traderIdChange] = useState("");
  const [traderName, traderNameChange] = useState("");
  const [traderPassword, traderPasswordChange] = useState("");
  const [traderEmail, traderEmailChange] = useState("");
  const [traderPhone, traderPhoneChange] = useState("");
  const [traderGarageAddress, traderGarageAddressChange] = useState("");
  const [traderCommercialRegistrationNo, traderCommercialRegistrationNoChange] = useState("");


  const navigate = useNavigate();

  const IsValidateInformation = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (traderId === null || traderId === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if ( traderName=== null || traderName === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if ( traderPassword=== null || traderPassword === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if ( traderEmail=== null || traderEmail === "") {
      isproceed = false;
      errormessage += " Email";
    }
    if ( traderGarageAddress=== null || traderGarageAddress === "") {
      isproceed = false;
      errormessage += " Trader Garage Address";
    }
    if (traderCommercialRegistrationNo=== null || traderCommercialRegistrationNo === "") {
      isproceed = false;
      errormessage += " Trader Commercial Registration Number";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(traderEmail)) {
      } else {
        isproceed = false;
        toast.warning("Please enter valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (t) => {
    t.preventDefault();
    let traderobj = {traderId,traderName ,traderPassword , traderEmail, traderPhone, traderGarageAddress,traderCommercialRegistrationNo};
    if (IsValidateInformation()) {
      console.log(traderobj);
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(traderobj),
      })
        .then((res) => {
          toast.success("The application is under review and will be approved as soon as possible");
          navigate("/home");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="Container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              {" "}
              <h1>Trader Register</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      User Name<span className="errmsg"></span>
                    </label>
                    <input value={traderId} onChange={t=>traderIdChange(t.target.value)} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Password<span className="errmsg"></span>
                    </label>
                    <input value={traderPassword} onChange={t=>traderPasswordChange(t.target.value)} type="password" className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {""}
                      Full Name<span className="errmsg"></span>
                    </label>
                    <input  value={traderName} onChange={t=>traderNameChange(t.target.value)} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Email<span className="errmsg"></span>
                    </label>
                    <input value={traderEmail} onChange={t=>traderEmailChange(t.target.value)}className="form-control"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    Phone<span className="errmsg"></span>
                  </label>
                  <input value={traderPhone} onChange={t=>traderPhoneChange(t.target.value)}className="form-control"></input>
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    Garage address<span className="errmsg"></span>
                  </label>
                  <input value={traderGarageAddress} onChange={t=>traderGarageAddressChange(t.target.value)} className="form-control"></input>
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    Commercial Registration No<span className="errmsg"></span>
                  </label>
                  <input value={traderCommercialRegistrationNo} onChange={t=>traderCommercialRegistrationNoChange(t.target.value)} className="form-control"></input>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register as Treder
              </button>
              |||
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
export default Trader;
