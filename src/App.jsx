import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./insurance/Home.jsx";
import Register from "./insurance/register.jsx";
import Login from "./insurance/login.jsx";
import UserInfo from "./insurance/userInfo.jsx";
import FileClaim from "./insurance/fileClaim.jsx";
import Services from "./insurance/services.jsx";
import About from "./insurance/about.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/file-claim" element={<FileClaim />} />
          <Route exact path="/userInfo" element={<UserInfo />} />
          <Route exact path="/services" element={<Services />}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
