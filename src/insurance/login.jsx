import axios from "axios";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import miLogo from "../assets/userLogo.png";

function Login() {
  let navigation = useNavigate();

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [badCredential, setBadCredential] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const urlBase = "https://insurance-app-backend-1c8dc914f428.herokuapp.com/auth/login";
    const requestResult = await axios.post(
      `${urlBase}/${emailLogin}/${passwordLogin}`
    );
    console.log(requestResult.data);
    const { jwt, user } = requestResult.data;
    localStorage.setItem("jwt", jwt);

    setUser(user);
    if (!requestResult.data) {
      setBadCredential("Email or Password incorrect!");
    } else {
      navigation("/userInfo", {
        state: { user, jwt, passwordLogin, emailLogin },
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div className="container-fluid bg-dark p-2">
        <a class="navbar-brand text-white fs-3 px-4 logo" href="/">
          AG Tech Inc
        </a>
        <a className="home-register" href="/">
          <i class="fa-solid fa-house text-light"></i>
        </a>
      </div>
      <div className="login bg-primary">
        <div className="form-login-container bg-light">
          <div className="user-logo-container">
            <div className="user-logo text-center">
              <img src={miLogo} alt="logo of user" className="logo-img" />
            </div>
            <p className="text-center bad-credentials text-danger">
              {badCredential}
            </p>
          </div>
          <form className="login-form" onSubmit={(e) => handleLogin(e)}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="login-email-label">
                Email address
              </label>
              <input
                type="email"
                id="exampleInputEmail1"
                className="login-email-input"
                required="true"
                onChange={(e) => setEmailLogin(e.target.value.trim())}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="login-password-label">
                Password
              </label>
              <input
                type="password"
                id="exampleInputPassword1"
                className="login-password-input"
                required="true"
                onChange={(e) => setPasswordLogin(e.target.value.trim())}
              />
            </div>

            <button type="submit" className="login-button bg-dark text-light">
              Login
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
export default Login;
