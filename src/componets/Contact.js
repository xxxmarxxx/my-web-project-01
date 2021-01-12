import React from "react";

import "../styles/Mariusz.css";
import "../styles/App.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-center clearfix">
        {/* <!-- contact info --> */}
        <article className="contact-info">
          {/* <!-- contact item --> */}
          <div className="contact-item">
            {/* <!-- contact text --> */}
            <h3 className="contact-title">
              <span className="contact-icon">
                <i className="fas fa-location-arrow"></i>
              </span>
              address
            </h3>
            <h3 className="contact-text">Berlin</h3>
          </div>
          {/* <!-- end of contact item -->
        <!-- contact item --> */}
          <div className="contact-item">
            {/* <!-- contact text --> */}
            <h3 className="contact-title">
              <span className="contact-icon">
                <i className="fas fa-envelope"></i>
              </span>
              email
            </h3>
            <h3 className="contact-text">testing@gmx.de</h3>
          </div>
          {/* <!-- end of contact item -->
        <!-- contact item --> */}
          <div className="contact-item">
            {/* <!-- contact text --> */}
            <h3 className="contact-title">
              <span>
                <i className="fas fa-phone"></i>
              </span>
              telephone
            </h3>
            <h3 className="contact-text">+ 30 999 999 999</h3>
          </div>
          {/* <!-- end of contact item --> */}
        </article>
        <article className="contact-form">
          <form
            className="form-group"
            onsubmit="alert('form was submitted'); return false;"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
            />
            <textarea
              name="message"
              placeholder="message"
              className="form-control"
              rows="5"
            ></textarea>
            <button className="main-btn">send</button>
          </form>
        </article>
        {/* <!-- end of contact info --> */}
      </div>
    </section>
  );
};

export default Contact;
