import React from "react";
import client_one from "../images/Client photo 1.png";
import client_two from "../images/Client photo 2.png";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials" id="testimonals">
        <div className="container">
          <div className="head">
            <h2>Testimonials</h2>
            <p className="case-text">
              Solving user &amp; business problems since last 15+ years.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-main">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque, impedit voluptatum, accusamus delectus neque
                  accusantium voluptatibus asperi sunt earum debitis consequatur
                  perferendis.
                </p>
                <div className="card-low">
                  <img src={client_one} />
                  <h4>Client Name</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-main">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque, impedit voluptatum, accusamus delectus neque
                  accusantium voluptatibus asperi sunt earum debitis consequatur
                  perferendis.
                </p>
                <div className="card-low">
                  <img src={client_two} />
                  <h4>Client Name</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-main">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque, impedit voluptatum, accusamus delectus neque
                  accusantium voluptatibus asperi sunt earum debitis consequatur
                  perferendis.
                </p>
                <div className="card-low">
                  <img src={client_two} />
                  <h4>Client Name</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-main">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque, impedit voluptatum, accusamus delectus neque
                  accusantium voluptatibus asperi sunt earum debitis consequatur
                  perferendis.
                </p>
                <div className="card-low">
                  <img src={client_one} />
                  <h4>Client Name</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
