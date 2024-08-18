import React from "react";

export default function Contact() {
  return (
    <>
      <div className="get-in-touch" id="get-in-touch">
        <div className="container">
          <div className="head">
            <h2>Get in Touch</h2>
            <p className="case-text">
              Solving user &amp; business problems since last 15+ years.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="form">
            <form>
              <p>Email</p>
              <input type="text" className="form-control" />
              <p>Mobile</p>
              <input type="number" className="form-control" />
              <p>Message</p>
              <textarea rows={5} className="form-control" defaultValue={""} />
              <br />
              <button className="btn btn-success form-control">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
