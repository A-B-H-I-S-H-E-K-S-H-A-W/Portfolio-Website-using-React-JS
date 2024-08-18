import React from "react";
import heroImage from "../images/Photo here.png";
import logo_one from "../images/Logo 1.png";
import logo_two from "../images/Logo 2.png";
import logo_three from "../images/Logo 3.png";
import logo_four from "../images/Logo 4.png";
import logo_five from "../images/Logo 5.png";

export default function Hero() {
  return (
    <>
      <div className="top-body">
        {/* Navbar Section */}
        <nav
          className="navbar navbar-expand-sm navbar-dark navbar-main"
          id="home"
        >
          <div className="container">
            <p className="navbar-brand">
              <i className="fa-solid fa-user-tie" />
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav mx-auto nav-links col">
                <li className="nav-item">
                  <a className="nav-link mx-4" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="#case-studies">
                    Case Studies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="#testimonals">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="#recent-work">
                    Recent Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="#get-in-touch">
                    Get in touch
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto nav-icons">
                <li className="nav-item">
                  <i className="fa-brands fa-linkedin-in" />
                </li>
                <li className="nav-item">
                  <i className="fa-brands fa-behance" />
                </li>
                <li className="nav-item">
                  <i className="fa-brands fa-twitter" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar Section Ends */}
        {/* Hero Section */}
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-6 hero">
                <h1 className="hero-heading">Your Name Here</h1>
                <p className="hero-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores debitis saepe corporis cumque quidem aliquid, iste
                  velit ipsam fugit maxime impedit eligendi nam eius, itaque
                  delectus, non quos ratione minima.
                </p>
                <button className="btn btn-success start-button">
                  Let's Get Started <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
              <div className="col-md-6 hero-image">
                <img src={heroImage}/>
              </div>
              <div className="work">
                <p>Worked with</p>
              </div>
              <div className="row worked">
                <div className="col-md-2 col">
                  <img src={logo_one} />
                </div>
                <div className="col-md-2 col">
                  <img src={logo_two} />
                </div>
                <div className="col-md-2 col">
                  <img src={logo_three} />
                </div>
                <div className="col-md-2 col">
                  <img src={logo_four} />
                </div>
                <div className="col-md-2 col">
                  <img src={logo_five} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section Ends */}
      </div>
    </>
  );
}
