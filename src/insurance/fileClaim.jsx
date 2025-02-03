import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function FileClaim() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, passwordLogin, jwt } = location.state || {};
  const [usuarios, setUsuarios] = useState(user);
  const [message, setMessage] = useState("Claim Submitted Successfully");
  const [style, setStyle] = useState({});

  const handleLogin = async () => {
    const urlBase = "http://localhost:8080/auth/login";
    const requestResultLogin = await axios.post(
      `${urlBase}/${emailLogin}/${passwordLogin}`
    );
    const { jwt, user } = requestResultLogin.data;

    
    setUsuarios(user);
  };

  useEffect(() => {

    handleLogin();
    
  }, []);

  //function to display the message, when the claim is submitted
  const displayMessage = () => {
    setStyle({ display: "block" });
    setTimeout(function () {
      window.history.back();
    }, 2000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const baseURL = "http://localhost:8080/auth/fileClaim";
    const requestResult = await axios.put(`${baseURL}/${passwordLogin}`, user);
    const usuario = requestResult.data;
    

    if(usuario === "You've reached your claim limit"){
      alert("You've reached your claim limit");
      
    }
    else{
      displayMessage();
    }
    
    /*
    if(usuario.numberOfClaim < usuario.claimAllowance){
   
      setTimeout(displayMessage, 1000);
    }
    else{
      alert("You have reached your claim limit");
    }
    */
  };

  const goBack = () => {
    if (confirm("Are you sure you want to leave")) {
      window.history.back();
    }
  };

  return (
    <>
      <div className="container-fluid bg-dark p-2">
        <a class="navbar-brand text-white fs-3 px-4 logo" href="/">
          AG Tech Inc
        </a>
        <a className="home-register" href="/">
          <i class="fa-solid fa-house text-light"></i>
        </a>
        <button
          className="btn btn-md back-to-dashboard btn-light"
          onClick={(e) => goBack()}
        >
          Back
        </button>
      </div>

      <div className="container-fluid bg-primary form-container">
        <div
          className="container message-coitainer text-center bg-light"
          style={style}
        >
          <p className="claim-message">
            {message}{" "}
            <i class="fa-solid fa-check claim-submition-check text-success"></i>
          </p>
        </div>
        <div className="container form-parent bg-light p-5 mt-5">
          <form onSubmit={(e) => onSubmit(e)}>
            <label>Select type of incident</label>
            <br></br>
            <div className="type-of-incident-container">
              <label for="physical-damage" className="form-label">
                <input
                  type="radio"
                  id="physical-damage"
                  required="true"
                  name="incident"
                />{" "}
                Physical damage
              </label>

              <label for="missing" class="form-label">
                <input
                  type="radio"
                  id="missing"
                  required="true"
                  name="incident"
                />{" "}
                Missing
              </label>

              <label for="theft" class="form-label">
                <input
                  type="radio"
                  id="theft"
                  required="true"
                  name="incident"
                />{" "}
                Theft
              </label>
            </div>

            <div className="incident-date-container">
              <label for="lastName" class="form-label">
                Select date of incident
              </label>
              <input
                type="date"
                className="form-control fs-5"
                id="lastName"
                required="true"
                name="lName"
              />
            </div>

            <label>Who was using the device at the time of incident</label>
            <br></br>
            <div className="device-user-container">
              <label for="me" className="form-label">
                <input
                  type="radio"
                  id="me"
                  required="true"
                  name="device-user"
                />{" "}
                Me
              </label>

              <label for="relative" class="form-label">
                <input
                  type="radio"
                  id="relative"
                  required="true"
                  name="device-user"
                />{" "}
                Relative
              </label>

              <label for="friend" className="form-label">
                <input
                  type="radio"
                  id="friend"
                  required="true"
                  name="device-user"
                />{" "}
                Friend
              </label>
            </div>

            <div className="description-container">
              <label className="mb-2">
                Please provide a brief description of the incident
              </label>
              <br></br>
              <textarea cols={40} rows={5}></textarea>
            </div>

            <div className="container text-center">
              <button type="submit" class="btn btn-dark submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default FileClaim;
