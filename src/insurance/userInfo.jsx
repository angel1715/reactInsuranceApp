import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {motion} from "motion/react";
import axios from "axios";
function UserInfo() {
  const [usuarios, setUsuarios] = useState({});

  const location = useLocation();
  const { user, jwt, passwordLogin, emailLogin } = location.state || {};
  const navigate = useNavigate();

  const handleLogin = async () => {
    const urlBase = "https://insurance-app-backend-1c8dc914f428.herokuapp.com/auth/login";
    const requestResult = await axios.post(
      `${urlBase}/${emailLogin}/${passwordLogin}`
    );
    const { jwt, user } = requestResult.data;
    setUsuarios(user);
    let claimamount = user.numberOfClaim;
    let claimallowance = user.claimAllowance;
  };

  useEffect(() => {
    
    handleLogin();
   
  }, []);

  const fileclaim = async (e) => {
    e.preventDefault();

    const urlBase = "https://insurance-app-backend-1c8dc914f428.herokuapp.com/auth/login";
    const requestResult = await axios.post(
      `${urlBase}/${emailLogin}/${passwordLogin}`
    );
    const { jwt, user } = requestResult.data;

    let claimamount = user.numberOfClaim;
    let claimallowance = user.claimAllowance;

    if (claimamount < claimallowance) {
      navigate("/file-claim", {
        state: { user, jwt, passwordLogin, emailLogin },
      });
    } else {
      alert("You have reached your claim limit");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(jwt);
    sessionStorage.clear();
    window.location.href = "/login";
    window.history.replaceState(null, "", "/login");

    /*if (!localStorage.getItem(jwt)) {
      navigate("/login", { replace: true });
    }
      */
  };

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}>
      {/*
      <div className="container-fluid bg-dark nav-userinfo">
        <a class="navbar-brand text-white fs-3 px-4 logo-userinfo" href="/">
          AG Tech Inc
        </a>
        <a className="home-register" href="/">
          <i class="fa-solid fa-house text-light"></i>
        </a>
        <button
          className="btn claim-btn btn-success text-light"
          onClick={fileclaim}
        >
          File a Claim
        </button>
        <button className="btn btn-primary logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    */}

<nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid div1">
          <Link className="navbar-brand text-white fs-3 px-4 logo" to="/">
            AG Tech Inc
          </Link>
          <button
            className="navbar-toggler bg-white border-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse div2" id="navbarNav">
           
            <div className="get-covered">
              <Link className="btn btn-lg btn-success sign-in"
          onClick={fileclaim}>
                File a Claim
              </Link>

              <Link
                className="btn btn-lg btn-primary get-Covered-btn" onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="m-4 text-center">
        <h2>Coverage details</h2>
      </div>

      <div className="container coverage-container mb-5">
        <table className="table text-center table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Device</th>
              <th scope="col">Device number</th>
              <th scope="col">Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.fName}</td>
              <td>{user.lName}</td>
              <td>{user.device}</td>
              <td>{user.phone}</td>
              <td>{user.plan}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="m-4 text-center">
        <h2>Claim information</h2>
      </div>

      <div className="container">
        <table className="table text-center table-striped table-hover">
          <thead className="table-success">
            <tr>
              <th scope="col">Claim amount</th>
              <th scope="col">Remaining claims</th>
              <th scope="col">Claimed device</th>
              <th scope="col">Device number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{usuarios.numberOfClaim}</td>
              <td>{usuarios.claimAllowance - usuarios.numberOfClaim}</td>
              <td>{user.device}</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
export default UserInfo;
