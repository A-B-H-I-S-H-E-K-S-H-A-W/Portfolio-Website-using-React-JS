import React from "react";
import work_one from "../images/Mask group (3).png";
import work_two from "../images/Mask group (4).png";

export default function Recent() {
  return (
    <>
      <div className="recent-work" id="recent-work">
        <div className="container">
          <div className="head">
            <h2>Recent Work</h2>
            <p className="case-text">
              Solving user &amp; business problems since last 15+ years.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row test">
            <div className="col-md-6">
              <div className="card card-wid">
                <img src={work_one} />
                <h4>Work name here</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore sit maiores pariatur esse mollitia tenetur soluta
                  voluptas! Earum!
                </p>
                <button className="btn btn-success">
                  Know more <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-wid">
                <img src={work_two} />
                <h4>Work name here</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore sit maiores pariatur esse mollitia tenetur soluta
                  voluptas! Earum!
                </p>
                <button className="btn btn-success">
                  Know more <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
