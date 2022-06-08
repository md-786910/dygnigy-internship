import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar " style={{ backgroundColor: "#781C68" }}>
        <div className="container-fluid ">
          <div className="d-flex  align-items-center">
            <Link to="/" className="navbar-brand">
              <h3 style={{ color: "white", fontWeight: "bold" }}>dygnify</h3>
            </Link>

            <Link to="/profile" className="">
              <button className="navbar-toggler bg-white" type="button">
                <i class="fa-solid fa-user"></i>
              </button>
            </Link>
          </div>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div
              className="offcanvas-header"
              style={{ backgroundColor: "#781C68" }}
            >
              <h5
                className="offcanvas-title fw-bold text-white"
                id="offcanvasNavbarLabel"
              >
                dygnify
              </h5>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
              </ul>
              <form className="d-flex mt-4" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
