import React from "react";
import case_one from "../images/Mask group.png";
import case_two from "../images/Mask group (1).png";
import case_three from "../images/Mask group (2).png";

export default function Case() {
  return (
    <>
      <div className="case-body" id="case-studies">
        <div className="container">
          <div className="head">
            <h2>Case Studies</h2>
            <p className="case-text">
              Solving user &amp; business problems since last 15+ years.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row case-main">
            <div className="col-md-6 case-section">
              <span className="span-button">Fintech</span>
              <h3>Work name here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <button className="btn btn-warning button-main">
                view case study <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
            <div className="col-md-6 case-images">
              <img src={case_one} className="img-fluid" />
            </div>
            <div className="col-md-6 order-sx-2 case-images">
              <img src={case_two} className="img-fluid" />
            </div>
            <div className="col-md-6 order-sx-1 case-section">
              <span className="span-button">Edtech</span>
              <h3>Work name here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <button className="btn btn-primary button-one">
                view case study <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
            <div className="col-md-6 case-section">
              <span className="span-button">Pharma</span>
              <h3>Work name here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <button className="btn btn-success button-two">
                view case study <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
            <div className="col-md-6 case-images">
              <img src={case_three} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
