import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [address, addresschange] = useState("");
  const [phone, phonehange] = useState("");
  //

  const navigate = useNavigate();
  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += "  ,Fullname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " ,Password";
    }
    if(phone=== null ||phone==="") {
      isproceed=false;
      errormessage+=" Phone";
    }
    
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " ,Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter a valid email");
      }
    }
    return isproceed;
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone, address };
    // console.log(regobj);
    if (IsValidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="Container" onSubmit={handelsubmit}>
          <div className="card">
            <div className="card-header">
              {" "}
              <h1>User Register as a seller</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      User Name<span className="errmsg"></span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Password<span className="errmsg"></span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {""}
                      Full Name<span className="errmsg"></span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      Email<span className="errmsg"></span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    Phone<span className="errmsg"></span>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => phonehange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    kanton<span className="errmsg"></span>
                  </label>
                  <input
                    value={address}
                    onChange={(e) => addresschange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>{" "}
              |
              <a href="/home" className="btn btn-danger">
                Back
              </a>
              ||
              <Link to ='/trader'>
              <button type="submit" className="btn btn-danger">
                Register as Treder
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
