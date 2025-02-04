import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid div1">
          <a className="navbar-brand text-white fs-3 px-4 logo" href="">
            AG Tech Inc
          </a>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-white px-4 fs-5"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-4 fs-5" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-4 fs-5" href="/about">
                  About
                </a>
              </li>
            </ul>

            <div className="get-covered">
              <Link className="btn btn-lg btn-success sign-in" to="/login">
                Sign in
              </Link>

              <Link
                className="btn btn-lg btn-primary get-Covered-btn"
                to="/register"
              >
                Get covered
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
