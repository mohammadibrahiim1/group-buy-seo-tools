import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* <a href="https://ibb.co/7pjP0Rm"><img src="https://i.ibb.co/5jGmJnH/seo-search-symbol.png" alt="seo-search-symbol" border="0"></a> */}
      <section className="navbar-container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <Link class="navbar-brand" href="#">
              <img
                src="https://i.ibb.co/5jGmJnH/seo-search-symbol.png"
                style={{ width: "52px", height: "52px" }}
                alt=""
              />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="#">
                    Tools List
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link">FAQ</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link">Contact Us</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link">Client Area</Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
