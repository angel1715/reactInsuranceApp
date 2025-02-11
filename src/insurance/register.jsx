import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import axios from "axios";
import { input } from "motion/react-client";
function Register() {
  let navigation = useNavigate();
  const [value, setValue] = useState("");
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    password: "",
    plan: "",
    device: "",
    claimAllowance: 0,
    numberOfClaim: 0,
  });

  const {
    fName,
    lName,
    phone,
    email,
    password,
    plan,
    device,
    claimAllowance,
    numberOfClaim,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.trim()});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = "https://insurance-app-backend-1c8dc914f428.herokuapp.com/auth/register";
    await axios.post(baseUrl, user);
    navigation("/login");
  };
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) { // Solo números
      setValue(newValue);
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

      <div className="container-fluid bg-primary form-container">
        <div className="container form-parent bg-light p-5 mt-5">
          <form onSubmit={(e) => onSubmit(e)}>
            <div class="mb-3">
              <label for="firstName" class="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control fs-5"
                id="firstName"
                required="true"
                value={fName}
                onChange={(e) => onInputChange(e)}
                name="fName"
              />
            </div>

            <div class="mb-3">
              <label for="lastName" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control fs-5"
                id="lastName"
                required="true"
                value={lName}
                onChange={(e) => onInputChange(e)}
                name="lName"
              />
            </div>

            <div class="mb-3">
              <label for="phone-number" class="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control fs-5"
                id="phone-number"
                max={10}
                min={0}
                maxLength={10}
                required="true"
                value={phone}
                onChange={(e) => handleChange(e)}
                name="phone"
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control fs-5"
                id="email"
                required="true"
                value={email}
                onChange={(e) => onInputChange(e)}
                name="email"
              />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control fs-5"
                id="password"
                required="true"
                value={password}
                onChange={(e) => onInputChange(e)}
                name="password"
              />
            </div>

            <label for="select">Select your plan</label>
            <br />
            <select
              className="form-select"
              value={plan}
              onChange={(e) => onInputChange(e)}
              name="plan"
            >
              <option className="selection">**Select a plan**</option>
              <option>Basic device protection</option>
              <option>Protection 360</option>
              <option>Premium care</option>
            </select>
            <br />

            <label for="select" className="select">
              Select your device
            </label>
            <br />
            <select
              className="form-select"
              id="select"
              value={device}
              onChange={(e) => onInputChange(e)}
              name="device"
            >
              <option className="selection">**Select a device**</option>
              <option>Samsung Galaxy Z Fold6 128GB Black</option>
              <option>Apple iPhone 16 256GB Black</option>
              <option>Apple iPhone 13 512GB Gray</option>
              <option>Apple iPhone 8 Plus 64GB Silver</option>
              <option>Google Pixel 6a 128GB Sage</option>
              <option>Google Pixel 9 128GB Green</option>
              <option>Google Pixel 9 Pro 128GB White</option>
              <option>Motorola edge 256GB Black</option>
              <option>Samsung Galaxy S10 Plus 512GB Blue</option>
              <option>Motorola G Play 32GB Black</option>
              <option>Apple iPhone 14 Plus 128GB Black</option>
              <option>Apple iPhone 12 256 GB Green</option>
              <option>Samsung Galaxy Z Flip 4 5G 1TB</option>
              <option>Samsung Galaxy Watch Active 2</option>
              <option>Apple Watch S5 45MM</option>
              <option>Apple Watch Wltra 9 44MM</option>
              <option>Apple iPad 12.9 64GB White</option>
              <option>One Plus Nord N200 5G 128GB Blue</option>
              <option>Samsung Galaxy Joy Tab 2 64GB Black</option>
              <option>Google Pixel 7 Pro 128GB White</option>
              <option>Apple iPhone SE 3RD GEN 64GB Back</option>
            </select>

            <div className="container text-center">
              <button type="submit" class="btn btn-dark submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
export default Register;
